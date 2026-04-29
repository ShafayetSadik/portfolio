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
            className="bg-bg/80 fixed inset-0 z-40 backdrop-blur-sm"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="noise-outline fixed inset-x-4 top-4 z-50 border border-border bg-surface p-6"
            initial={reduceMotion ? false : { opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -24 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-8 flex items-center justify-between">
              <p className="font-serif text-xs italic tracking-[0.18em] text-muted">
                Navigation
              </p>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="inline-flex h-10 w-10 items-center justify-center border border-border text-fg transition-colors duration-300 hover:text-accent"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <nav className="flex flex-col gap-3">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => {
                    scrollToSection(section.id);
                    onClose();
                  }}
                  className={cn(
                    "surface-panel px-4 py-4 text-left text-lg transition-colors duration-300",
                    activeSection === section.id
                      ? "text-accent"
                      : "text-fg hover:text-accent",
                  )}
                >
                  {section.label}
                </button>
              ))}
            </nav>

            <a
              href={`mailto:${email}`}
              className="mt-8 inline-flex items-center gap-2 border border-border px-4 py-3 text-sm text-fg transition-colors duration-300 hover:text-accent"
            >
              <Mail className="h-4 w-4" />
              {email}
            </a>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
