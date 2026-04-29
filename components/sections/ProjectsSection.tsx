import { ArrowUpRight, CodeXml } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { Tag } from "@/components/ui/Tag";
import { projectsContent } from "@/content/projects";

function ProjectPreview({
  title,
  metrics,
}: {
  title: string;
  metrics: { label: string; value: string }[];
}) {
  return (
    <div className="border border-border bg-surface p-5">
      <div className="grid-backdrop border border-border p-4">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
            Preview
          </p>
          <span className="bg-accent px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-bg">
            System
          </span>
        </div>
        <div className="mt-4 space-y-3">
          <div className="accent-wash h-14 border border-border" />
          <div className="grid gap-3 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={`${title}-${metric.label}`}
                className="border border-border bg-bg p-4"
              >
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                  {metric.label}
                </p>
                <p className="mt-2 font-serif italic text-lg text-fg">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      label={projectsContent.label}
      title={projectsContent.title}
      intro={projectsContent.intro}
    >
      <div className="space-y-6">
        {projectsContent.items.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.08}>
            <article className="surface-panel noise-outline p-6 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <div className="flex flex-wrap items-center gap-3 border-b border-border pb-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
                      {project.year}
                    </p>
                    <span className="h-px w-6 bg-border" aria-hidden="true" />
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Tag key={`${project.id}-${tag}`}>{tag}</Tag>
                      ))}
                    </div>
                  </div>

                  <h3 className="mt-6 font-serif text-3xl italic text-fg sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-fg">
                    {project.summary}
                  </p>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                    {project.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center bg-accent px-5 py-3 text-sm font-medium text-bg transition-colors duration-200 hover:bg-fg"
                      >
                        Visit project
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </a>
                    ) : null}
                    {project.repository ? (
                      <a
                        href={project.repository}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center border-2 border-fg px-5 py-3 text-sm font-medium text-fg transition-colors duration-200 hover:bg-fg hover:text-bg"
                      >
                        Source
                        <CodeXml className="ml-2 h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </div>

                <ProjectPreview
                  title={project.title}
                  metrics={project.metrics}
                />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
