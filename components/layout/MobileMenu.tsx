"use client";

import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Mail, X } from "lucide-react";
import type { NavSection, SectionId } from "@/lib/types";
import { cn, scrollToSection } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  email: string;
  activeSection: SectionId;
  sections: NavSection[];
  onClose: () => void;
}

export function MobileMenu({
  open,
  email,
  activeSection,
  sections,
  onClose,
}: MobileMenuProps) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <div className="md:hidden">
          <motion.div
            className="fixed inset-0 z-40 bg-bg/60 backdrop-blur-sm"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-x-4 top-4 z-50 rounded-2xl border border-border/50 bg-surface/90 p-5 backdrop-blur-xl"
            initial={reduceMotion ? false : { opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -16, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="text-sm font-semibold text-fg">Navigation</span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-border/50 text-muted transition-colors duration-200 hover:text-fg"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <nav className="flex flex-col gap-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => {
                    scrollToSection(section.id);
                    onClose();
                  }}
                  className={cn(
                    "rounded-xl px-4 py-3 text-left text-base transition-colors duration-200",
                    activeSection === section.id
                      ? "bg-accent/10 text-accent"
                      : "text-muted hover:bg-surface hover:text-fg",
                  )}
                >
                  {section.label}
                </button>
              ))}
            </nav>

            <div className="mt-4 border-t border-border/50 pt-4">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-fg"
              >
                <Mail className="h-4 w-4" />
                {email}
              </a>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
