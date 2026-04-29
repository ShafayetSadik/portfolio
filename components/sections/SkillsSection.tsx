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
      <div className="grid gap-5 lg:grid-cols-2">
        {skillsContent.groups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.08}>
            <article className="surface-panel noise-outline p-6 sm:p-8">
              <div className="mb-6">
                <h3 className="font-serif text-2xl text-fg">{group.title}</h3>
                <p className="mt-3 max-w-lg text-sm leading-7 text-muted">
                  {group.summary}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
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
