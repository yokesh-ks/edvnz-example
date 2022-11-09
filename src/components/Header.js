import { View } from "react-native";
import React, { useContext } from "react";
import { Text, ToggleSwitch, Row } from "@edvnz/components";
import { Layout } from "../container/Layout";
import EdvnzTheme from "@edvnz/provider";

const Header = (props) => {
  // const theme = useContext(EdvnzTheme);
  const { isDarkTheme, setIsDarkTheme } = props;
  return (
    <View
      style={{
        height: 60,
        borderBottomWidth: 1,
        // borderBottomColor: theme.colors.dividerShort,
      }}
    >
      <Layout>
        <Row style={{ height: "100%" }}>
          <Text
            variant="heading2"
            // color={theme.colors.textPrimary}
            // style={{ fontFamily: "RocGrotesk-Bold" }}
          >
            EdvnzExample
          </Text>
          <ToggleSwitch
            activeState={isDarkTheme}
            setActiveState={() => setIsDarkTheme(!isDarkTheme)}
          />
        </Row>
      </Layout>
    </View>
  );
};

export default Header;
