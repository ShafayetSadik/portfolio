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
            <article className="card flex h-full flex-col rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  <span className="font-mono text-xs font-medium text-accent">
                    {award.year}
                  </span>
                </span>
              </div>
              <h3 className="mt-4 flex-1 text-base font-semibold leading-snug text-fg">
                {award.title}
              </h3>
              <p className="mt-3 text-sm text-muted">{award.organization}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
