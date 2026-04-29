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
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="text-base leading-7 text-muted">
            {siteConfig.contact.availability}
          </p>
          <p className="mt-4 max-w-lg text-sm leading-7 text-muted">
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
                  "inline-flex items-center px-5 py-2.5 text-sm font-medium transition-opacity duration-200 hover:opacity-70",
                  cta.variant === "primary"
                    ? "bg-fg text-bg"
                    : "border border-border text-fg",
                )}
              >
                {cta.label}
                <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>

        <div className="divide-y divide-border">
          {siteConfig.socials.map((social) => {
            const Icon = iconMap[social.icon];

            return (
              <a
                key={social.label}
                href={social.href}
                target={social.icon === "mail" ? undefined : "_blank"}
                rel={social.icon === "mail" ? undefined : "noreferrer"}
                className="flex items-center justify-between py-4 transition-colors duration-200 hover:text-muted"
              >
                <span className="inline-flex items-center gap-2.5 text-sm text-fg">
                  <Icon className="h-4 w-4 text-muted" />
                  {social.value}
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted" />
              </a>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
