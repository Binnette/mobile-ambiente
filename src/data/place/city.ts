import { ThingEntity } from "../../Boombox";

export const city: ThingEntity = {
  name: "Stadt",
  emoji: "cityscape",
  sounds: [
    {
      name: "Strasse",
      files: [{ path: "city/residential-traffic.mp3" }],
      type: "background"
    },
    {
      name: "Hupe",
      files: [{ path: "city/car-horn-2.mp3" }],
      type: "effect"
    }
  ]
};