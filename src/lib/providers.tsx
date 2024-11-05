"use client"

import { useEffect, type ReactNode } from "react"
import { useGlobalNotification } from "@/store/global-notification"
import { customTheme, styledComponentsTheme } from "@/theme"
import GlobalStyles from "@/theme/global-styles"
import { ConfigProvider, notification } from "antd"
import { ThemeProvider } from "styled-components"

import { ApolloWrapper } from "./apollo-wrapper"
import StyledComponentsRegistry from "./styled-components-registry"

export default function Providers({ children }: { children: ReactNode }) {
  const [api, contextHolder] = notification.useNotification()
  const { setNotificationFunctions } = useGlobalNotification()

  useEffect(() => {
    if (api) {
      setNotificationFunctions({
        success: api["success"],
        error: api["error"],
        info: api["info"],
        warning: api["warning"],
        destroy: api["destroy"],
      })
    }
  }, [api])

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={styledComponentsTheme}>
        <GlobalStyles />
        <ConfigProvider theme={customTheme}>
          <ApolloWrapper>
            {children}
            {contextHolder}
          </ApolloWrapper>
        </ConfigProvider>
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}
