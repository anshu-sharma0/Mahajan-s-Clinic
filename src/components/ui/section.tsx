import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva("w-full", {
  variants: {
    background: {
      default: "bg-background",
      muted: "bg-muted",
      alt: "bg-section-alt",
      primary: "bg-primary text-primary-foreground",
    },
    spacing: {
      default: "py-16 md:py-24",
      sm: "py-10 md:py-16",
      lg: "py-20 md:py-32",
      none: "py-0",
    },
  },
  defaultVariants: {
    background: "default",
    spacing: "default",
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  heading?: string;
  subheading?: string;
  centered?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      background,
      spacing,
      heading,
      subheading,
      centered = true,
      children,
      ...props
    },
    ref
  ) => (
    <section
      ref={ref}
      className={cn(sectionVariants({ background, spacing, className }))}
      {...props}
    >
      <div className="container mx-auto px-4 md:px-6">
        {(heading || subheading) && (
          <div
            className={cn(
              "mb-12 max-w-2xl",
              centered && "mx-auto text-center"
            )}
          >
            {subheading && (
              <span className="mb-3 inline-block text-sm font-medium uppercase tracking-wider text-primary">
                {subheading}
              </span>
            )}
            {heading && (
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-balance">
                {heading}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
);
Section.displayName = "Section";

export { Section, sectionVariants };
