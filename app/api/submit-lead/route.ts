import { NextResponse } from "next/server";
import { z } from "zod";
import { leadSchema } from "@/lib/lead-schema";

export const runtime = "nodejs";

const requestSchema = leadSchema.extend({
  website: z.string().trim().max(200).optional().default("")
});

function getWebhookUrl() {
  const value = process.env.N8N_WEBHOOK_URL?.trim();
  if (!value) {
    return null;
  }

  try {
    const url = new URL(value);
    const isLocalTestUrl =
      url.protocol === "http:" && ["127.0.0.1", "localhost", "[::1]"].includes(url.hostname);
    return url.protocol === "https:" || isLocalTestUrl ? url : null;
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") || "";
  const contentLength = Number(request.headers.get("content-length") || 0);

  if (!contentType.toLowerCase().includes("application/json")) {
    return NextResponse.json({ error: "Content-Type must be application/json." }, { status: 415 });
  }

  if (contentLength > 32_000) {
    return NextResponse.json({ error: "Request is too large." }, { status: 413 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON request." }, { status: 400 });
  }

  const parsed = requestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Please review the consultation details.",
        fields: z.flattenError(parsed.error).fieldErrors
      },
      { status: 400 }
    );
  }

  // Quietly accept bot-filled honeypot submissions without forwarding them.
  if (parsed.data.website) {
    return NextResponse.json({ success: true });
  }

  const webhookUrl = getWebhookUrl();
  if (!webhookUrl) {
    console.error("N8N_WEBHOOK_URL is missing or invalid.");
    return NextResponse.json({ error: "Lead service is temporarily unavailable." }, { status: 503 });
  }

  const lead = leadSchema.parse(parsed.data);

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(lead),
      cache: "no-store",
      signal: AbortSignal.timeout(15_000)
    });

    if (!response.ok) {
      const responseBody = await response.text();
      console.error("n8n webhook rejected a lead.", {
        status: response.status,
        body: responseBody
      });
      return NextResponse.json({ error: "Lead service is temporarily unavailable." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Unable to deliver lead to n8n.", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ error: "Lead service is temporarily unavailable." }, { status: 502 });
  }
}
