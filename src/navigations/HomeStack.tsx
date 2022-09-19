import React from "react";
import { StyleSheet } from "react-native";
import Home from "../screens/Home";
import Category from "../screens/Category";
import MemberDetail from "../screens/MemberDetail";
import { createStackNavigator } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";

interface HomeStackParams {
  Category: {
    name: string;
  };
  MemberDetail: {
    name: string;
  };
  Home: {};
}
const Stack = createStackNavigator<HomeStackParams & ParamListBase>();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="MemberDetail" component={MemberDetail} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
