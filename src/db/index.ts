import { MemberImageProps } from "../components/MemberImage";
import { MemberItemProps } from "../components/MemberItem";
import { mammalItems } from "./category";

export const headerSlide: MemberImageProps[] = [
  { name: "Red Panda", image: require("../../assets/images/red-panda.png") },
  { name: "Tiger", image: require("../../assets/images/tiger.png") },
  { name: "Tiger 2", image: require("../../assets/images/tiger.png") },
];

// CategoryData
interface CategoryData {
  [key: string]: MemberItemProps[];
}

export const categoryData: CategoryData = {
  mammals: mammalItems,
};
