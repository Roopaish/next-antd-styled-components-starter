"use client";

import { ConfigProvider, theme } from "antd";
import { ThemeConfig } from "antd/es/config-provider/context";
import { ThemeProvider } from "styled-components";

const { defaultAlgorithm } = theme;

const customTheme: ThemeConfig = {
  ...theme,
  token: {
    ...theme.defaultConfig.token,
    colorPrimary: "#00b96b",
  },
  algorithm: defaultAlgorithm,
};

const withTheme = (node: JSX.Element) => (
  <>
    <ConfigProvider theme={customTheme}>
      <ThemeProvider theme={customTheme}>{node}</ThemeProvider>
    </ConfigProvider>
  </>
);

export default withTheme;
