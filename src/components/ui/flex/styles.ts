"use client"

import {
  generateResponsiveStyle,
  type ResponsiveValue,
} from "@/lib/utils/breakpoints"
import { shouldNotForwardPropsWithKeys } from "@/lib/utils/styled"
import styled, { type CSSProperties } from "styled-components"

type FlexProps = {
  direction?: ResponsiveValue<
    "row" | "column" | "row-reverse" | "column-reverse"
  >
  gap?: ResponsiveValue<number | string>
  align?: ResponsiveValue<CSSProperties["alignItems"]>
  justify?: ResponsiveValue<CSSProperties["justifyContent"]>
  wrap?: ResponsiveValue<CSSProperties["flexWrap"]>
}

export const CustomFlex = styled.div.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<FlexProps>([
    "direction",
    "gap",
    "align",
    "justify",
    "wrap",
  ]),
})<FlexProps>`
  display: flex;
  ${({ direction = "row" }) =>
    generateResponsiveStyle("flex-direction", direction)};
  ${({ gap }) => !!gap && generateResponsiveStyle("gap", gap)};
  ${({ align }) => align && generateResponsiveStyle("align-items", align)};
  ${({ justify }) =>
    justify && generateResponsiveStyle("justify-content", justify)};
  ${({ wrap }) => wrap && generateResponsiveStyle("flex-wrap", wrap)};
`
