import { ArrowUpRight, BriefcaseBusiness, CodeXml, Mail } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

const ctaClassName =
  "inline-flex items-center justify-center px-5 py-3 text-sm transition-colors duration-300";

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
      className="border-t-0 pt-32 sm:pt-36 lg:pt-40"
      headingClassName="max-w-4xl text-5xl sm:text-6xl lg:text-7xl"
      contentClassName="gap-12"
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <p className="max-w-2xl text-lg leading-8 text-fg sm:text-xl">
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
                  ctaClassName,
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

          <div className="flex flex-wrap gap-3">
            {siteConfig.hero.highlights.map((highlight) => (
              <span
                key={highlight}
                className="border border-border px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-muted"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        <aside className="surface-panel noise-outline p-6 sm:p-8">
          <p className="font-serif text-xs italic tracking-[0.18em] text-muted">
            Availability
          </p>
          <p className="mt-4 text-lg leading-8 text-fg">
            {siteConfig.hero.availability}
          </p>
          <div className="mt-8 space-y-3">
            {siteConfig.socials.map((social) => {
              const Icon = socialIcons[social.icon];

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.icon === "mail" ? undefined : "_blank"}
                  rel={social.icon === "mail" ? undefined : "noreferrer"}
                  className="flex items-center justify-between border border-border px-4 py-4 text-sm text-fg transition-colors duration-300 hover:text-accent"
                >
                  <span className="inline-flex items-center gap-3">
                    <Icon className="h-4 w-4" />
                    {social.label}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
                    {social.value}
                  </span>
                </a>
              );
            })}
          </div>
        </aside>
      </div>
    </SectionShell>
  );
}
