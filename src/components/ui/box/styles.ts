"use client"

import { type CSSProperties } from "react"
import {
  generateResponsiveStyle,
  type ResponsiveValue,
} from "@/lib/utils/breakpoints"
import { shouldNotForwardPropsWithKeys } from "@/lib/utils/styled"
import styled from "styled-components"

export type StyledBoxProps = {
  display?: ResponsiveValue<CSSProperties["display"]>
}

export const StyledBox = styled.div.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<StyledBoxProps>(["display"]),
})<StyledBoxProps>`
  ${({ display }) => display && generateResponsiveStyle("display", display)}
`
