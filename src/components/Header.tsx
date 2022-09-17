import { Dimensions, Platform, StatusBar, StyleSheet } from "react-native";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import MemberImage, { MemberImageProps } from "./MemberImage";
import { Box, View, HStack, Stack, Text } from "native-base";
import Carousel from "react-native-snap-carousel";

export interface HeaderProps {
  slideProps?: MemberImageProps;
  title: string;
}

const data: MemberImageProps[] = [
  { name: "Red Panda", image: require("../../assets/images/red-panda.png") },
  { name: "Tiger", image: require("../../assets/images/tiger.png") },
  { name: "Tiger 2", image: require("../../assets/images/tiger.png") },
];

interface SlideProps {
  item: MemberImageProps;
  index: number;
}

const screenWidth = Dimensions.get("screen").width;

export default function Header(props: HeaderProps) {
  const { slideProps, title } = props;
  const [slideIndex, setSlideIndex] = useState(0);
  const renderItem = ({ item, index }: SlideProps) => {
    return <MemberImage {...item} key={item.name} />;
  };
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
        {slideProps && (
          <View style={styles.memberImageWrapper}>
            <Carousel
              data={data}
              renderItem={renderItem}
              itemWidth={Math.round(screenWidth * 0.8)}
              sliderWidth={screenWidth}
              onSnapToItem={(index) => setSlideIndex(index)}
            />
            <HStack justifyContent="space-around" width={100}>
              {[0, 1, 2].map((i) => (
                <Box
                  width={3}
                  height={3}
                  marginTop={2}
                  borderRadius={100}
                  bg={i == slideIndex ? "#3D7944" : "gray.600"}
                  key={i}
                />
              ))}
            </HStack>
          </View>
        )}
      </Stack>
    </>
  );
}

const styles = StyleSheet.create({
  memberImageWrapper: {
    zIndex: 1,
    width: "100%",
    alignItems: "center",
  },
});
