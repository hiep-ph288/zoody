import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
    <NativeBaseProvider>
      <Tab.Navigator>
        {/* <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      </Tab.Navigator>
    </NativeBaseProvider>
  );
}
