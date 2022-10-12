import { MemberImageProps } from "../components/MemberImage";
import { MemberItemProps } from "../components/MemberItem";
import { amphibiansItems, crustaceanItems, featheredItems, insectItems, mammalItems, reptileItems } from "./category";

export const headerSlide: MemberImageProps[] = [
  { name: "Red Panda", image: require("../../assets/images/slide/red-panda.png") },
  { name: "Tiger", image: require("../../assets/images/slide/tiger.png") },
  { name: "Zebra", image: require("../../assets/images/slide/zebra.png") },
  { name: "Lizard", image: require("../../assets/images/slide/lizard.png") },
  { name: "Flamigo", image: require("../../assets/images/slide/flamigo.png") },
];

// CategoryData
interface CategoryData {
  [key: string]: MemberItemProps[];
}

export const categoryData: CategoryData = {
  mammals: mammalItems,
  reptile: reptileItems,
  insect: insectItems,
  feathered: featheredItems,
  crustacean: crustaceanItems,
  amphibians: amphibiansItems,
};
