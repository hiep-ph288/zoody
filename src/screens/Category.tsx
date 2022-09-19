import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Platform,
} from "react-native";
import React from "react";
import { Stack, View } from "native-base";
import Header from "../components/Header";
import MemberItem from "../components/MemberItem";
import { useRoute } from "@react-navigation/native";
import { categoryData } from "../db";

export default function Category() {
  const route = useRoute();
  console.log(route.params);

  return (
    <Stack>
      <View height={Platform.OS == "android" ? 8 : 44} bg="#3D7944" />
      <Header title="MAMMALS" />
      <ScrollView style={{ height: Dimensions.get("screen").height - 250 }}>
        <View style={{ flexDirection: "row", width: "95%", marginHorizontal: "2.5%", flexWrap: "wrap", marginTop: 4 }}>
          {categoryData["mammals"].map((info, index) => (
            <View style={{ marginHorizontal: 15, marginVertical: 15 }} key={info.name + String(index)}>
              <MemberItem {...info} />
            </View>
          ))}
        </View>

        <View style={{ width: "100%", alignItems: "center", marginTop: 30, marginBottom: 50 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#3D7944",
              width: 280,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <Text style={{ color: "white", marginHorizontal: 10 }}>Xem thêm</Text>
            <ImageBackground source={require("../../assets/images/plus.png")} style={{ width: 10, height: 10 }} />
          </TouchableOpacity>
        </View>
        <View style={styles.endBg}>
          <ImageBackground source={require("../../assets/images/footerLeft.png")} style={{ width: 50, height: 50 }} />
          <ImageBackground
            source={require("../../assets/images/footerRight.png")}
            style={{ width: 125, height: 125 }}
          />
        </View>
      </ScrollView>
    </Stack>
  );
}

const styles = StyleSheet.create({
  endBg: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    position: "absolute",
    bottom: 0,
    zIndex: -1,
  },
});
