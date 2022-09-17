import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CharacterBox from "./src/components/CharacterBox";
import MemberItem, { MemberItemProps } from "./src/components/MemberItem";
import SearchBar from "./src/components/SearchBar";
import Header from "./src/components/Header";
import MemberImage from "./src/components/MemberImage";
import Home from "./src/screens/Home";
import CategoryInfo, { CategoryInfoProps } from "./src/components/CategoryInfo"
import TextBox, { EStatus } from "./src/components/TextBox";


const data: CategoryInfoProps[] = [
  { image: require("./assets/images/beetles.png"), title: "Insect", quantity: 60, summary: 'A type of very small animal with six legs, a body divided into three parts and usually two pairs of wings, or, more generally, any similar very small animal' },
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
