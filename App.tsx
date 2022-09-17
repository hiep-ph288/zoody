import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "./Main";
import { Platform, StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config, colors: { mainGreen: "#3D7944" } });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}

// Navigation
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
          <Tab.Screen name="Settings1" component={Home} />
          <Tab.Screen name="Settings2" component={Home} />
          <Tab.Screen name="Test" component={Main} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "red",
  },
});
