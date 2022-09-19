import { Platform, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { FlatList, Image, ScrollView, Stack, Text, View } from "native-base";
import Header from "../components/Header";
import { MemberItemProps } from "../components/MemberItem";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryInfo, { CategoryInfoProps } from "../components/CategoryInfo";

// const data: MemberItemProps[] = [{ image: require("../../assets/images/tiger.png"), name: "Tigers" }];

const data: CategoryInfoProps[] = [
  {
    image: require("../../assets/images/elephants-home.png"),
    quantity: '60 loai',
    title: 'Mammals',
    summary: 'A type of very small animal with six legs, a body divided into three parts and usually two pairs of wings, or, more generally, any similar very small animal',
  }, 

  {
    image: require("../../assets/images/salamander-home.png"),
    quantity: '60 loai',
    title: 'Reptile',
    summary: 'A type of very small animal with six legs, a body divided into three parts and usually two pairs of wings, or, more generally, any similar very small animal',
  }, 

  {
    image: require("../../assets/images/bird-home.png"),
    quantity: '60 loai',
    title: 'Insect',
    summary: 'A type of very small animal with six legs, a body divided into three parts and usually two pairs of wings, or, more generally, any similar very small animal',
  }, 

  {
    image: require("../../assets/images/beetles-home.png"),
    quantity: '60 loai',
    title: 'Insect',
    summary: 'A type of very small animal with six legs, a body divided into three parts and usually two pairs of wings, or, more generally, any similar very small animal',
  }, 

  {
    image: require("../../assets/images/salamander-home.png"),
    quantity: '60 loai',
    title: 'Reptile',
    summary: 'A type of very small animal with six legs, a body divided into three parts and usually two pairs of wings, or, more generally, any similar very small animal',
  }, 

  {
    image: require("../../assets/images/bird-home.png"),
    quantity: '60 loai',
    title: 'Insect',
    summary: 'A type of very small animal with six legs, a body divided into three parts and usually two pairs of wings, or, more generally, any similar very small animal',
  }, 
];

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
          height={1300}
        />
        {data.map((item, index)  => {
          return (
             <CategoryInfo key={index} {...item}/>
          )
        })}
        <View marginBottom={50}></View>
        {/* <Stack height={900}></Stack> */}
        {/* TODO: Category's summary */}
      </Stack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
