import { siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-content flex-col gap-3 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>
          {new Date().getFullYear()} {siteConfig.name}. {siteConfig.footerNote}
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.18em]">
          {siteConfig.location}
        </p>
      </div>
    </footer>
  );
}
