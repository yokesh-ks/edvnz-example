import { View, Text } from "react-native";
import React, { useState } from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import EdvnzTheme from "@edvnz/provider";
// import { Text } from "@edvnz/components";
import {
  LightTheme as LightThemeColors,
  DarkTheme as DarkThemeColors,
} from "@edvnz/theme";
import Home from "./home";
import Header from "./components/Header";
import { useEffect } from "react";

// import { TextInput } from "@edvnz/components";

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

console.log(DarkThemeColors);

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [theme, setTheme] = useState(
    isDarkTheme ? customDarkTheme : customLightTheme
  );

  useEffect(() => {
    setTheme(isDarkTheme ? customDarkTheme : customLightTheme);
  }, [isDarkTheme]);

  console.log(theme);
  return (
    <NavigationContainer theme={theme}>
      <EdvnzTheme.Provider value={theme}>
        <View
          style={{
            backgroundColor: theme.colors.backgroundSurface1,
            height: "100%",
            width: "100%",
            maxHeight: "100vh",
            minHeight: "100vh",
          }}
        >
          <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
          <Home />
          {/* <TextInput /> */}
        </View>
      </EdvnzTheme.Provider>
    </NavigationContainer>
  );
};

export default App;
