import { ArrowUpRight, CodeXml } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { Tag } from "@/components/ui/Tag";
import { projectsContent } from "@/content/projects";

export function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      label={projectsContent.label}
      title={projectsContent.title}
      intro={projectsContent.intro}
    >
      <div className="space-y-4">
        {projectsContent.items.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.08}>
            <article className="surface-panel p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs text-muted">
                  {project.year}
                </span>
                <span className="text-border" aria-hidden="true">/</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Tag key={`${project.id}-${tag}`}>{tag}</Tag>
                  ))}
                </div>
              </div>

              <h3 className="mt-5 text-xl font-semibold text-fg">
                {project.title}
              </h3>
              <p className="mt-2 max-w-2xl text-base leading-7 text-muted">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center bg-fg px-4 py-2 text-sm font-medium text-bg transition-opacity duration-200 hover:opacity-70"
                  >
                    Visit project
                    <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                  </a>
                ) : null}
                {project.repository ? (
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center border border-border px-4 py-2 text-sm text-fg transition-colors duration-200 hover:text-muted"
                  >
                    Source
                    <CodeXml className="ml-1.5 h-3.5 w-3.5" />
                  </a>
                ) : null}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
