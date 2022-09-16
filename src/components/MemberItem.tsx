import { View, ImageBackground, ImageSourcePropType, StyleSheet } from "react-native";
import React from "react";
import { Flex, Text } from "native-base";

export interface MemberItemProps {
  image: ImageSourcePropType;
  name: string;
}

export default function MemberItem(props: MemberItemProps) {
  const { image, name } = props;

  return (
    <View style={styles.wrapper}>
      <ImageBackground source={image} style={styles.bg} />
      <View style={styles.box}>
        <Text>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 100,
    height: 150,
    flexDirection: 'column'
  },
  bg: {
    width: 100,
    height: 100,
  },
  box: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    padding: 5
  },
});
