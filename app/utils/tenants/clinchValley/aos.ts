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
  aoq: 'Tom Tom',
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
const theBrickYard: AO = {
  name: 'The Brick Yard',
  slug: 'the-brick-yard',
  locationName: 'Powell High School',
  locationDescription: 'Lower parking lots by playground: look for #shovelflag',
  aoq: 'Spellcheck',
  events: [{
    type: 'Bootcamp',
    description: 'Tuesday, Thursday 05:30-06:15am',
  }, {
    type: 'Bootcamp',
    description: 'Saturday 06:00-07:00am',
  }],
  mapUrl: 'https://map.f3nation.com/?eventId=33902&locationId=33902 ',
};
const theProjectVLS: AO = {
  name: 'The Project VLS',
  slug: 'the-project-vls',
  locationName: 'Melton Lake Park',
  locationDescription: 'Meet at the pavilion. Peer led discussion only, no workout.',
  events: [{
    type: 'Virtuous Leadership School',
    description: 'Wednesday 5:00AM - 6:00AM',
  }],
  aoq: 'Baby Face',
  mapUrl: 'https://map.f3nation.com/?eventId=50119&locationId=50060',
};

export const AOs: AO[] = [theProject, theProjectVLS, theBrickYard, lostPearls];