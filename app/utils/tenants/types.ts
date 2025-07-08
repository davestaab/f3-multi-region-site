import knoxville from './knoxville';
import anderson from './anderson';

export type TenantId = 'knoxville' | 'anderson';

export interface TenantConfig {
  name: string
  logo: string
}

export const tenants: Record<TenantId, TenantConfig> = {
  knoxville,
  anderson
}
