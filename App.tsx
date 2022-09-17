import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "./Main";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { NavigationContainer, ParamListBase, RouteProp } from "@react-navigation/native";
import Home from "./src/screens/Home";
import { Ionicons } from "@expo/vector-icons";
import QuizzHome from "./src/screens/Quizz/QuizzHome";

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

interface TabOptions {
  route: RouteProp<ParamListBase, "Home">;
  navigation: any;
}

interface TabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
}

const options = (props: TabOptions): BottomTabNavigationOptions => {
  const { route } = props;
  const tabBarIcon = ({ focused, color, size }: TabBarIconProps) => {
    let iconName;

    if (route.name === "Home") {
      iconName = focused ? "ios-information-circle" : "ios-information-circle-outline";
    } else if (route.name === "Settings") {
      iconName = focused ? "ios-list-box" : "ios-list";
    }
    // You can return any component that you like here!
    return <Ionicons name={iconName as any} size={size} color={color} />;
  };

  return {
    tabBarIcon,
    headerShown: false
  };
};

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} options={options} />
          <Tab.Screen name="Quizz" component={QuizzHome} />
          <Tab.Screen name="Settings2" component={Home} />
          <Tab.Screen name="Test" component={Main} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
