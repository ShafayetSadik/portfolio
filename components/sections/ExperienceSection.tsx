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
            <article className="card rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <div>
                    <p className="text-base font-semibold text-fg">{item.role}</p>
                    <p className="mt-0.5 text-sm text-muted">
                      {item.company} · {item.location}
                    </p>
                  </div>
                </div>
                <span className="ml-5 inline-flex shrink-0 items-center self-start rounded-full border border-border/50 bg-surface/50 px-3 py-1 font-mono text-xs text-muted sm:ml-0">
                  {item.period}
                </span>
              </div>

              <p className="mt-5 max-w-2xl pl-5 text-sm leading-7 text-muted sm:text-base">
                {item.summary}
              </p>

              <ul className="mt-4 space-y-2 pl-5">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2.5 text-sm text-muted">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent/60" aria-hidden="true" />
                    <span className="leading-7">{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2 pl-5">
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
