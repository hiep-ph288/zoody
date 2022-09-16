import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CharacterBox from "./src/components/CharacterBox";
import MemberImage, { MemberImageProps } from "./src/components/MemberImage";

const data: MemberImageProps[] = [
  { image: require("./assets/images/tiger.png"), name: "Tiger" },
  { image: require("./assets/images/red-panda.png"), name: "Bamboo" },
];

export default function Main() {
  return (
    <View>
      {data.map((prop) => (
        <MemberImage {...prop} key={prop.name} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
