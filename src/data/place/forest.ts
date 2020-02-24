import { ThingEntity } from "../../Boombox";

export const forest: ThingEntity = {
  name: "Wald",
  emoji: "deciduous_tree",
  sounds: [
    {
      name: "Normal",
      emoji: "deciduous_tree",
      files: [{ path: "forest/distant-forest-ambience.mp3" }],
      type: "background"
    },
    {
      name: "Krähe",
      emoji: "deciduous_tree",
      files: [{ path: "forest/crow-three-times.mp3" }],
      type: "effect"
    }
  ]
};
