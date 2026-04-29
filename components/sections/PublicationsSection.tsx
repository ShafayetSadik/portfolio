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
            <article className="surface-panel noise-outline flex h-full flex-col justify-between p-6 sm:p-8">
              <div>
                <p className="font-serif text-xs italic tracking-[0.18em] text-muted">
                  Publication
                </p>
                <h3 className="mt-4 font-serif text-2xl leading-snug text-fg">
                  {publication.title}
                </h3>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="border border-border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  {publication.venue}
                </span>
                {publication.status ? (
                  <span className="bg-accent px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-bg">
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
