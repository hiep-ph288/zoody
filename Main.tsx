import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CharacterBox from "./src/components/CharacterBox";
import MemberItem, { MemberItemProps } from "./src/components/MemberItem";

const data: MemberItemProps[] = [
  { image: require("./assets/images/tiger-item.png"), name: "Tigers" },
  { image: require("./assets/images/lion-item.png"), name: "Lion" },
];

export default function Main() {
  return (
    <View>
      {data.map((prop) => (
        <MemberItem {...prop} key={prop.name} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
