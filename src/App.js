import { View } from "react-native";
import React from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
// import { Text } from "@edvnz/components";
import {
  LightTheme as LightThemeColors,
  DarkTheme as DarkThemeColors,
} from "@edvnz/theme";

import TextInput from "@edvnz/textinput";

const customLightTheme = {
  ...DefaultTheme.colors,
  ...LightThemeColors,
  colors: {
    ...DefaultTheme.colors,
    ...LightThemeColors.colors,
  },
};

const customDarkTheme = {
  ...DarkTheme.colors,
  ...DarkThemeColors,
  colors: {
    ...DarkTheme.colors,
    ...DarkThemeColors.colors,
  },
};

console.log(DarkThemeColors)

const theme = DarkTheme ? customDarkTheme : customLightTheme;

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <View
        style={{
          backgroundColor: theme.colors.backgroundSurface1,
          height: "100%",
          width: "100%",
        }}
      >
        {/* <Text>App</Text> */}
        <TextInput />
      </View>

    </NavigationContainer>
  );
};

export default App;
