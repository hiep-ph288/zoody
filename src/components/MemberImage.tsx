import { View, ImageBackground, ImageSourcePropType, StyleSheet } from "react-native";
import React from "react";
import { Text } from "native-base";

export interface MemberImageProps {
  image: ImageSourcePropType;
  name: string;
}

export default function MemberImage(props: MemberImageProps) {
  const { image, name } = props;

  return (
    <View style={styles.wrapper}>
      <ImageBackground source={image} style={styles.bg} />
      <View style={styles.box}>
        <Text bold>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "90%",
    height: 300,
    backgroundColor: "blue",
    borderRadius: 20,
    overflow: "hidden"
  },
  bg: {
    width: "100%",
    height: 300,
  },
  box: {
    width: "90%",
    height: 50,
    backgroundColor: "#F2F2F2",
    position: "absolute",
    bottom: 42,
    left: "5%",
    borderRadius: 5,
    justifyContent: "center",
    paddingLeft: 16,
    opacity: 0.85,
  },
});
