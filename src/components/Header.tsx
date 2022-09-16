import { StyleSheet, Text, View } from "react-native";
import React from "react";

export interface HeaderProps {
  slide?: JSX.Element;
  height: number;
}

export default function Header() {
  return (
    <View>
      <Text>Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
