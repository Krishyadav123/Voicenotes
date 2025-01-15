import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";
import TabNavigator from "./TabNavigator";
import HomeScreen from "../screens/HomeScreen";
import RecordScreen from "../screens/RecordScreen";
import AskAIScreen from "../screens/AskAIScreen";
import CreateScreen from "../screens/CreateScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Signup" // Starts at Signup screen
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Record" component={RecordScreen} />
      <Stack.Screen name="Ask AI" component={AskAIScreen} />
      <Stack.Screen name="Create" component={CreateScreen} />

      {/* Home route includes the Tab Navigator */}
      {/* <Stack.Screen name="Home" component={TabNavigator} /> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
