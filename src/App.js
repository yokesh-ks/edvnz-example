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

  const value = { theme };

  console.log(theme);
  return (
    <NavigationContainer theme={theme}>
      <EdvnzTheme.Provider value={value}>
        <div
          style={{
            backgroundColor: theme.colors.backgroundSurface1,

            width: "100%",
          }}
        >
          <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
          <div style={{ paddingTop: "100px" }}>
            <Home />
          </div>
        </div>
      </EdvnzTheme.Provider>
    </NavigationContainer>
  );
};

export default App;
