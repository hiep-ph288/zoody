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

export default function Practice() {
  return (
    <Stack style={{height: '100%'}}>
      <View>
        <Text>PRACTICE WITH ZOODY</Text>
        <Text>Mức độ: Dễ</Text>
      </View>
      <View>
        <Text>Câu 1</Text>
        <Text>Tên của một động vật có vú sống dưới nước:</Text>
      </View>
      <Image
        source={require("../../../assets/images/practice-bg.png")}
        width={Math.round(Dimensions.get("screen").height * 0.2)}
        height={Math.round(Dimensions.get("screen").height * 0.3)}
        alt="quiz-bg"
        position="absolute"
        resizeMode="stretch"
        bottom="0"
        alignSelf='center'
      />
    </Stack>
  )
}

const styles = StyleSheet.create({})