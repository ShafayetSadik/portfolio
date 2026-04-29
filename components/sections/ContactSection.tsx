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
      <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
        <div className="card rounded-2xl p-6 sm:p-8">
          <p className="text-base font-medium text-fg">
            {siteConfig.contact.availability}
          </p>
          <p className="mt-3 max-w-lg text-sm leading-7 text-muted">
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
                  "inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200",
                  cta.variant === "primary"
                    ? "bg-accent text-white hover:bg-accent/90 hover:shadow-[0_0_20px_color-mix(in_srgb,var(--accent)_40%,transparent)]"
                    : "border border-border/50 bg-surface/50 text-fg backdrop-blur-sm hover:border-border hover:bg-surface",
                )}
              >
                {cta.label}
                <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {siteConfig.socials.map((social) => {
            const Icon = iconMap[social.icon];

            return (
              <a
                key={social.label}
                href={social.href}
                target={social.icon === "mail" ? undefined : "_blank"}
                rel={social.icon === "mail" ? undefined : "noreferrer"}
                className="card flex items-center justify-between rounded-2xl px-5 py-4 transition-colors duration-200"
              >
                <span className="inline-flex items-center gap-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <Icon className="h-4 w-4 text-accent" />
                  </span>
                  <span>
                    <span className="block text-xs text-muted">{social.label}</span>
                    <span className="mt-0.5 block text-sm font-medium text-fg">
                      {social.value}
                    </span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted" />
              </a>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
