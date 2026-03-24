import type { AO } from "../types";

const asylumAm: AO = {
  name: 'Asylum AM',
  slug: 'asylum-am',
  locationName:'Lake Shore Park',
  locationDescription:'Lower parking lots by playground. Look for #shovelflag.',
  events: [{
    type: 'Bootcamp',
    description: 'Monday, Tuesday, Wednesday, Thursday, Friday 5:30 - 6:15 AM',
  },{
    type: 'Ruck',
    description: 'Monday 5:00 - 6:15 AM',
  }],
  aoq:'Tropicana',
  mapUrl:'https://map.f3nation.com/?locationId=33895&eventId=33879',
};
const asylumPm: AO = {
  name: 'Asylum PM',
  slug: 'asylum-pm',
  locationName:'Lake Shore Park',
  locationDescription:'(Winter) Lower parking lots by playground. (Summer) Upper lot by Lakeshore Administration building (due to summer youth sports parking congestion). Look for #shovelflag',
  events: [{
    type: 'Bootcamp',
    description: 'Tuesday, Thursday 5:45 - 6:30 PM',
  }],
  aoq:'Crash Dummy',
  mapUrl:'https://map.f3nation.com/?locationId=33895&eventId=33892',
};
const asylumDaybreak: AO = {
  name: 'Asylum Daybreak',
  slug: 'asylum-daybreak',
  locationName:'Lake Shore Park',
  locationDescription:'Lower parking lots by playground: look for #shovelflag',
  events: [{
    type: 'Bootcamp',
    description: 'Saturday 7:00 - 8:00 AM',
  }],
  aoq:'Lilydipper',
  mapUrl:'https://map.f3nation.com/?locationId=33895&eventId=33882',
};
const bigBall: AO = {
  name: 'Big Ball',
  slug: 'big-ball',
  locationName:'Worlds Fair Park',
  locationDescription:'#shovelflag next to fountains (upper park)',
  events: [{
    type: 'Bootcamp',
    description: 'Monday, Tuesday, Thursday 5:30 - 6:15 AM',
  },{
    type: 'Bootcamp',
    description: 'Saturday 7:00 - 8:00 AM',
  }],
  aoq:'Vanilla',
  mapUrl:'https://map.f3nation.com/?locationId=33894&eventId=33880',
};
// const theQuacken: AO = {
//   name: 'The Quacken',
//   slug: 'the-quacken',
//   locationName:'',
//   locationDescription:'',
//   events: [{
//   }],
//   aoq:'',
//   mapUrl:'',
// };
// const vlsCrossroads: AO = {
//   name: 'VLS Crossroads',
//   slug: 'vls-crossroads',
//   locationName:'',
//   locationDescription:'',
//   events: [{
//   }],
//   aoq:'',
//   mapUrl:'',
// };
// const chainBreakers: AO = {
//   name: 'Chain Breakers',
//   slug: 'chain-breakers',
//   locationName:'',
//   locationDescription:'',
//   events: [{
//   }],
//   aoq:'',
//   mapUrl:'',
// };

export const AOs = [asylumAm, asylumPm, asylumDaybreak, bigBall/*, theQuacken, vlsCrossroads, chainBreakers*/];