import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  hint?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, error, hint, id, label, required, ...props },
  ref
) {
  const errorId = error && id ? `${id}-error` : undefined;
  const hintId = hint && id ? `${id}-hint` : undefined;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-charcoal">
        {label}
        {required ? <span className="ml-1 text-wine" aria-hidden="true">*</span> : null}
      </label>
      <input
        ref={ref}
        id={id}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={errorId || hintId}
        className={cn(
          "mt-2 min-h-12 w-full rounded-md border bg-white px-4 text-base text-charcoal outline-none transition placeholder:text-ink/35 focus:border-teal focus:ring-4 focus:ring-teal/10",
          error ? "border-wine" : "border-charcoal/15",
          className
        )}
        {...props}
      />
      {error ? (
        <p id={errorId} className="mt-2 text-sm leading-5 text-wine" role="alert">
          {error}
        </p>
      ) : hint ? (
        <p id={hintId} className="mt-2 text-sm leading-5 text-ink/55">
          {hint}
        </p>
      ) : null}
    </div>
  );
});

