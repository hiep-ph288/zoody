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
    <View>
      <ImageBackground
        source={image}
        style={styles.insectImage}
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
  insectImage: {
    width: '100%',
    height: 150,
    position: 'absolute',
    // opacity: 1,
  },

  container: {
    width: '90%',
    justifyContent: 'center',
    marginHorizontal: '5%',
    marginTop: 15,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white'
  },

  quantity: {
    fontSize: 13,
    color: 'white'
  },

  summary: {
    fontSize: 11.5,
    color: 'white',
    width: '70%'
  },
});