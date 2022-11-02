import React, { useContext, useState } from "react";
import { View } from "react-native";
import { BottomSheet } from "@edvnz/bottom-sheet";
import { TextInput, Text, ToggleSwitch, Row } from "@edvnz/components";
import EdvnzTheme from "@edvnz/provider";
import { Layout } from "./container/Layout";
import { Icon } from "@edvnz/native-icons";
import { spacing } from "@edvnz/theme";

const Home = () => {
  const theme = useContext(EdvnzTheme);
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <Layout>
        <TextInput
          placeholder="Type to Search"
          iconLeft={
            <Icon
              name="SearchIcon"
              color={theme.colors.textPrimary}
              width={17}
              height={17}
            />
          }
          inputFieldStyle={{
            marginTop: spacing.spacing6,
          }}
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
      </Layout>
    </>
  );
};

export default Home;
