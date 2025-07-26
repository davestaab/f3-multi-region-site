import type { AO } from "../types";


const theProject: AO = {
  name: 'The Project',
  slug: 'the-project',
  locationName: 'Bissell Park',
  locationDescription: 'Meet in Oak Ridge Civic Center parking lot at edge of Bissell Park: look for #shovelflag',
  events: [{
    type: 'Bootcamp',
    description: 'Tuesday, Thursday 05: 30-06: 15am',
  }],
  aoq: 'Ocho',
  mapUrl: 'https://map.f3nation.com/?eventId=33874&locationId=33874',
}
const lostPearls: AO = {
  name: 'Lost Pearls',
  slug: 'lost-pearls',
  locationName: 'Clinton City Park',
  locationDescription: 'Look for the shovel-flag under the bridge.',
  events: [{
    type: 'Bootcamp',
    description: 'Monday 05:15-06:00am',
  }, {
    type: 'Ruck',
    description: 'Friday 05:15-06:00am',
  }],
  mapUrl: 'https://map.f3nation.com/?eventId=49950&locationId=49915',
  aoq: 'Bail Bonds',
};


export const AOs: AO[] = [theProject, lostPearls];