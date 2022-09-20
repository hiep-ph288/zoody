import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";
import { Image, Stack } from "native-base";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function PracticeHome() {
  const navigation = useNavigation<any>();
  return (
    <Stack style={{ height: "100%", backgroundColor: '#F5F5F5' }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.textmain}>PRACTICE WITH ZOODY</Text>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate("QuizzScreen")}
        >
          <Text style={styles.text}>Dễ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.text}>Trung bình</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.text}>Khó</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require("../../../assets/images/crocodile-bg.png")}
        width={Math.round(Dimensions.get("screen").height * 0.3)}
        height={Math.round(Dimensions.get("screen").height * 0.25)}
        alt="quiz-bg"
        position="absolute"
        resizeMode="stretch"
        bottom="0"
        right="0"
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textmain: {
    color: "#A1783F",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 50,
  },
  box: {
    width: "70%",
    height: 41,
    backgroundColor: "#3D7944",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  text: {
    color: "#FFFFFF",
  },
});
