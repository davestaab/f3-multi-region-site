import { tenants } from '~/utils/tenants/types';
import type { TenantId } from '~/utils/tenants/types';

export const useTenant = () => {
  const tenantId = useRuntimeConfig().public.tenant as TenantId;

  return tenants[tenantId] || tenants['knoxville']
}