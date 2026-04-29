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
      className="pt-36 sm:pt-40 lg:pt-44"
      headingClassName="max-w-3xl text-5xl sm:text-6xl lg:text-7xl bg-gradient-to-b from-fg to-fg/70 bg-clip-text text-transparent"
      contentClassName="gap-12"
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
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

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {siteConfig.hero.highlights.map((highlight, i) => (
              <span key={highlight} className="flex items-center gap-4">
                <span className="text-sm text-muted">{highlight}</span>
                {i < siteConfig.hero.highlights.length - 1 && (
                  <span className="text-border" aria-hidden="true">·</span>
                )}
              </span>
            ))}
          </div>
        </div>

        <aside className="card rounded-2xl p-6 sm:p-8">
          <span className="inline-flex items-center rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            Availability
          </span>
          <p className="mt-4 text-base leading-7 text-fg">
            {siteConfig.hero.availability}
          </p>
          <div className="mt-7 space-y-1">
            {siteConfig.socials.map((social) => {
              const Icon = socialIcons[social.icon];

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.icon === "mail" ? undefined : "_blank"}
                  rel={social.icon === "mail" ? undefined : "noreferrer"}
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-sm text-muted transition-colors duration-200 hover:bg-surface hover:text-fg"
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
