import { Place } from "./types/place";

export const PLACES: Place[] = [{
  id: 1,
  name: "Tim Hortons",
  category: "meals",
  address: "76 Stuart St, Kingston, ON K7L 2V7",
  latitude: 44.223652,
  longitude: -76.493216,
  phone: "+1 514-555-1234",
  website: "https://www.timhortons.ca",
  hours: {
    openNow: true,
    periods: [
      {
        open: { day: 0, hour: 6, minute: 0 },
        close: { day: 0, hour: 22, minute: 0 },
      },
      {
        open: { day: 1, hour: 6, minute: 0 },
        close: { day: 1, hour: 22, minute: 0 },
      },
      // repeat for rest of week
    ],
    weekdayDescriptions: [
      "Sunday: 6:00 AM – 10:00 PM",
      "Monday: 6:00 AM – 10:00 PM",
      "Tuesday: 6:00 AM – 10:00 PM",
      "Wednesday: 6:00 AM – 10:00 PM",
      "Thursday: 6:00 AM – 10:00 PM",
      "Friday: 6:00 AM – 11:00 PM",
      "Saturday: 6:00 AM – 11:00 PM",
    ],
    nextCloseTime: "22:00",
  },
  last_verified: new Date().toISOString(),
}];


export const FOOD = {
  name: "Donouts",
  items: [
    { name: "Donouts", qty: 3, price: 2 }
  ],
}