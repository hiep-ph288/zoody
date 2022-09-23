import { ImageSourcePropType } from "react-native";


export interface PracticeData {
  ques: string;
  ans: string[];
}

export const practiceData: { [key: string]: PracticeData[] } = {
  easy: [
    {
      ques:"Câu 1: Tên của một động vật có vú sống dưới nước: ",
      ans:['D','O','L','P','H','I','N'],
    },
    {
      ques:"Câu 2: Tên của một động vật có vú sống dưới nước: ",
      ans:['D','O','L','P','H','I','N'],
    },
    {
      ques:"Câu 3: Tên của một động vật có vú sống dưới nước: ",
      ans:['D','O','L','P','H','I','N'],
    },
    {
      ques:"Câu 4: Tên của một động vật có vú sống dưới nước: ",
      ans:['D','O','L','P','H','I','N'],
    },
  ],
  medium: [
    {
      ques:"Câu 1: Tên của một động vật có vú sống dưới nước: ",
      ans:['D','O','L','P','H','I','N'],
    },
    {
      ques:"Câu 2: Tên của một động vật có vú sống dưới nước: ",
      ans:['D','O','L','P','H','I','N'],
    },
    {
      ques:"Câu 3: Tên của một động vật có vú sống dưới nước: ",
      ans:['D','O','L','P','H','I','N'],
    },
    {
      ques:"Câu 4: Tên của một động vật có vú sống dưới nước: ",
      ans:['D','O','L','P','H','I','N'],
    },
  ],
  hard: [
    {
      ques:"Câu 1: Tên của một động vật có vú sống dưới nước: ",
      ans:['D','O','L','P','H','I','N'],
    },
    {
      ques:"Câu 2: Tên của một động vật có vú sống dưới nước: ",
      ans:['D','O','L','P','H','I','N'],
    },
    {
      ques:"Câu 3: Tên của một động vật có vú sống dưới nước: ",
      ans:['D','O','L','P','H','I','N'],
    },
    {
      ques:"Câu 4: Tên của một động vật có vú sống dưới nước: ",
      ans:['D','O','L','P','H','I','N'],
    },
  ],
};
