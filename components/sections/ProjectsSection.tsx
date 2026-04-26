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
    <div className="surface-panel rounded-[1.75rem] p-5">
      <div className="grid-backdrop rounded-[1.35rem] border border-border p-4">
        <div className="flex items-center justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
            Preview
          </p>
          <span className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
            System
          </span>
        </div>
        <div className="mt-6 space-y-3">
          <div className="accent-wash h-16 rounded-2xl border border-border" />
          <div className="grid gap-3 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={`${title}-${metric.label}`}
                className="surface-panel rounded-2xl p-4"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  {metric.label}
                </p>
                <p className="mt-2 text-lg text-fg">{metric.value}</p>
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
            <article className="surface-panel noise-outline rounded-[2rem] p-6 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted">
                      {project.year}
                    </p>
                    <span className="h-px w-8 bg-border" aria-hidden="true" />
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Tag key={`${project.id}-${tag}`}>{tag}</Tag>
                      ))}
                    </div>
                  </div>

                  <h3 className="mt-6 font-serif text-3xl text-fg sm:text-4xl">
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
                        className="inline-flex items-center rounded-full bg-accent px-5 py-3 text-sm text-bg transition-colors duration-300 hover:bg-fg"
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
                        className="inline-flex items-center rounded-full border border-border px-5 py-3 text-sm text-fg transition-colors duration-300 hover:text-accent"
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
