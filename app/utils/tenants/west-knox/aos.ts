import type { AO } from "../types";

const juco: AO = {
  name: 'JUCO',
  slug: 'juco',
  locationName: 'Pellissippi CC',
  locationDescription: 'First parking lot on right, from Hardin Valley Rd. Look for #shovelflag.',
  events: [{
    type: 'Bootcamp',
    description: 'Monday, Wednesday, Friday 5:30 - 6:15 AM',
  }],
  aoq: 'Mailbox',
  mapUrl: 'https://map.f3nation.com/?eventId=33881&locationId=33897'
};

const rush: AO = {
  name: 'JUCO Rush',
  slug: 'juco-rush',
  locationName: 'Pellissippi CC',
  locationDescription: 'First parking lot on right, from Hardin Valley Rd. Look for #shovelflag.',
  events: [{
    type: 'Run',
    description: 'Wednesday 5:15 - 6:15 AM',
  }],
  aoq: 'Trash Panda',
  mapUrl: 'https://map.f3nation.com/?locationId=33897&eventId=32373'
};

const dogpound: AO = {
  name: 'Dog Pound',
  slug: 'dogpound',
  locationName: 'Concord Park',
  locationDescription: 'Parking lot at Tennis Courts: look for #shovelflag.',
  events: [{
    type: 'Bootcamp',
    description: 'Tuesday, Thursday 5:30 - 6:15 AM',
  }],
  aoq: 'Lightweight',
  mapUrl: 'https://map.f3nation.com/?locationId=33893&eventId=33893'
};
const equalizer: AO = {
  name: 'The Equalizer',
  slug: 'equalizer',
  locationName: 'Carl Cowan Park',
  locationDescription: 'Carl Cowan Park. Look for #shovelflag.',
  events: [{
    type: 'Bootcamp',
    description: 'Monday, Wednesday, Friday 5:30 - 6:15 AM',
  }],
  aoq: 'Bookman',
  mapUrl: 'https://map.f3nation.com/?locationId=33885&eventId=33883'
};

const theFarm: AO = {
  name: 'The Farm',
  slug: 'the-farm',
  locationName: 'McFee Park',
  locationDescription: 'Parking lot – lower entrance. Look for #shovelflag.',
  events: [{
    type: 'Bootcamp',
    description: 'Monday, Wednesday, Friday 5:30 - 6:15 AM',
  }, {
    type: 'Bootcamp',
    description: 'Saturday 6:00 - 7:00 AM',
  }],
  aoq: 'Aladdin',
  mapUrl: 'https://map.f3nation.com/?locationId=43734&eventId=43732'
};

const thePulpit: AO = {
  name: 'The Pulpit',
  slug: 'the-pulpit',
  locationName: 'Grace Christian Academy',
  locationDescription: 'Park in parking lot across from baseball diamond. Look for #shovelflag.',
  events: [{
    type: 'Bootcamp',
    description: 'Wednesday 5:30 - 6:15 AM',
  }],
  aoq: 'Betty',
  mapUrl: 'https://map.f3nation.com/?locationId=46242&eventId=46242'
};


const shamrock: AO = {
  name: 'Shamrock',
  slug: 'shamrock',
  locationName: 'Catholic High School',
  locationDescription: 'At entrance off Fox Lonas Rd, first parking lot on left. Look for #shovelflag.',
  events: [{
    type: 'Bootcamp',
    description: 'Monday, Wednesday, Friday 5:30 - 6:15 AM',
  }],
  aoq: 'Slappy',
  mapUrl: 'https://map.f3nation.com/?locationId=43461&eventId=32372'
};

const shamruck: AO = {
  name: 'Shamruck',
  slug: 'shamruck',
  locationName: 'Catholic High School',
  locationDescription: 'At entrance off Fox Lonas Rd, first parking lot on left. Look for #shovelflag.',
  events: [{
    type: 'Ruck',
    description: 'Tuesday, Thursday 5:15 - 6:15 AM',
  }],
  aoq: 'Eliza',
  mapUrl: 'https://map.f3nation.com/?locationId=43461&eventId=43460'
};


export const AOs = [juco, dogpound, equalizer, theFarm, thePulpit, shamrock, shamruck, rush];