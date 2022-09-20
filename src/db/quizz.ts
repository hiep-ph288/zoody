export interface QuizzData {
  image: any;
  ques: string;
  choose: string[];
  ans: number;
}

export const quizzData: { [key: string]: QuizzData[] } = {
  easy: [],
  medium: [],
  hard: [],
};
