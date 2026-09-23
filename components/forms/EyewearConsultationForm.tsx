"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence } from "framer-motion";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CircleHelp,
  Feather,
  Gem,
  Glasses,
  Landmark,
  Layers3,
  LoaderCircle,
  Monitor,
  MoonStar,
  Shapes,
  Sparkles,
  Sun,
  WalletCards,
  Zap
} from "lucide-react";
import { useForm, type FieldPath } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { FormStep } from "@/components/forms/FormStep";
import { FormSuccess } from "@/components/forms/FormSuccess";
import { ProgressIndicator } from "@/components/forms/ProgressIndicator";
import { SelectionCard } from "@/components/forms/SelectionCard";
import {
  budgets,
  frameMaterials,
  frameShapes,
  frameStyles,
  leadSchema,
  productInterests,
  type LeadFormValues
} from "@/lib/lead-schema";

const stepLabels = ["Eyewear", "Style", "Shape", "Material", "Budget", "Your details"] as const;

const selectionSteps = [
  {
    field: "product_interest" as const,
    title: "What type of eyewear are you looking for?",
    description: "Choose the option closest to what you need today.",
    options: productInterests.map((label, index) => ({
      label,
      icon: [Glasses, Monitor, Sun, BookOpen, CircleHelp][index]
    }))
  },
  {
    field: "frame_style" as const,
    title: "What style matches your personality?",
    description: "Think about what you would feel confident wearing most often.",
    options: frameStyles.map((label, index) => ({
      label,
      icon: [MoonStar, Landmark, Sparkles, Gem, Activity, BookOpen, Zap][index]
    }))
  },
  {
    field: "frame_shape" as const,
    title: "Which frame shape do you prefer?",
    description: "Pick a silhouette you already enjoy, or leave the choice open to us.",
    options: frameShapes.map((label) => ({ label, icon: label === "No Preference" ? CircleHelp : Shapes }))
  },
  {
    field: "frame_material" as const,
    title: "What frame material do you prefer?",
    description: "Material influences weight, feel, finish, and everyday comfort.",
    options: frameMaterials.map((label, index) => ({
      label,
      icon: [Landmark, Layers3, Gem, Feather, CircleHelp][index]
    }))
  },
  {
    field: "budget" as const,
    title: "What is your estimated budget?",
    description: "A comfortable range helps us focus on realistic recommendations.",
    options: budgets.map((label) => ({ label, icon: WalletCards }))
  }
];

const defaultValues: LeadFormValues = {
  product_interest: undefined as unknown as LeadFormValues["product_interest"],
  frame_style: undefined as unknown as LeadFormValues["frame_style"],
  frame_shape: undefined as unknown as LeadFormValues["frame_shape"],
  frame_material: undefined as unknown as LeadFormValues["frame_material"],
  budget: undefined as unknown as LeadFormValues["budget"],
  full_name: "",
  email: "",
  phone: "",
  message: ""
};

