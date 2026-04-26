import { NavClient } from "@/components/layout/NavClient";
import { navigationSections } from "@/content/sections";
import { siteConfig } from "@/content/site";

export function Nav() {
  return (
    <NavClient
      name={siteConfig.name}
      email={siteConfig.email}
      sections={navigationSections}
    />
  );
}
