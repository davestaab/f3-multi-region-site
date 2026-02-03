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

export const AOs = [juco, dogpound, equalizer];