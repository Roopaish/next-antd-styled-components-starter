"use client"

import { type ReactNode } from "react"
import { customTheme, styledComponentsTheme } from "@/theme"
import GlobalStyles from "@/theme/global-styles"
import { ConfigProvider } from "antd"
import { ThemeProvider } from "styled-components"

import { ApolloWrapper } from "./apollo-wrapper"
import StyledComponentsRegistry from "./styled-components-registry"

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={styledComponentsTheme}>
        <GlobalStyles />
        <ConfigProvider theme={customTheme}>
          <ApolloWrapper>{children}</ApolloWrapper>
        </ConfigProvider>
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}
