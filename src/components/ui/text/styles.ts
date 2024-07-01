"use client"

import { shouldNotForwardPropsWithKeys } from "@/lib/utils/styled"
import { type StyledComponentsTheme } from "@/theme"
import { Typography } from "antd"
import styled from "styled-components"

export interface TextProps {
  color?: string
  medium?: boolean
  bold?: boolean
  semibold?: boolean
  size?: number
  strike?: boolean
  inline?: boolean
  textAlign?: "center" | "left" | "right"
  themeColor?: keyof StyledComponentsTheme["token"]
  fontFamily?: "inter"
  lineHeight?: string
  letterSpacing?: string
  underline?: boolean
}

export const Text = styled(Typography.Text).withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<TextProps>([
    "color",
    "bold",
    "semibold",
    "size",
    "strike",
    "medium",
    "inline",
    "textAlign",
    "fontFamily",
    "lineHeight",
    "letterSpacing",
    "themeColor",
    "underline",
  ]),
})<TextProps>`
  font-family: ${({ fontFamily = "inter" }) => `var(--font-${fontFamily})`};
  font-style: normal;
  font-weight: ${(props) =>
    props.bold ? 700 : props.semibold ? 600 : props.medium ? 500 : 400};
  color: ${(props) =>
    props.themeColor
      ? props.theme.token[props.themeColor as "colorPrimary"]
      : props.color || "inherit"};
  margin: 0;
  text-decoration: ${({ strike, underline }) =>
    strike ? "line-through" : underline ? "underline" : "none"};
  display: ${({ inline }) => (inline ? "inline" : "block")};
  text-align: ${(props) => props.textAlign};
  font-size: ${({ size }) => `${size}px`};
  line-height: ${({ lineHeight }) => lineHeight};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
`
