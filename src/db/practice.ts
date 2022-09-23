import { ImageSourcePropType } from "react-native";


export interface PracticeData {
  ques: string;
  choose: string[];
  ans: number;
}

export const practiceData: { [key: string]: PracticeData[] } = {
  easy: [
    {
      ques:"Câu 1: Tên của một động vật có vú sống dưới nước: ",
      choose:['D','O','L','P','H','E','N'],
      ans: 1
    },
    {
      ques:"Câu 2: Tên của một động vật có vú sống dưới nước: ",
      choose:['D','O','L','P','H','E','N'],
      ans: 1
    },
    {
      ques:"Câu 3: Tên của một động vật có vú sống dưới nước: ",
      choose:['D','O','L','P','H','E','N'],
      ans: 1
    },
  ],
  medium: [
    {
      ques:"Câu 1: Tên của một động vật có vú sống dưới nước: ",
      choose:['D','O','L','P','H','E','N'],
      ans: 1
    },
    {
      ques:"Câu 2: Tên của một động vật có vú sống dưới nước: ",
      choose:['D','O','L','P','H','E','N'],
      ans: 1
    },
    {
      ques:"Câu 3: Tên của một động vật có vú sống dưới nước: ",
      choose:['D','O','L','P','H','E','N'],
      ans: 1
    },
  ],
  hard: [
    {
      ques:"Câu 1: Tên của một động vật có vú sống dưới nước: ",
      choose:['D','O','L','P','H','E','N'],
      ans: 1
    },
    {
      ques:"Câu 2: Tên của một động vật có vú sống dưới nước: ",
      choose:['D','O','L','P','H','E','N'],
      ans: 1
    },
    {
      ques:"Câu 3: Tên của một động vật có vú sống dưới nước: ",
      choose:['D','O','L','P','H','E','N'],
      ans: 1
    },
  ],
};
