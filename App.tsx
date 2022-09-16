import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "./Main";
import { SafeAreaView, Platform, StatusBar, StyleSheet } from "react-native";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}

// Navigation
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <NativeBaseProvider>
        <Main />
      </NativeBaseProvider>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  wrapper: { flex: 1, marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 },
});
