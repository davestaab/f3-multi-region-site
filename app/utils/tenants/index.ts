import type { TenantConfig, TenantId } from "./types";
import knoxville from './knoxville/knoxville';
import clinchValley from "./clinchValley/clinchValley";
import test from "./test";

export const tenants: Record<TenantId, TenantConfig> = {
  knoxville,
  clinchValley,
  test
}
