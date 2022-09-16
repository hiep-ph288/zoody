import { StatusBar, StyleSheet, View } from "react-native";
import React from "react";
import SearchBar from "./SearchBar";
import MemberImage, { MemberImageProps } from "./MemberImage";
import { Box, Container, HStack, Stack, Text } from "native-base";

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
        paddingX="6%"
        justifyContent="flex-start"
        paddingTop={8}
      >
        <SearchBar />
        <Text textTransform="uppercase" bold fontSize={20} marginTop={6} marginBottom={4} color="white">
          {title}
        </Text>
        {slideProps && (
          <View style={styles.memberImageWrapper}>
            <MemberImage {...slideProps} />
            <HStack justifyContent="space-around" width={120}>
              {[1, 2, 3, 4, 5].map((i) => (
                <Box width={3} height={3} marginTop={2} borderRadius={100} bg="gray.600" key={i} />
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
