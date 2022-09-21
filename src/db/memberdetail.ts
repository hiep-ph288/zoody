import { MemberImageProps } from "../components/MemberImage";
import { PartSummaryProps } from "../components/PartSummary";

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
    bodyParts: PartSummaryProps[];
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
    bodyParts: [
      {
        image: require("../../assets/images/tiger11.png"),
        title: 'Bộ Phận 1',
        summary: 'Chức năng cơ bản của bộ phận/giống/điểm đặc biệt muốn đề cập.',
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/tiger11.png"),
        title: 'Bộ Phận 2',
        summary: 'Chức năng cơ bản của bộ phận/giống/điểm đặc biệt muốn đề cập.',
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/tiger11.png"),
        title: 'Bộ Phận 3',
        summary: 'Chức năng cơ bản của bộ phận/giống/điểm đặc biệt muốn đề cập.',
        icon: require("../../assets/images/vecter.png"),
      }
    ]
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
    bodyParts: [
      {
        image: require("../../assets/images/tiger11.png"),
        title: 'Bộ Phận 1',
        summary: 'Chức năng cơ bản của bộ phận/giống/điểm đặc biệt muốn đề cập.',
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/tiger11.png"),
        title: 'Bộ Phận 2',
        summary: 'Chức năng cơ bản của bộ phận/giống/điểm đặc biệt muốn đề cập.',
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/tiger11.png"),
        title: 'Bộ Phận 3',
        summary: 'Chức năng cơ bản của bộ phận/giống/điểm đặc biệt muốn đề cập.',
        icon: require("../../assets/images/vecter.png"),
      }
    ]
  },
};
