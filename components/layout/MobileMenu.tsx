"use client";

import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
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
            className="fixed inset-0 z-40 bg-bg/80 backdrop-blur-sm"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-x-4 top-4 z-50 border border-border bg-bg p-6"
            initial={reduceMotion ? false : { opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
                Menu
              </p>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="text-muted transition-colors duration-200 hover:text-fg"
              >
                <X className="h-5 w-5" />
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
                    "py-3 text-left text-base transition-colors duration-200",
                    activeSection === section.id
                      ? "font-medium text-fg"
                      : "text-muted hover:text-fg",
                  )}
                >
                  {section.label}
                </button>
              ))}
            </nav>

            <div className="mt-6 border-t border-border pt-6">
              <a
                href={`mailto:${email}`}
                className="text-sm text-muted transition-colors duration-200 hover:text-fg"
              >
                {email}
              </a>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
