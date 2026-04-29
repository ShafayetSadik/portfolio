import { cn } from "@/lib/utils";

interface TagProps {
  children: string;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "rounded-md border border-accent/20 bg-accent/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-accent/80",
        className,
      )}
    >
      {children}
    </span>
  );
}
