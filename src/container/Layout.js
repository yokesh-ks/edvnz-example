import React from "react";

export const Layout = (props) => {
  const { children } = props;
  return (
    <div
      style={{
        justifyContent: "center",
        width: "100%",

        display: "flex",
      }}
    >
      <div
        style={{
          maxWidth: 1024,
          width: "100%",
          paddingHorizontal: 24,
        }}
      >
        {children}
      </div>
    </div>
  );
};
