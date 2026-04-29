import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { aboutContent } from "@/content/about";

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      label={aboutContent.label}
      title={aboutContent.title}
      intro={aboutContent.intro}
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          {aboutContent.body.map((paragraph, index) => (
            <Reveal key={paragraph} delay={index * 0.1}>
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {aboutContent.stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <div className="card rounded-2xl p-6">
                <p className="bg-gradient-to-br from-fg to-fg/50 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
