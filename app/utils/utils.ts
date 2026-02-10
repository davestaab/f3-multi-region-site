import type { NavigationMenuChildItem } from "@nuxt/ui";
import type { AO } from "./tenants/types";

export function createMenu(ao: AO): NavigationMenuChildItem {
  return {
    label: ao.name,
    to: `/aos/${ao.slug}`,
  }
}
export function sortAlphabetically(accessor: (a: AO) => string): (a: AO, b: AO) => number {
  return (a, b) => accessor(a).localeCompare(accessor(b));
}