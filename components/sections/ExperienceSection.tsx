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
      <div className="relative space-y-6 before:absolute before:bottom-0 before:left-[1.05rem] before:top-0 before:hidden before:w-px before:bg-border md:before:block">
        {experienceContent.items.map((item, index) => (
          <Reveal key={`${item.company}-${item.period}`} delay={index * 0.08}>
            <article className="grid gap-5 md:grid-cols-[2rem_1fr] md:gap-6">
              <div className="hidden justify-center pt-3 md:flex">
                <span
                  className="h-3.5 w-3.5 rounded-full bg-accent"
                  aria-hidden="true"
                />
              </div>
              <div className="surface-panel noise-outline p-6 sm:p-8">
                <div className="flex flex-col gap-3 border-b border-border pb-5 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="font-serif text-2xl italic text-fg">
                      {item.role}
                    </p>
                    <p className="mt-2 text-base text-muted">
                      {item.company} · {item.location}
                    </p>
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                    {item.period}
                  </p>
                </div>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-fg sm:text-base">
                  {item.summary}
                </p>

                <ul className="mt-6 space-y-3 text-sm leading-7 text-muted">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span
                        className="mt-3 h-px w-4 flex-shrink-0 bg-accent"
                        aria-hidden="true"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                  {item.stack.map((tool) => (
                    <Tag key={`${item.company}-${tool}`}>{tool}</Tag>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
