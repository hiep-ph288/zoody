import { Dimensions, Platform, StatusBar } from "react-native";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import MemberImage, { MemberImageProps } from "./MemberImage";
import { Stack, Text } from "native-base";
import Slide from "./Slide";
import { headerSlide } from "../db";

export interface HeaderProps {
  slideProps?: MemberImageProps;
  title: string;
}

export default function Header(props: HeaderProps) {
  const { slideProps, title } = props;

  return (
    <>
      <Stack
        bg="#3D7944"
        width="100%"
        borderBottomRadius={20}
        height={slideProps ? 250 : 150}
        paddingX={8}
        justifyContent="flex-start"
      >
        {Platform.OS == "android" && <StatusBar barStyle="light-content" />}
        <SearchBar />
        <Text textTransform="uppercase" bold fontSize={20} marginTop={6} marginBottom={4} color="white">
          {title}
        </Text>
        {slideProps && <Slide data={headerSlide} />}
      </Stack>
    </>
  );
}
