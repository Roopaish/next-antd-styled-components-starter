"use client";

import { customTheme, styledComponentsTheme } from "@/theme";
import GlobalStyles from "@/theme/global-styles";
import { ConfigProvider } from "antd";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "./styled-components-registry";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={styledComponentsTheme}>
        <GlobalStyles />
        <ConfigProvider theme={customTheme}>{children}</ConfigProvider>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
