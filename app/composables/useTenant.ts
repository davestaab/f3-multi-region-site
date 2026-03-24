import { tenants } from '~/tenants';
import type { TenantId } from '~/tenants/types';

export const useTenant = () => {
  const tenantId = useRuntimeConfig().public.tenant as TenantId;
  console.log(`Using tenant: ${tenantId}`);

  return tenants[tenantId] || tenants['westKnox']; // Fallback to westKnox if tenant not found
}