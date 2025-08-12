
export type TenantId = 'knoxville' | 'clinchValley' | 'test';
export interface AO {
  name: string;
  slug: string;
  locationName: string;
  locationDescription?: string;
  events: Event[];
  aoq: string;
  mapUrl: string;
}
interface Event {
  type: string;
  description: string;
}
export interface TenantConfig {
  name: string
  logo?: string,
  headerImages?: string[],
  AOs: AO[],
  Links: Link[],
}

export enum LinkType {
  Social,
  Page
}
interface Link {
  name: string;
  url: string;
  type: LinkType;
  icon?: string;
}