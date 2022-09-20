import { View, Text, StyleSheet, Dimensions, ImageSourcePropType, ImageBackground } from "react-native";
import React, { useState } from "react";
import Carousel from "react-native-snap-carousel";
import MemberImage, { MemberImageProps } from "../components/MemberImage";
import { HStack, Box, Stack } from "native-base";
import Slide from "../components/Slide";
import { memberDetailData } from "../db/memberdetail";
import { useRoute } from "@react-navigation/native";

export default function MemberDetail() {
  const route = useRoute<any>();
  console.log(route.params);

  const name = route.params.name ? route.params.name : "zebra";
  return (
    <View>
      <Slide data={memberDetailData[name]["slide"]} />
      <View style={{ width: "90%", marginHorizontal: "5%" }}>
        <Text style={{ marginBottom: 20, fontSize: 16, fontWeight: "600" }}>Physical characteristic</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <ImageBackground source={require("../../assets/images/weight.png")} style={{ width: 30, height: 30 }} />
            <Text>{memberDetailData[name].weight}</Text>
          </View>

          <View>
            <ImageBackground source={require("../../assets/images/lenght.png")} style={{ width: 30, height: 30 }} />
            <Text>{memberDetailData[name].length}</Text>
          </View>

          <View>
            <ImageBackground source={require("../../assets/images/time.png")} style={{ width: 30, height: 30 }} />
            <Text>{memberDetailData[name].lifespan}</Text>
          </View>

          <View>
            <ImageBackground source={require("../../assets/images/Group.png")} style={{ width: 30, height: 30 }} />
            <Text>{memberDetailData[name].speed}</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "700" }}>
            Climate zones: <Text style={{ fontWeight: "normal" }}>{memberDetailData[name].climateZone}</Text>
          </Text>
        </View>

        <View style={{}}>
          <Text style={{ fontWeight: "700" }}>
            Biome: <Text style={{ fontWeight: "normal" }}>{memberDetailData[name].biome}</Text>
          </Text>
          {/* <Text></Text> */}
        </View>

        <View>
          <Text>Fact</Text>
          <View style={{ marginLeft: 15 }}>
            {memberDetailData[name].facts.map((text) => (
              <Text key={text}>{text}</Text>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
