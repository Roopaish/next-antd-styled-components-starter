"use client"

import {
  generateResponsiveStyle,
  type ResponsiveValue,
} from "@/lib/utils/breakpoints"
import { shouldNotForwardPropsWithKeys } from "@/lib/utils/styled"
import styled from "styled-components"

interface MarginProps {
  top?: ResponsiveValue<number>
  bottom?: ResponsiveValue<number>
  left?: ResponsiveValue<number>
  right?: ResponsiveValue<number>
  all?: ResponsiveValue<number>
  horizontal?: ResponsiveValue<number>
  vertical?: ResponsiveValue<number>
}

export const Margin = styled.div.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<MarginProps>([
    "top",
    "bottom",
    "left",
    "right",
    "all",
    "horizontal",
    "vertical",
  ]),
})<MarginProps>`
  ${({ top }) => top && generateResponsiveStyle("margin-top", top)}
  ${({ bottom }) => bottom && generateResponsiveStyle("margin-bottom", bottom)}
  ${({ left }) => left && generateResponsiveStyle("margin-left", left)}
  ${({ right }) => right && generateResponsiveStyle("margin-right", right)}
  ${({ all }) => all && generateResponsiveStyle("margin", all)}
  ${({ horizontal }) =>
    horizontal && generateResponsiveStyle("margin-left", horizontal)}
  ${({ horizontal }) =>
    horizontal && generateResponsiveStyle("margin-right", horizontal)}
  ${({ vertical }) =>
    vertical && generateResponsiveStyle("margin-top", vertical)}
  ${({ vertical }) =>
    vertical && generateResponsiveStyle("margin-bottom", vertical)}
`
