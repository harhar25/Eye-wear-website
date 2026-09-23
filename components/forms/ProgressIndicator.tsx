import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type ProgressIndicatorProps = {
  currentStep: number;
  labels: readonly string[];
};

export function ProgressIndicator({ currentStep, labels }: ProgressIndicatorProps) {
  const progress = ((currentStep + 1) / labels.length) * 100;

  return (
    <div aria-label={`Step ${currentStep + 1} of ${labels.length}: ${labels[currentStep]}`}>
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">
          Step {currentStep + 1} of {labels.length}
        </p>
        <p className="text-xs font-semibold text-ink/55">{labels[currentStep]}</p>
      </div>
      <div
        className="mt-3 h-1.5 overflow-hidden rounded-full bg-charcoal/10"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={labels.length}
        aria-valuenow={currentStep + 1}
      >
        <div className="h-full rounded-full bg-teal transition-[width] duration-500" style={{ width: `${progress}%` }} />
      </div>
      <ol className="mt-5 hidden grid-cols-6 gap-2 sm:grid" aria-hidden="true">
        {labels.map((label, index) => (
          <li key={label} className="flex justify-center">
            <span
              className={cn(
                "flex h-7 w-7 items-center justify-center rounded-full border text-xs font-bold transition",
                index < currentStep && "border-teal bg-teal text-white",
                index === currentStep && "border-charcoal bg-charcoal text-white",
                index > currentStep && "border-charcoal/15 bg-white text-ink/40"
              )}
            >
              {index < currentStep ? <Check className="h-3.5 w-3.5" /> : index + 1}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

