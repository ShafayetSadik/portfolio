import { ArrowUpRight, BriefcaseBusiness, CodeXml, Mail } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

const iconMap = {
  github: CodeXml,
  linkedin: BriefcaseBusiness,
  mail: Mail,
};

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      label={siteConfig.contact.label}
      title={siteConfig.contact.title}
      intro={siteConfig.contact.intro}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="surface-panel noise-outline p-6 sm:p-8">
          <p className="font-serif text-xs italic tracking-[0.18em] text-muted">
            Availability
          </p>
          <p className="mt-4 text-lg leading-8 text-fg">
            {siteConfig.contact.availability}
          </p>
          <p className="mt-6 max-w-xl text-sm leading-7 text-muted sm:text-base">
            {siteConfig.contact.note}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {siteConfig.contact.ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                target={cta.external ? "_blank" : undefined}
                rel={cta.external ? "noreferrer" : undefined}
                className={cn(
                  "inline-flex items-center px-5 py-3 text-sm transition-colors duration-300",
                  cta.variant === "primary"
                    ? "bg-accent text-bg hover:bg-fg hover:text-bg"
                    : "border border-border text-fg hover:text-accent",
                )}
              >
                {cta.label}
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {siteConfig.socials.map((social) => {
            const Icon = iconMap[social.icon];

            return (
              <a
                key={social.label}
                href={social.href}
                target={social.icon === "mail" ? undefined : "_blank"}
                rel={social.icon === "mail" ? undefined : "noreferrer"}
                className="surface-panel noise-outline flex items-center justify-between px-5 py-5 transition-colors duration-300 hover:text-accent"
              >
                <span className="inline-flex items-center gap-3">
                  <Icon className="h-5 w-5" />
                  <span>
                    <span className="block text-sm text-muted">
                      {social.label}
                    </span>
                    <span className="mt-1 block text-base text-fg">
                      {social.value}
                    </span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
