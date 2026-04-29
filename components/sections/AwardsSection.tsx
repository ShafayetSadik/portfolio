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
            <article className="surface-panel noise-outline h-full rounded-2xl p-6">
              <span className="inline-flex items-center rounded-full border border-accent/25 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] font-medium text-accent">
                {award.year}
              </span>
              <h3 className="mt-4 text-base font-semibold leading-snug text-fg">
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
