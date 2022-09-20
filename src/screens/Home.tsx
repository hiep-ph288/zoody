import { Platform, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { Image, ScrollView, Stack, Text, View } from "native-base";
import Header from "../components/Header";
import CategoryInfo from "../components/CategoryInfo";
import { categoriesData } from "../db/category";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation<any>();
  return (
    <ScrollView width="100%" bg="white">
      {Platform.OS == "android" && <StatusBar barStyle="light-content" />}
      <View height={Platform.OS == "android" ? 8 : 44} bg="#3D7944" />
      <Header title="daily animal story" showSlide />
      <Stack marginTop={8} bg="white">
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
        {categoriesData.map((item, index) => (
          <CategoryInfo
            key={index}
            onPress={() => {
              navigation.navigate("Category", { name: item.title });
            }}
            {...item}
          />
        ))}
        <View marginBottom={50}></View>
      </Stack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
