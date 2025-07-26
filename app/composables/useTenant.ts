import { tenants } from '~/utils/tenants/types';
import type { TenantId } from '~/utils/tenants/types';

export const useTenant = () => {
  const tenantId = useRuntimeConfig().public.tenant as TenantId;
  // console.log(`Using tenant: ${tenantId}`);

  return tenants[tenantId] || tenants['knoxville']; // Fallback to Knoxville if tenant not found
}