import { z } from "zod";

export const productInterests = [
  "Prescription Eyeglasses",
  "Blue Light Glasses",
  "Sunglasses",
  "Reading Glasses",
  "Not Sure Yet"
] as const;

export const frameStyles = [
  "Minimalist",
  "Classic",
  "Modern",
  "Luxury",
  "Sporty",
  "Vintage",
  "Bold Fashion"
] as const;

export const frameShapes = [
  "Rectangle",
  "Round",
  "Square",
  "Aviator",
  "Cat Eye",
  "Oval",
  "Browline",
  "No Preference"
] as const;

export const frameMaterials = [
  "Metal",
  "Acetate / Plastic",
  "Titanium",
  "Lightweight Frame",
  "No Preference"
] as const;

export const budgets = [
  "Under ₱1500",
  "₱1500 - ₱3000",
  "₱3000 - ₱5000",
  "₱5000+",
  "Not Sure"
] as const;

const phonePattern = /^[+\d][\d\s().-]{6,24}$/;

export const leadSchema = z.object({
  product_interest: z.enum(productInterests, "Choose the eyewear you are looking for."),
  frame_style: z.enum(frameStyles, "Choose the style that feels most like you."),
  frame_shape: z.enum(frameShapes, "Choose a preferred frame shape."),
  frame_material: z.enum(frameMaterials, "Choose a frame material."),
  budget: z.enum(budgets, "Choose an estimated budget."),
  full_name: z
    .string()
    .trim()
    .min(2, "Enter your full name using at least 2 characters.")
    .max(100, "Keep your name under 100 characters."),
  email: z.string().trim().email("Enter a valid email address.").max(254, "Email address is too long."),
  phone: z
    .string()
    .trim()
    .max(30, "Keep the phone number under 30 characters.")
    .refine((value) => value.length === 0 || phonePattern.test(value), {
      message: "Enter a valid phone number, including the country code when needed."
    }),
  message: z.string().trim().max(1000, "Keep your message under 1,000 characters.")
});

export type LeadFormValues = z.infer<typeof leadSchema>;

