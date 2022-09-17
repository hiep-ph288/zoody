import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CharacterBox from "./src/components/CharacterBox";
import MemberItem, { MemberItemProps } from "./src/components/MemberItem";
import SearchBar from "./src/components/SearchBar";
import Header from "./src/components/Header";
import MemberImage from "./src/components/MemberImage";
import Home from "./src/screens/Home";
import CategoryInfo, { CategoryInfoProps } from "./src/components/CategoryInfo"


const data: CategoryInfoProps[] = [
  { image: require("./assets/images/beetles.png"), title: "Insect", quantity: 60, summary: 'A type of very small animal with six legs, a body divided into three parts and usually two pairs of wings, or, more generally, any similar very small animal' },
  // { image: require("./assets/images/lion-item.png"), name: "Lion" },
];

export default function Main() {
  return <CategoryInfo {...data[0]} />;
}

const styles = StyleSheet.create({});
