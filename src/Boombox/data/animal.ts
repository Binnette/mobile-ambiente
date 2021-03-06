import { CategorieEntity } from "../Entities";
import { horse } from "./animal/horse";
import { cow } from "./animal/cow";
import { dog } from "./animal/dog";
import { bird } from "./animal/bird";
import { cat } from "./animal/cat";
import { frog } from "./animal/frog";
import { insect } from "./animal/insect";

export const animal: CategorieEntity = {
  name: "Tier",
  things: [bird, cat, dog, horse, cow, frog, insect]
};
