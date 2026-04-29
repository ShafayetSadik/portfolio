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
            <article className="surface-panel p-6 sm:p-8">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-base font-semibold text-fg">{item.role}</p>
                  <p className="mt-1 text-sm text-muted">
                    {item.company} · {item.location}
                  </p>
                </div>
                <p className="font-mono text-xs text-muted sm:text-right">
                  {item.period}
                </p>
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                {item.summary}
              </p>

              <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2.5">
                    <span className="mt-[11px] h-px w-3 flex-shrink-0 bg-border" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
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
