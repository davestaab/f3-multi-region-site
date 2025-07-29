import type { TenantConfig } from "./types"

const config: TenantConfig = {
  name: 'Test Tenant',
  AOs: [
    {
      name: 'Test',
      slug: 'test',
      aoq: 'tester',
      events: [{
        type: 'Bootcamp',
        description: 'Monday, Wednesday, Friday 5:30 - 6:15 AM',
      }],
      locationDescription: 'In the obvious spot',
      locationName: 'The Ao Location',
      mapUrl: 'https://map.f3nation.com/?eventId=33881&locationId=33897',
    }
  ]
}

export default config;