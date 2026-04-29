import { ArrowUpRight, BriefcaseBusiness, CodeXml, Mail } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

const socialIcons = {
  github: CodeXml,
  linkedin: BriefcaseBusiness,
  mail: Mail,
};

export function HeroSection() {
  return (
    <SectionShell
      id="hero"
      label={siteConfig.hero.label}
      title={siteConfig.hero.title}
      intro={siteConfig.hero.intro}
      titleAs="h1"
      className="border-t-0 pt-36 sm:pt-40 lg:pt-44"
      headingClassName="max-w-3xl text-4xl font-semibold sm:text-5xl lg:text-6xl"
      contentClassName="gap-12"
    >
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <p className="max-w-xl text-lg leading-8 text-muted">
            {siteConfig.hero.kicker}
          </p>

          <div className="flex flex-wrap gap-3">
            {siteConfig.hero.ctas.map((cta) => (
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

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {siteConfig.hero.highlights.map((highlight, i) => (
              <span key={highlight} className="flex items-center gap-4">
                <span className="text-sm text-muted">{highlight}</span>
                {i < siteConfig.hero.highlights.length - 1 && (
                  <span className="text-border" aria-hidden="true">
                    /
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>

        <aside className="surface-panel p-6 sm:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
            Availability
          </p>
          <p className="mt-3 text-base leading-7 text-fg">
            {siteConfig.hero.availability}
          </p>
          <div className="mt-8 space-y-0 divide-y divide-border">
            {siteConfig.socials.map((social) => {
              const Icon = socialIcons[social.icon];

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.icon === "mail" ? undefined : "_blank"}
                  rel={social.icon === "mail" ? undefined : "noreferrer"}
                  className="flex items-center justify-between py-4 text-sm text-muted transition-colors duration-200 hover:text-fg"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <Icon className="h-4 w-4" />
                    {social.label}
                  </span>
                  <span className="font-mono text-xs">{social.value}</span>
                </a>
              );
            })}
          </div>
        </aside>
      </div>
    </SectionShell>
  );
}
