import {
  View,
  Text,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  TouchableHighlight,
  TouchableHighlightProps,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

export interface CategoryInfoProps extends TouchableHighlightProps {
  image: ImageSourcePropType;
  quantity: string;
  title: string;
  summary: string;
}

export default function CategoryInfo(props: CategoryInfoProps) {
  const { image, quantity, summary, title, ...rest } = props;
  const [showUnderlay, setShowUnderlay] = useState(false);
  return (
    <TouchableHighlight
      style={styles.header}
      onPress={() => {}}
      onShowUnderlay={() => setShowUnderlay(true)}
      onHideUnderlay={() => setShowUnderlay(false)}
      underlayColor="rgba(0,0,0,0)"
      {...rest}
    >
      <>
        <ImageBackground source={image} style={styles.insectImage} borderRadius={15} />
        {showUnderlay && <View style={styles.underlay} />}
        <LinearGradient
          // Background Linear Gradient
          colors={["#1A1B1F", "rgba(101,102,104,0.3)", "transparent"]}
          locations={[0.02, 0.6, 0.8]}
          style={styles.background}
          start={[0,0]}
          end={[1,0]}
        />
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.quantity}>{quantity}</Text>
          <Text style={styles.summary}>{summary}</Text>
        </View>
      </>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
  },
  underlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    width: "100%",
    height: "100%",
    position: "absolute",
    // borderLeftRadius: 15,
    borderRadius: 15,
    right: -20,
  },
  background: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: 15,
    right: -20,
  },
  insectImage: {
    width: "100%",
    height: 180,
    position: "relative",
    right: -20,
    borderRadius: 15,
    zIndex: 0,
  },
  container: {
    width: "90%",
    justifyContent: "center",
    marginHorizontal: "5%",
    marginTop: 25,
    position: "absolute",
    left: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
  },
  quantity: {
    fontSize: 13,
    color: "white",
  },
  summary: {
    fontSize: 10,
    color: "white",
    width: "70%",
    lineHeight: 12.19,
    letterSpacing: 1,
    marginTop: 10,
    fontWeight: "700",
  },
});
