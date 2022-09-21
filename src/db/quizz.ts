import { Image } from "react-native";

export interface QuizzData {
  image: Image;
  ques: string;
  choose: string[];
  ans: number;
}

export const quizzData: { [key: string]: QuizzData[] } = {
  easy: [],
  medium: [],
  hard: [],
};
