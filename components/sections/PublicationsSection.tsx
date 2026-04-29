import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { publicationsContent } from "@/content/publications";

export function PublicationsSection() {
  return (
    <SectionShell
      id="publications"
      label={publicationsContent.label}
      title={publicationsContent.title}
      intro={publicationsContent.intro}
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {publicationsContent.items.map((publication, index) => (
          <Reveal key={publication.title} delay={index * 0.06}>
            <article className="surface-panel flex h-full flex-col justify-between p-6 sm:p-8">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
                  Publication
                </p>
                <h3 className="mt-3 text-base font-semibold leading-snug text-fg sm:text-lg">
                  {publication.title}
                </h3>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                  {publication.venue}
                </span>
                {publication.status ? (
                  <span className="bg-fg px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-bg">
                    {publication.status}
                  </span>
                ) : null}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
