import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light"
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        theme === "dark" ? "text-white" : "text-charcoal"
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 text-xs font-semibold uppercase tracking-[0.22em]",
            theme === "dark" ? "text-teal-100" : "text-teal"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl leading-[0.98] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-8 sm:text-lg",
            theme === "dark" ? "text-white/[0.72]" : "text-ink/70"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
