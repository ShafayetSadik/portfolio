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
        "scroll-mt-20 border-t-2 border-fg px-6 py-[60px] sm:px-8 lg:px-12 lg:py-[100px]",
        className,
      )}
    >
      <div className="mx-auto flex max-w-content flex-col gap-10">
        <div className="flex max-w-4xl flex-col">
          <div className="flex items-center border-b border-border pb-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-muted">
              {label}
            </p>
          </div>
          <Heading
            className={cn(
              "mt-8 font-serif text-5xl italic leading-[1.1] text-fg sm:text-6xl lg:text-7xl",
              headingClassName,
            )}
          >
            {title}
          </Heading>
          {intro ? (
            <p className="mt-8 max-w-2xl border-t border-border pt-6 text-base leading-8 text-muted sm:text-lg">
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
