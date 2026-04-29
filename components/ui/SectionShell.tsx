import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionShellProps {
  id: string;
  label: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  headingClassName?: string;
  titleAs?: "h1" | "h2";
}

export function SectionShell({
  id,
  label,
  title,
  intro,
  children,
  className,
  contentClassName,
  headingClassName,
  titleAs = "h2",
}: SectionShellProps) {
  const Heading = titleAs;

  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 border-t border-border px-6 py-20 sm:px-8 lg:px-12 lg:py-32",
        className,
      )}
    >
      <div className="mx-auto flex max-w-content flex-col gap-12">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
            {label}
          </p>
          <Heading
            className={cn(
              "font-serif text-3xl font-semibold leading-tight text-fg sm:text-4xl lg:text-5xl",
              headingClassName,
            )}
          >
            {title}
          </Heading>
          {intro ? (
            <p className="pt-2 text-base leading-8 text-muted sm:text-lg">
              {intro}
            </p>
          ) : null}
        </div>
        <div className={cn("flex flex-col gap-6", contentClassName)}>
          {children}
        </div>
      </div>
    </section>
  );
}
