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
  const variants = Text.variants;
  console.log(variants);
  console.log({ theme });

  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <Layout>
        {variants?.map((m) => (
          <Text variant={m}>{m}</Text>
        ))}
        <Text variant={"display1"}>Display</Text>
      </Layout>
    </>
  );
};

export default Home;
