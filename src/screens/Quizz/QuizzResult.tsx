import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image, Stack } from "native-base";

const QuizzResult = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#3D7944",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "#FFFFFF",
          marginTop: "10%",
        }}
      >
        ZOODY'S QUIZ
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "#FFFFFF",
          marginBottom: "3%",
        }}
      >
        Mức độ: Dễ
      </Text>
      <View
        style={{
          width: "85%",
          height: "50%",
          backgroundColor: "#FFFFFF",
          borderRadius: 80,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            color: "#3D7944",
            marginTop: "10%",
          }}
        >
          GREAT JOB
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#3D7944",
            marginTop: "5%",
          }}
        >
          Your score
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginTop: "10%",
          }}
        >
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: "#F7D46B",
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
              margin: 5,
            }}
          >
            <Text
              style={{
                fontSize: 35,
                fontWeight: "bold",
              }}
            >
              10
            </Text>
            <Text>question</Text>
          </View>
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: "#3D7944",
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
              margin: 5,
            }}
          >
            <Text
              style={{
                fontSize: 35,
                fontWeight: "bold",
                color: "#FFFFFF",
              }}
            >
              8
            </Text>
            <Text
              style={{
                color: "#FFFFFF",
              }}
            >
              true
            </Text>
          </View>
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: "#D00809",
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
              margin: 5,
            }}
          >
            <Text
              style={{
                fontSize: 35,
                fontWeight: "bold",
                color: "#FFFFFF",
              }}
            >
              2
            </Text>
            <Text
              style={{
                color: "#FFFFFF",
              }}
            >
              false
            </Text>
          </View>
        </View>
      </View>

      <Image
        source={require("../../../assets/images/quizresult-bg.png")}
        width={Math.round(Dimensions.get("screen").height * 0.25)}
        height={Math.round(Dimensions.get("screen").height * 0.25)}
        alt="quizresult-bg"
        position="absolute"
        resizeMode="stretch"
        bottom="3"
        right="0"
      />
    </View>
  );
};

export default QuizzResult;

const styles = StyleSheet.create({
  box_score: {},
});
