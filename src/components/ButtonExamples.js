import React, { useContext } from "react";

import { Button, Text } from "@edvnz/components";

import { spacing } from "@edvnz/theme";
import EdvnzTheme from "@edvnz/provider";
import { Icon } from "@edvnz/native-icons";

const ButtonExamples = () => {
  const { theme } = useContext(EdvnzTheme);
  return (
    <div style={{ margin: spacing.spacing4 }}>
      <Text variant="heading1">Button components</Text>
      <div style={{ margin: spacing.spacing4 }}>
        <div style={{ margin: spacing.spacing3 }}>
          <Button label="Sign In" size="large" style={{ width: "200px" }} />
        </div>
        <div style={{ margin: spacing.spacing3 }}>
          <Button label="Sign In" size="medium" style={{ width: "150px" }} />
        </div>
        <div style={{ margin: spacing.spacing3 }}>
          <Button label="Sign In" size="small" style={{ width: "100px" }} />
        </div>
        <div style={{ margin: spacing.spacing3 }}>
          <Button
            label="Sign In"
            size="large"
            style={{ width: "200px" }}
            appearance="outlined"
          />
        </div>
        <div style={{ margin: spacing.spacing3 }}>
          <Button
            label="Sign In"
            size="medium"
            style={{ width: "150px" }}
            appearance="outlined"
          />
        </div>
        <div style={{ margin: spacing.spacing3 }}>
          <Button
            label="Sign In"
            size="small"
            style={{ width: "100px" }}
            appearance="outlined"
          />
        </div>

        <div style={{ margin: spacing.spacing3 }}>
          <Button
            label="Sign In"
            size="small"
            style={{ width: "100px" }}
            appearance="text"
          />
        </div>
        <div style={{ margin: spacing.spacing3 }}>
          <Button
            label="Sign In"
            size="small"
            appearance="text"
            style={{ width: "100px" }}
            textVariant="bodyBold1"
          />
        </div>
        <div style={{ margin: spacing.spacing3 }}>
          <Button
            label="Sign In"
            size="small"
            style={{ width: "100px" }}
            textVariant="bodyBold1"
            iconLeft={
              <Icon
                name="LockIcon"
                width={12}
                height={12}
                color={theme.colors.backgroundSurface4}
              />
            }
          />
          <div style={{ margin: spacing.spacing3 }}>
            <Button
              label="Sign In"
              size="small"
              style={{ width: "100px" }}
              textVariant="bodyBold1"
              iconRight={
                <Icon
                  name="ChevronRightIcon"
                  width={12}
                  height={12}
                  color={theme.colors.backgroundSurface4}
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonExamples;
