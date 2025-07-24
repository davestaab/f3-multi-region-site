import knoxville from './knoxville';
import anderson from './anderson';
import test from './test';

export type TenantId = 'knoxville' | 'anderson' | 'test';
export interface AO {
  name: string;
  slug: string;
  locationName: string;
  locationDescription: string;
  dayTimeLabel: string;
  aoq:string;
  mapUrl: string;
}
export interface TenantConfig {
  name: string
  logo?: string,
  headerImages?: string[],
  AOs: AO[],
}

export const tenants: Record<TenantId, TenantConfig> = {
  knoxville,
  anderson,
  test
}
