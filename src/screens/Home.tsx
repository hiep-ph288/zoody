import { Platform, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { FlatList, Image, ScrollView, Stack, Text, View } from "native-base";
import Header from "../components/Header";
import { MemberItemProps } from "../components/MemberItem";
import { SafeAreaView } from "react-native-safe-area-context";

const data: MemberItemProps[] = [{ image: require("../../assets/images/tiger.png"), name: "Tigers" }];

const statusBarHeight = Platform.OS == "android" ? 8 : 44;
export default function Home() {
  return (
    <ScrollView width="100%" bg="white">
      {Platform.OS == "android" && <StatusBar barStyle="light-content" />}
      <View height={statusBarHeight} bg="#3D7944" />
      <Header title="daily animal story" slideProps={data[0]} />
      <Stack marginTop={180} bg="white">
        <Text paddingX={8} fontSize={18} bold>
          OUR'S ANIMALS
        </Text>
        <Image
          source={require("../../assets/images/home-bg.png")}
          width="100%"
          alt="home-bg"
          position="absolute"
          resizeMode="stretch"
          top={-16}
        />
        <Stack height={900}>{/* TODO: Category's summary */}</Stack>
      </Stack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