export function EyewearConsultationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [serverError, setServerError] = useState("");
  const [website, setWebsite] = useState("");
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
    trigger,
    watch
  } = useForm<LeadFormValues>({
    defaultValues,
    resolver: zodResolver(leadSchema),
    mode: "onTouched"
  });

  const isDetailsStep = currentStep === selectionSteps.length;
  const currentSelectionStep = selectionSteps[currentStep];

  const goForward = async () => {
    if (!currentSelectionStep) {
      return;
    }

    const isValid = await trigger(currentSelectionStep.field, { shouldFocus: true });
    if (isValid) {
      setDirection(1);
      setCurrentStep((step) => Math.min(step + 1, stepLabels.length - 1));
    }
  };

  const goBack = () => {
    setServerError("");
    setDirection(-1);
    setCurrentStep((step) => Math.max(step - 1, 0));
  };

  const submitLead = async (values: LeadFormValues) => {
    setServerError("");

    try {
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website })
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setIsComplete(true);
    } catch {
      setServerError("We couldn't send your consultation right now. Please try again in a moment.");
    }
  };

  const restart = () => {
    reset(defaultValues);
    setWebsite("");
    setServerError("");
    setCurrentStep(0);
    setDirection(-1);
    setIsComplete(false);
  };

  if (isComplete) {
    return (
      <Card className="overflow-hidden">
        <FormSuccess onReset={restart} />
      </Card>
    );
  }

  const currentError = currentSelectionStep
    ? errors[currentSelectionStep.field]?.message
    : undefined;

  return (
    <Card className="overflow-hidden">
      <div className="border-b border-charcoal/[0.08] bg-porcelain/50 px-5 py-5 sm:px-8">
        <ProgressIndicator currentStep={currentStep} labels={stepLabels} />
      </div>

      <form className="relative px-5 py-7 sm:px-8 sm:py-9" noValidate onSubmit={handleSubmit(submitLead)}>
        <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
          />
        </div>

        <div className="min-h-[29rem] sm:min-h-[31rem]">
          <AnimatePresence mode="wait" initial={false}>
            <div key={currentStep}>
              {currentSelectionStep ? (
                <FormStep
                  direction={direction}
                  title={currentSelectionStep.title}
                  description={currentSelectionStep.description}
                  error={currentError}
                >
                  <fieldset>
                    <legend className="sr-only">{currentSelectionStep.title}</legend>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {currentSelectionStep.options.map((option) => {
                        const Icon = option.icon;
                        const field = currentSelectionStep.field as FieldPath<LeadFormValues>;
                        return (
                          <SelectionCard
                            key={option.label}
                            title={option.label}
                            value={option.label}
                            checked={watch(field) === option.label}
                            icon={<Icon aria-hidden="true" className="h-5 w-5" />}
                            {...register(field)}
                          />
                        );
                      })}
                    </div>
                  </fieldset>
                </FormStep>
              ) : (
                <FormStep
                  direction={direction}
                  title="Where should we send your recommendations?"
                  description="Share your details so we can follow up with suitable eyewear options."
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Input
                      id="full_name"
                      label="Full Name"
                      autoComplete="name"
                      required
                      error={errors.full_name?.message}
                      {...register("full_name")}
                    />
                    <Input
                      id="email"
                      type="email"
                      label="Email Address"
                      autoComplete="email"
                      required
                      error={errors.email?.message}
                      {...register("email")}
                    />
                    <Input
                      id="phone"
                      type="tel"
                      label="Phone Number"
                      autoComplete="tel"
                      inputMode="tel"
                      hint="Optional. Include your country code when applicable."
                      error={errors.phone?.message}
                      {...register("phone")}
                    />
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm font-semibold text-charcoal">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        maxLength={1000}
                        placeholder="Anything else we should consider?"
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        className="mt-2 w-full resize-y rounded-md border border-charcoal/15 bg-white px-4 py-3 text-base text-charcoal outline-none transition placeholder:text-ink/35 focus:border-teal focus:ring-4 focus:ring-teal/10"
                        {...register("message")}
                      />
                      {errors.message ? (
                        <p id="message-error" className="mt-2 text-sm text-wine" role="alert">
                          {errors.message.message}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </FormStep>
              )}
            </div>
          </AnimatePresence>
        </div>

        {serverError ? (
          <p className="mb-5 rounded-md border border-wine/20 bg-wine/[0.06] px-4 py-3 text-sm text-wine" role="alert">
            {serverError}
          </p>
        ) : null}

        <div className="flex items-center justify-between gap-3 border-t border-charcoal/[0.08] pt-6">
          <Button variant="ghost" onClick={goBack} disabled={currentStep === 0 || isSubmitting}>
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Back
          </Button>

          {isDetailsStep ? (
            <Button type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
              {isSubmitting ? (
                <>
                  <LoaderCircle aria-hidden="true" className="h-4 w-4 animate-spin" />
                  Finding your perfect pair...
                </>
              ) : (
                <>
                  Send Consultation
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </>
              )}
            </Button>
          ) : (
            <Button onClick={goForward}>
              Continue
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
          )}
        </div>
      </form>
    </Card>
  );
}

