import { View, Text } from "react-native";
import React from "react";

export const Layout = (props) => {
  const { children } = props;
  return (
    <View style={{ alignItems: "center", width: "100%", height: "100%" }}>
      <View
        style={{
          maxWidth: 520,
          width: "100%",
          paddingHorizontal: 24,
          height: "100%",
        }}
      >
        {children}
      </View>
    </View>
  );
};
