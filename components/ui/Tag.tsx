import { cn } from "@/lib/utils";

interface TagProps {
  children: string;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
