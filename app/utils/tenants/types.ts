import knoxville from './knoxville';
import clinchValley from './clinchValley';
import test from './test';

export type TenantId = 'knoxville' | 'clinchValley' | 'test';
export interface AO {
  name: string;
  slug: string;
  locationName: string;
  locationDescription: string;
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
}

export const tenants: Record<TenantId, TenantConfig> = {
  knoxville,
  clinchValley,
  test
}
