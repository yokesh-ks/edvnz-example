import React from "react";

import { Text } from "@edvnz/components";

import { spacing } from "@edvnz/theme";

const TextExamples = () => {
  return (
    <div style={{ margin: spacing.spacing4 }}>
      <Text variant="heading1">Text components</Text>
      <div style={{ margin: spacing.spacing4 }}>
        {Text.variants?.map((m) => (
          <div style={{ margin: spacing.spacing3 }}>
            <Text variant={m}>{m}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextExamples;
