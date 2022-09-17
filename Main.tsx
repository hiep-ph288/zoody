import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CharacterBox from "./src/components/CharacterBox";
import MemberItem, { MemberItemProps } from "./src/components/MemberItem";
import SearchBar from "./src/components/SearchBar";
import Header from "./src/components/Header";
import MemberImage from "./src/components/MemberImage";
import Home from "./src/screens/Home";
import PartSummary, { PartSummaryProps } from "./src/components/PartSummary";
import CategoryInfo, { CategoryInfoProps } from "./src/components/CategoryInfo";


const data: PartSummaryProps[] = [
  { image: require("./assets/images/tiger11.png"), title: "Bộ phận", summary: "Chức năng cơ bản của bộ phận/giống/điểm đặc biệt muốn đề cập.", icon: require("./assets/images/vecter.png")},
  // { image: require("./assets/images/lion-item.png"), name: "Lion" },
];

export default function Main() {
  return <PartSummary {...data[0]} />;
  // return <Category />;
}

const styles = StyleSheet.create({});
