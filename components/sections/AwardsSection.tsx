import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { awardsContent } from "@/content/awards";

export function AwardsSection() {
  return (
    <SectionShell
      id="awards"
      label={awardsContent.label}
      title={awardsContent.title}
      intro={awardsContent.intro}
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {awardsContent.items.map((award, index) => (
          <Reveal key={`${award.title}-${award.year}`} delay={index * 0.06}>
            <article className="surface-panel h-full p-6">
              <p className="font-mono text-xs text-muted">{award.year}</p>
              <h3 className="mt-3 text-base font-semibold leading-snug text-fg">
                {award.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{award.organization}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
