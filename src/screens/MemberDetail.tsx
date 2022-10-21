import { Text, StyleSheet, Platform, StatusBar, ImageBackground, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Carousel from "react-native-snap-carousel";
import MemberImage, { MemberImageProps } from "../components/MemberImage";
import { HStack, Box, View, ScrollView } from "native-base";
import Slide from "../components/Slide";
import { memberDetailData } from "../db/memberdetail";
import { useRoute } from "@react-navigation/native";
import PartSummary from "../components/PartSummary";
import { useNavigation } from "@react-navigation/native";

export default function MemberDetail() {
  const route = useRoute<any>();
  // console.log(route.params);
  const navigation = useNavigation();

  const name = route.params.name ? route.params.name : "zebra";
  return (
    <View>
      <ScrollView>
      {Platform.OS == "android" && <StatusBar barStyle="light-content" />}
      <View height={Platform.OS == "android" ? 8 : 44} bg="#3D7944" />
        <TouchableOpacity 
          style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginHorizontal: '5%', paddingVertical: 15}}
          onPress={ ()=> {
            navigation.goBack();
          }}
        >
          <ImageBackground source={require('../../assets/images/VectorLeft.png')} style={{ width: 10, height: 20 }} />
          <Text style={{ fontSize: 18, color: '#3D7944', fontWeight: '700', marginLeft: 15, textTransform:'capitalize' }}>{name}</Text>
        </TouchableOpacity>
        <Slide data={memberDetailData[name]["slide"]} />
        <View style={{ width: "90%", marginHorizontal: "5%", marginTop: 30 }}>
          <Text style={{ marginBottom: 20, fontSize: 16, fontWeight: "600" }}>Physical characteristic</Text>

          <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
            <View style={{alignItems: 'center' }}>
              <ImageBackground source={require("../../assets/images/weight.png")} style={{ width: 30, height: 30}} />
              <Text>{memberDetailData[name].weight}</Text>
            </View>

            <View style={{alignItems: 'center' }}>
              <ImageBackground source={require("../../assets/images/lenght.png")} style={{ width: 30, height: 30 }} />
              <Text>{memberDetailData[name].length}</Text>
            </View>

            <View style={{alignItems: 'center' }}>
              <ImageBackground source={require("../../assets/images/time.png")} style={{ width: 30, height: 30 }} />
              <Text>{memberDetailData[name].lifespan}</Text>
            </View>

            <View style={{alignItems: 'center' }}>
              <ImageBackground source={require("../../assets/images/Group.png")} style={{ width: 30, height: 30 }} />
              <Text>{memberDetailData[name].speed}</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text style={{ fontWeight: "700" }}>
              Climate zones: <Text style={{ fontWeight: "normal" }}>{memberDetailData[name].climateZone}</Text>
            </Text>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={{ fontWeight: "700" }}>
              Biome: <Text style={{ fontWeight: "normal" }}>{memberDetailData[name].biome}</Text>
            </Text>
          </View>

          <View style={{ marginTop: 10, marginBottom: 15 }}>
            <Text style={{ fontWeight: "700" }}>Fact</Text>
            <View style={{ marginLeft: 10 }}>
              {memberDetailData[name].facts.map((text) => (
                <Text style={{ marginTop: 4 }} key={text}>{text}</Text>
              ))}
            </View>
          </View>
        </View>

        <View style={{ width: '90%', marginHorizontal: '5%'}}>
          {memberDetailData[name]['bodyParts'].map((item, index) => {
            return (
              <PartSummary key={index} {...item} />
            )
          })}
        </View>

        <View style={{height: 10}}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
