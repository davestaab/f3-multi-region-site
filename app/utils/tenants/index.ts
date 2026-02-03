import type { TenantConfig, TenantId } from "./types";
import westTown from './west-town/west-town';
import clinchValley from "./clinchValley/clinchValley";
import test from "./test";

export const tenants: Record<TenantId, TenantConfig> = {
  westTown,
  clinchValley,
  test
}
