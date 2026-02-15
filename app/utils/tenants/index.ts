import type { TenantConfig, TenantId } from "./types";
import westKnox from './west-knox/west-knox';
import clinchValley from "./clinch-valley/clinch-valley";
import test from "./test";

export const tenants: Record<TenantId, TenantConfig> = {
  westKnox,
  clinchValley,
  test
}
