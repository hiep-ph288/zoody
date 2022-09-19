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
import Category from "./src/screens/Category";
import { Stack } from "native-base";


// const data: CategoryInfoProps[] = [
//   {
//     image: require("./assets/images/beetles-home.png"),
//     quantity: '60 loai',
//     title: 'Insect',
//     summary: 'A type of very small animal with six legs, a body divided into three parts and usually two pairs of wings, or, more generally, any similar very small animal'
//   }
// ];

const questions = [
  "Con trung",
  "Vu",
  "De trung"
]

export default function Main() {
  // return <PartSummary {...data[0]} />;
  return (
  <Stack>
      <Home />
      {/* <CategoryInfo {...data[0]} />  */}
  </Stack>
  )
}

const styles = StyleSheet.create({});
