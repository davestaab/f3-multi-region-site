import type { AO, TenantConfig } from "./types"

const config: TenantConfig = {
  name: 'Test Tenant',
  AOs: [
    createAO(),
    createAO({ slug: 'no-description', locationDescription: undefined, name: 'AO without location description' }),
  ]
}

function createAO(overrides?: Partial<AO>): AO {
  const ao: AO = {
    name: 'Test AO',
    slug: 'test',
    aoq: 'Tester',
    events: [{
      type: 'Bootcamp',
      description: 'Monday, Wednesday, Friday 5:30 - 6:15 AM',
    }],
    locationName: 'The Ao Location',
    locationDescription: 'In the obvious spot',
    mapUrl: 'https://map.f3nation.com/?eventId=33881&locationId=33897',
  };
  return { ...ao, ...overrides };
}

export default config;