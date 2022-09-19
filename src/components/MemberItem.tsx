import { View, ImageBackground, ImageSourcePropType, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { Text } from "native-base";
import { TouchableOpacityProps } from "react-native";

export interface MemberItemProps extends TouchableOpacityProps {
  image: ImageSourcePropType;
  name: string;
}

export default function MemberItem(props: MemberItemProps) {
  const { image, name, ...rest } = props;

  return (
    <TouchableOpacity style={styles.wrapper} {...rest}>
      <ImageBackground source={image} style={styles.bg} />
      <View style={styles.box}>
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 100,
    height: 125,
    justifyContent: "space-between",
  },
  bg: {
    width: 100,
    height: 100,
  },
  box: {
    width: "100%",
    alignItems: 'center',
    padding: 5
  },
});
