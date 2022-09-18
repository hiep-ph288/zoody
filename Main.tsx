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


const data: MemberItemProps[] = [
  { image: require("./assets/images/tiger-item.png"), name: 'Tiger'},
  { image: require("./assets/images/lion-item.png"), name: 'Lion'},
  { image: require("./assets/images/zebra-item.png"), name: 'Zebra'},
  { image: require("./assets/images/elephants-item.png"), name: 'Elephant'},
  { image: require("./assets/images/goat-item.png"), name: 'Goat'},
  { image: require("./assets/images/fox-item.png"), name: 'Fox'},
  { image: require("./assets/images/wolf-item.png"), name: 'Wolf'},
  { image: require("./assets/images/camel-item.png"), name: 'Camel'},
  { image: require("./assets/images/monkey-item.png"), name: 'Monkey'},
  
  { image: require("./assets/images/tiger-item.png"), name: 'Tiger'},
  { image: require("./assets/images/lion-item.png"), name: 'Lion'},
  { image: require("./assets/images/zebra-item.png"), name: 'Zebra'},
  { image: require("./assets/images/elephants-item.png"), name: 'Elephant'},
  { image: require("./assets/images/goat-item.png"), name: 'Goat'},
  { image: require("./assets/images/fox-item.png"), name: 'Fox'},
  { image: require("./assets/images/wolf-item.png"), name: 'Wolf'},
  { image: require("./assets/images/camel-item.png"), name: 'Camel'},
  { image: require("./assets/images/monkey-item.png"), name: 'Monkey'},
];

const questions = [
  "Con trung",
  "Vu",
  "De trung"
]

export default function Main() {
  // return <PartSummary {...data[0]} />;
  return (
  <Stack>
    <Category />
  </Stack>
  )
}

const styles = StyleSheet.create({});
