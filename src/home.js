import React, { useContext, useState } from "react";

import { BottomSheet } from "@edvnz/bottom-sheet";
import { TextInput, Text, ToggleSwitch, Row, Button } from "@edvnz/components";
import EdvnzTheme from "@edvnz/provider";
import { Layout } from "./container/Layout";
import { Icon } from "@edvnz/native-icons";
import { spacing } from "@edvnz/theme";
import TextExamples from "./components/TextExamples";
import ButtonExamples from "./components/ButtonExamples";
import TagExamples from "./components/TagExamples";

const Home = () => {
  const { theme } = useContext(EdvnzTheme);

  const [inputValue, setInputValue] = useState("");
  return (
    <Layout>
      <TextExamples />
      <ButtonExamples />
      <TagExamples />
    </Layout>
  );
};

export default Home;
