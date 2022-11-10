import React, { useContext } from "react";
import { Text, ToggleSwitch, Row } from "@edvnz/components";
import { Layout } from "../container/Layout";
import EdvnzTheme from "@edvnz/provider";
import { colors } from "@edvnz/theme";

const Header = (props) => {
  const { theme } = useContext(EdvnzTheme);
  const { isDarkTheme, setIsDarkTheme } = props;
  return (
    <div
      style={{
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.dividerShort,
        width: "100%",
      }}
    >
      <Row
        style={{
          backgroundColor: theme.colors.dividerShort,
          position: "fixed",
          width: "100%",
          height: "60px",
          justifyContent: "space-around",
        }}
      >
        <Text
          variant="heading2"
          color={theme.colors.textPrimary}
          // style={{ fontFamily: "RocGrotesk-Bold" }}
        >
          Edvanza Design system- Sample App
        </Text>
        <ToggleSwitch
          activeState={isDarkTheme}
          setActiveState={() => setIsDarkTheme(!isDarkTheme)}
        />
      </Row>
    </div>
  );
};

export default Header;
