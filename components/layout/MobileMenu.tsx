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
            className="fixed inset-x-4 top-4 z-50 border-2 border-fg bg-bg p-6"
            initial={reduceMotion ? false : { opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -24 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-muted">
                Navigation
              </p>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="inline-flex h-9 w-9 items-center justify-center border border-border text-fg transition-colors duration-200 hover:text-accent"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <nav className="flex flex-col">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => {
                    scrollToSection(section.id);
                    onClose();
                  }}
                  className={cn(
                    "border-b border-border py-4 text-left text-base transition-colors duration-200",
                    activeSection === section.id
                      ? "font-semibold text-accent"
                      : "text-fg hover:text-accent",
                  )}
                >
                  {section.label}
                </button>
              ))}
            </nav>

            <a
              href={`mailto:${email}`}
              className="mt-6 inline-flex items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-fg"
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
