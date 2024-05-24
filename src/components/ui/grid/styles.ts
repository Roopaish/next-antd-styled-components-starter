"use client"

import {
  generateResponsiveStyle,
  type ResponsiveValue,
} from "@/lib/utils/breakpoints"
import { shouldNotForwardPropsWithKeys } from "@/lib/utils/styled"
import styled from "styled-components"

interface GridProps {
  columns?: ResponsiveValue<string>
  gap?: ResponsiveValue<string>
  rows?: ResponsiveValue<string>
}

export const Grid = styled.div.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<GridProps>([
    "columns",
    "gap",
    "rows",
  ]),
})<GridProps>`
  display: grid;
  ${({ columns }) =>
    columns && generateResponsiveStyle("grid-template-columns", columns)}
  ${({ gap }) => gap && generateResponsiveStyle("gap", gap)}
  ${({ rows }) => rows && generateResponsiveStyle("grid-template-rows", rows)}
`

interface GridItemProps {
  colspan?: ResponsiveValue<string>
  rowspan?: ResponsiveValue<string>
}

export const GridItem = styled.div.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<GridItemProps>([
    "colspan",
    "rowspan",
  ]),
})<GridItemProps>`
  ${({ colspan }) => colspan && generateResponsiveStyle("grid-column", colspan)}
  ${({ rowspan }) => rowspan && generateResponsiveStyle("grid-row", rowspan)}
`
