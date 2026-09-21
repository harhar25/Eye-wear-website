import { cn } from "@/lib/utils";

type FrameShapeProps = {
  className: string;
  label: string;
};

export function FrameShape({ className, label }: FrameShapeProps) {
  return (
    <div
      className={cn(
        "eyewear-frame text-charcoal transition duration-300 group-hover:text-teal",
        className
      )}
      role="img"
      aria-label={`${label} eyeglasses frame shape illustration`}
    >
      <span aria-hidden="true" />
    </div>
  );
}
