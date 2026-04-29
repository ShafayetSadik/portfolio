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
            <article className="card flex h-full flex-col justify-between rounded-2xl p-6 sm:p-8">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  <span className="text-xs font-medium uppercase tracking-[0.12em] text-accent">
                    Publication
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold leading-snug text-fg sm:text-lg">
                  {publication.title}
                </h3>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="rounded-md border border-border/50 bg-surface/50 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
                  {publication.venue}
                </span>
                {publication.status ? (
                  <span className="rounded-md bg-accent/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-accent">
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
