import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen"; // Add HomeScreen here
import RecordScreen from "../screens/RecordScreen";
import AskAIScreen from "../screens/AskAIScreen";
import CreateScreen from "../screens/CreateScreen";
import CustomTabBar from "../components/CustomTabBar";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
      initialRouteName="Home" // Default tab is HomeScreen
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Record" component={RecordScreen} />
      <Tab.Screen name="Ask AI" component={AskAIScreen} />
      <Tab.Screen name="Create" component={CreateScreen} />
    </Tab.Navigator>
  );
}
