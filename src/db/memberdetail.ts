import { MemberImageProps } from "../components/MemberImage";

export interface MemberDetailData {
  [key: string]: {
    slide: MemberImageProps[];
    climateZone: string;
    biome: string;
    facts: string[];
    weight: string;
    speed: string;
    lifespan: string;
    length: string;
  };
}

export const memberDetailData: MemberDetailData = {
  zebra: {
    slide: [
      { image: require("../../assets/images/red-panda.png") },
      { image: require("../../assets/images/red-panda.png") },
      { image: require("../../assets/images/red-panda.png") },
      { image: require("../../assets/images/red-panda.png") },
      { image: require("../../assets/images/red-panda.png") },
    ],
    weight: "90 - 310 kg",
    length: "2,5 – 3,9 m",
    lifespan: "8 – 10 years",
    speed: "96 km/h",
    climateZone: "Tropical temperate",
    biome: "Forest, rainforest, montane forest, riparian, shrubland, grass land",
    facts: [
      "The tiger is the national animal of India, Bangladesh, Malaysia, and South Korea.",
      'Did you know that a tiger"s coat pattern is still visible when it is shaved. This is not due to skin pigmentation but to the stubble and hair follicles embedded in the skin.',
    ],
  },
  tiger: {
    slide: [
      { image: require("../../assets/images/tiger-memberdetail.png") },
      { image: require("../../assets/images/tiger-memberdetail.png") },
      { image: require("../../assets/images/tiger-memberdetail.png") },
      { image: require("../../assets/images/tiger-memberdetail.png") },
      { image: require("../../assets/images/tiger-memberdetail.png") },
    ],
    weight: "90 - 310 kg",
    length: "2,5 – 3,9 m",
    lifespan: "8 – 10 years",
    speed: "96 km/h",
    climateZone: "Tropical temperate",
    biome: "Forest, rainforest, montane forest, riparian, shrubland, grass land",
    facts: [
      "The tiger is the national animal of India, Bangladesh, Malaysia, and South Korea.",
      'Did you know that a tiger"s coat pattern is still visible when it is shaved. This is not due to skin pigmentation but to the stubble and hair follicles embedded in the skin.',
    ],
  },
};
