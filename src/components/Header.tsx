import { Dimensions, Platform, StatusBar, View } from "react-native";
import React from "react";
import SearchBar from "./SearchBar";
import { Stack, Text } from "native-base";
import Slide from "./Slide";
import { headerSlide } from "../db";

export interface HeaderProps {
  showSlide?: boolean;
  title: string;
}

export default function Header(props: HeaderProps) {
  const { showSlide, title } = props;

  return (
    <View style={{height: showSlide ? 420 : 132}}>
      <Stack
        bg="#3D7944"
        width="100%"
        borderBottomRadius={20}
        height={showSlide ? 250 : 132}
        paddingX={8}
        justifyContent="flex-start"
      >
        {Platform.OS == "android" && <StatusBar barStyle="light-content" />}
        <SearchBar marginTop={2} />
        <Text textTransform="uppercase" bold fontSize={20} marginTop={6} marginBottom={4} color="white">
          {title}
        </Text>
      </Stack>
      {showSlide && <Slide style={{ position: "absolute", bottom: 0 }} data={headerSlide} />}
    </View>
  );
}
