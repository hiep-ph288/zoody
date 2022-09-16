import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CharacterBox from "./src/components/CharacterBox";
import MemberItem, { MemberItemProps } from "./src/components/MemberItem";
import SearchBar from "./src/components/SearchBar";
import Header from "./src/components/Header";
import MemberImage from "./src/components/MemberImage";
import Home from "./src/screens/Home";

const data: MemberItemProps[] = [
  { image: require("./assets/images/tiger.png"), name: "Tigers" },
  // { image: require("./assets/images/lion-item.png"), name: "Lion" },
];

export default function Main() {
  return <Home />;
}

const styles = StyleSheet.create({});
