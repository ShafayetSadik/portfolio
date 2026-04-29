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
        <div className="border-l-4 border-accent bg-surface p-6 sm:p-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-muted">
            Availability
          </p>
          <p className="mt-4 text-lg leading-8 text-fg">
            {siteConfig.contact.availability}
          </p>
          <p className="mt-6 max-w-xl text-sm leading-7 text-muted sm:text-base">
            {siteConfig.contact.note}
          </p>

          <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-6">
            {siteConfig.contact.ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                target={cta.external ? "_blank" : undefined}
                rel={cta.external ? "noreferrer" : undefined}
                className={cn(
                  "inline-flex items-center px-5 py-3 text-sm font-medium transition-colors duration-200",
                  cta.variant === "primary"
                    ? "bg-accent text-bg hover:bg-fg"
                    : "border-2 border-fg text-fg hover:bg-fg hover:text-bg",
                )}
              >
                {cta.label}
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          {siteConfig.socials.map((social) => {
            const Icon = iconMap[social.icon];

            return (
              <a
                key={social.label}
                href={social.href}
                target={social.icon === "mail" ? undefined : "_blank"}
                rel={social.icon === "mail" ? undefined : "noreferrer"}
                className="flex items-center justify-between border-b border-border py-5 first:border-t transition-colors duration-200 hover:text-accent"
              >
                <span className="inline-flex items-center gap-3">
                  <Icon className="h-5 w-5" />
                  <span>
                    <span className="block text-xs uppercase tracking-[0.12em] text-muted">
                      {social.label}
                    </span>
                    <span className="mt-1 block text-base text-fg">
                      {social.value}
                    </span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted" />
              </a>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
