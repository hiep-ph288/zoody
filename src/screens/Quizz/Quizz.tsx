import { StyleSheet, Text, Dimensions, Platform } from "react-native";
import { Button, Image, ScrollView, Stack, View } from "native-base";
import React, { useState } from "react";
import TextBox, { EStatus } from "../../components/TextBox";

const questions = ["Côn trùng", "Động vật có vú", "Động vật đẻ trứng"];
const imgWidth = Math.round(0.8 * Dimensions.get("screen").width);

const bgHeight = Math.round(((5 / 4) * imgWidth) / 6);
const Quizz = () => {
  const [status, setStatus] = useState<EStatus[]>([
    EStatus.NORMAL,
    EStatus.NORMAL,
    EStatus.NORMAL,
  ]);
  const onPress = (i: number) => () => {
    const newStatus = [...status];
    for (let index = 0; index < newStatus.length; index++) {
      newStatus[index] = EStatus.NORMAL;
    }
    newStatus[i] = EStatus.DISABLE;
    setStatus(newStatus);
  };
  return (
    <Stack style={{ height: "100%" }}>
      <View height={Platform.OS == "android" ? 0 : 44} bg="#3D7944" />
      <View style={styles.container}>
        <Text style={styles.text_main}>ZOODY'S QUIZ</Text>
        <Text style={styles.text_level}>Mức độ: Dễ</Text>
        <Image
          style={{
            width: imgWidth,
            height: Math.round((159 / 290) * imgWidth),
          }}
          source={require("../../../assets/images/dolphin.png")}
          alt="Question"
        />
        <Text style={styles.text_ques}>
          Câu 1: Cá heo thuộc loại động vật nào?
        </Text>
      </View>
      <View>
        {questions.map((ques, i) => (
          <TextBox
            key={ques}
            status={status[i]}
            onPress={onPress(i)}
            content={ques}
            style={styles.btn}
          />
        ))}
      </View>
      <View style={{ height: 50, justifyContent: 'center', marginVertical: 20 }} flexDirection="row">
        <Button style={{
          backgroundColor: '#FFFFFF', borderColor: '#3D7944', borderWidth: 1, borderRadius: 10, marginHorizontal: 5
        }}><Text style={{
          color: '#3D7944'
        }}>Dừng lại</Text></Button>
        <Button style={{
          backgroundColor: '#3D7944', borderRadius: 10, marginHorizontal: 5
        }}>Tiếp tục</Button>
      </View>
      <Image
        source={require("../../../assets/images/quiz-bg.png")}
        width="100%"
        height={Math.round(((5 / 4) * imgWidth) / 6)}
        alt="quiz-bg"
        position="absolute"
        resizeMode="stretch"
        bottom="0"
        style={{ zIndex: -1 }}
      />
    </Stack>
  );
};

export default Quizz;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 30,
  },
  text_main: {
    color: "#A1783F",
    fontSize: 30,
    fontWeight: "bold",
  },
  text_level: {
    color: "#3D7944",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text_ques: {
    marginVertical: 30,
    fontSize: 18,
    fontWeight: "700",
    color: "#757575",
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
  btn: {
    marginBottom: 8,
  },
});
