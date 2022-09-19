import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "./Main";
import { NavigationContainer, ParamListBase, RouteProp } from "@react-navigation/native";
import Home from "./src/screens/Home";
import { Ionicons } from "@expo/vector-icons";
import QuizzHome from "./src/screens/Quizz/QuizzHome";
import Quizz from "./src/screens/Quizz/Quizz"
import QuizzResult from "./src/screens/Quizz/QuizzResult"
import IconBottomTab from "./src/components/IconBottomTab";
import Practice from "./src/screens/Practices/Practice";

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
  route: RouteProp<ParamListBase>;
  navigation: any;
}

interface TabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
}

const options = (props: TabOptions): BottomTabNavigationOptions => {
  const { route } = props;
  const tabBarIcon = ({ focused }: TabBarIconProps) => {
    return <IconBottomTab name={route.name} focused={focused} />;
  };

  return {
    tabBarIcon,
    headerShown: false,
    tabBarActiveTintColor: "#3D7944",
    tabBarInactiveTintColor: "#B8B8B8",
    tabBarLabelStyle: { fontSize: 12 },
    tabBarStyle: { paddingVertical: 4 },
  };
};

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={Home} options={options} />
          <Tab.Screen name="Quizz" component={Quizz} options={options} />
          <Tab.Screen name="Practice" component={Home} options={options} />
          <Tab.Screen name="Profile" component={Main} options={options} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
