import React, { useContext } from "react";

import { Text, Tag } from "@edvnz/components";
import EdvnzTheme from "@edvnz/provider";
import { spacing } from "@edvnz/theme";

const TagExamples = () => {
  const { theme } = useContext(EdvnzTheme);
  return (
    <div style={{ margin: spacing.spacing4 }}>
      <Text variant="heading1">Tag components</Text>
      <div style={{ margin: spacing.spacing4 }}>
        <div style={{ margin: spacing.spacing3 }}>
          <Tag
            tagType="alertTag"
            label={20}
            bgColor={theme.colors.alertBorder}
            style={[
              {
                paddingHorizontal: spacing.spacing2,
                marginLeft: spacing.spacing2,
                width: "32px",
              },
            ]}
            labelColor={theme.colors.backgroundSurface1}
          />
        </div>
        <div style={{ margin: spacing.spacing3 }}>
          <Tag
            tagType="skillTag"
            label={"Java"}
            bgColor={theme.colors.backgroundSurface2}
            labelColor={theme.colors.textPrimary}
            style={[
              {
                paddingHorizontal: spacing.spacing2,
                marginLeft: spacing.spacing2,
                width: "100px",
              },
            ]}
          />
        </div>
        <div style={{ margin: spacing.spacing3 }}>
          <Tag
            tagType="skillTag1"
            label={"Java"}
            bgColor={theme.colors.backgroundSurface2}
            labelColor={theme.colors.textPrimary}
            style={[
              {
                paddingHorizontal: spacing.spacing2,
                marginLeft: spacing.spacing2,
                width: "100px",
              },
            ]}
            hasCloseButton
          />
        </div>
        <div style={{ margin: spacing.spacing3 }}>
          <Tag
            tagType="modeTag"
            label="🤔 Skills match"
            bgColor={theme.colors.secondary1}
            textVariant="utilityCompact2"
            labelColor={theme.colors.onNeutral}
            style={[
              {
                paddingHorizontal: spacing.spacing2,
                marginLeft: spacing.spacing2,
                width: "100px",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default TagExamples;
