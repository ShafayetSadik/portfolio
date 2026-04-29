"use client";

import { useEffect, useState } from "react";
import { Mail, Menu } from "lucide-react";
import { MobileMenu } from "@/components/layout/MobileMenu";
import type { NavSection, SectionId } from "@/lib/types";
import { cn, scrollToSection } from "@/lib/utils";

interface NavClientProps {
  name: string;
  email: string;
  sections: NavSection[];
}

export function NavClient({ name, email, sections }: NavClientProps) {
  const [activeSection, setActiveSection] = useState<SectionId>("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id as SectionId);
        }
      },
      {
        rootMargin: "-42% 0px -42% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-8">
          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            className="text-sm font-semibold text-fg transition-colors duration-200 hover:text-muted"
          >
            {name}
          </button>

          <nav className="hidden items-center gap-7 md:flex">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "text-sm transition-colors duration-200",
                  activeSection === section.id
                    ? "font-medium text-fg"
                    : "text-muted hover:text-fg",
                )}
              >
                {section.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href={`mailto:${email}`}
              className="text-sm text-muted transition-colors duration-200 hover:text-fg"
            >
              {email}
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center text-muted transition-colors duration-200 hover:text-fg md:hidden"
            aria-label="Open navigation menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <MobileMenu
        email={email}
        open={menuOpen}
        activeSection={activeSection}
        sections={sections}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
