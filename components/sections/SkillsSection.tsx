import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { Tag } from "@/components/ui/Tag";
import { skillsContent } from "@/content/skills";

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      label={skillsContent.label}
      title={skillsContent.title}
      intro={skillsContent.intro}
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {skillsContent.groups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.08}>
            <article className="card rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <div>
                  <h3 className="text-base font-semibold text-fg">{group.title}</h3>
                  <p className="mt-1.5 text-sm leading-7 text-muted">{group.summary}</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2 pl-5">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
