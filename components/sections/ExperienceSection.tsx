import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { Tag } from "@/components/ui/Tag";
import { experienceContent } from "@/content/experience";

export function ExperienceSection() {
  return (
    <SectionShell
      id="experience"
      label={experienceContent.label}
      title={experienceContent.title}
      intro={experienceContent.intro}
    >
      <div className="space-y-4">
        {experienceContent.items.map((item, index) => (
          <Reveal key={`${item.company}-${item.period}`} delay={index * 0.08}>
            <article className="surface-panel noise-outline rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-base font-semibold text-fg">{item.role}</p>
                  <p className="mt-1 text-sm text-muted">
                    {item.company} · {item.location}
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center rounded-full border border-border/50 bg-surface/50 px-3 py-1 font-mono text-xs text-muted sm:mt-0.5">
                  {item.period}
                </span>
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                {item.summary}
              </p>

              <ul className="mt-4 space-y-2 text-sm text-muted">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2.5">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span className="leading-7">{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.stack.map((tool) => (
                  <Tag key={`${item.company}-${tool}`}>{tool}</Tag>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
