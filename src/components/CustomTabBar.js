import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function CustomTabBar({ state, descriptors, navigation }) {

    console.log(state)
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={[styles.tabItem, isFocused ? styles.tabItemFocused : null]}
          >
            <Text
              style={[styles.tabText, isFocused ? styles.tabTextFocused : null]}
            >
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = {
  tabContainer: {
    flexDirection: "row",
    height: 80,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 10,
    justifyContent: "space-around",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tabItem: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  tabItemFocused: {
    backgroundColor: "#f2f2f2",
  },
  tabText: {
    fontSize: 14,
    color: "#aaa",
  },
  tabTextFocused: {
    color: "#000",
    fontWeight: "bold",
  },
};
