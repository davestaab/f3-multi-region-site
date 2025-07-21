import knoxville from './knoxville';
import anderson from './anderson';
import test from './test';

export type TenantId = 'knoxville' | 'anderson' | 'test';

export interface TenantConfig {
  name: string
  logo?: string,
  headerImages?: string[],
}

export const tenants: Record<TenantId, TenantConfig> = {
  knoxville,
  anderson,
  test
}
