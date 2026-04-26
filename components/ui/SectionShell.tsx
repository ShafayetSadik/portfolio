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
        "scroll-mt-24 border-t border-border px-6 py-[60px] sm:px-8 lg:px-12 lg:py-[100px]",
        className,
      )}
    >
      <div className="mx-auto flex max-w-content flex-col gap-10">
        <div className="flex max-w-3xl flex-col gap-5">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
            {label}
          </p>
          <Heading
            className={cn(
              "font-serif text-4xl leading-tight tracking-tightest text-fg sm:text-5xl lg:text-6xl",
              headingClassName,
            )}
          >
            {title}
          </Heading>
          <span className="accent-divider h-px w-16" aria-hidden="true" />
          {intro ? (
            <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
              {intro}
            </p>
          ) : null}
        </div>
        <div className={cn("flex flex-col gap-8", contentClassName)}>
          {children}
        </div>
      </div>
    </section>
  );
}
