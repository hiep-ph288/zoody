import { View, Text, ImageBackground, ImageSourcePropType, StyleSheet } from "react-native";
import React from "react";

export interface CategoryInfoProps {
  image: ImageSourcePropType;
  quantity: string;
  title: string;
  summary: string;
}

export default function CategoryInfo(props: CategoryInfoProps) {
  const { image, quantity, summary, title } = props;
  return (
    <View style={styles.header}>
      <ImageBackground
        source={image}
        style={styles.insectImage}
        borderRadius={15}
      />
      <View style={styles.container}>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.quantity}>
          {quantity}
        </Text>
        <Text style={styles.summary}>
          {summary}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
  },

  insectImage: {
    width: '100%',
    height: 160,
    position: 'relative',
    right: -20,
    borderBottomLeftRadius: 5,
  },

  container: {
    width: '90%',
    justifyContent: 'center',
    marginHorizontal: '5%',
    marginTop: 25,
    position: 'absolute',
    left: 25,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },

  quantity: {
    fontSize: 13,
    color: 'white',
  },

  summary: {
    fontSize: 10,
    color: 'white',
    width: '70%',
    lineHeight: 12.19,
    letterSpacing: 1,
    marginTop: 10,
    fontWeight: '700'
  },
});