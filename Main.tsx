import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CharacterBox from "./src/components/CharacterBox";
import MemberItem, { MemberItemProps } from "./src/components/MemberItem";
import SearchBar from "./src/components/SearchBar";
import Header from "./src/components/Header";
import MemberImage from "./src/components/MemberImage";
import Home from "./src/screens/Home";
import TextBox, { EStatus } from "./src/components/TextBox";
import PartSummary, { PartSummaryProps } from "./src/components/PartSummary";
import CategoryInfo, { CategoryInfoProps } from "./src/components/CategoryInfo";


const data: PartSummaryProps[] = [
  { image: require("./assets/images/tiger11.png"), title: "Bộ phận", summary: "Chức năng cơ bản của bộ phận/giống/điểm đặc biệt muốn đề cập.", icon: require("./assets/images/vecter.png")},
  // { image: require("./assets/images/lion-item.png"), name: "Lion" },
];

const questions = [
  "Con trung",
  "Vu",
  "De trung"
]

export default function Main() {
  const [status, setStatus] = useState<EStatus[]>([EStatus.IN_CORRECT, EStatus.DISABLE, EStatus.CORRECT])
  const onPress = (i: number) => () => {
    const newStatus = [...status];
    for (let index = 0; index < newStatus.length; index++) {
      newStatus[index] = EStatus.NORMAL;
    }
    newStatus[i] = EStatus.DISABLE;
    setStatus(newStatus)
  }
  console.log(status);
  
  return <View>
    {questions.map((ques, i) => <TextBox key={ques} status={status[i]} onPress={onPress(i)} content={ques} />)}
  </View>;
}

const styles = StyleSheet.create({});
