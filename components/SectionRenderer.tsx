import { sections } from "@/content/sections";

export function SectionRenderer() {
  return sections.map(({ id, component: Component }) => <Component key={id} />);
}
