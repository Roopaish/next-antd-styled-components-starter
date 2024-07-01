"use client"

import { shouldNotForwardPropsWithKeys } from "@/lib/utils/styled"
import { type StyledComponentsTheme } from "@/theme"
import styled, { css } from "styled-components"

interface TextProps {
  color?: string
  medium?: boolean
  bold?: boolean
  semibold?: boolean
  size?: "xl" | "l" | "m" | "s" | "xs"
  strike?: boolean
  inline?: boolean
  textAlign?: "center" | "left" | "right"
  themeColor?: keyof StyledComponentsTheme["token"]
}

export const Text = styled("p").withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<TextProps>([
    "color",
    "bold",
    "semibold",
    "size",
    "strike",
    "medium",
    "inline",
    "textAlign",
    "themeColor",
  ]),
})<TextProps>`
  font-family: var(--font-inter);
  font-style: normal;
  font-weight: ${(props) =>
    props.bold ? 700 : props.semibold ? 600 : props.medium ? 500 : 400};
  color: ${(props) =>
    props.themeColor
      ? props.theme.token[props.themeColor as "colorPrimary"]
      : props.color || "inherit"};
  margin: 0;
  text-decoration: ${({ strike }) => (strike ? "line-through" : "none")};
  display: ${({ inline }) => (inline ? "inline" : "block")};
  text-align: ${(props) => props.textAlign};

  ${({ size }) => {
    switch (size) {
      case "xl":
        return css`
          font-size: 18px;
          line-height: 26px; /* 144.444% */
          letter-spacing: -0.1px;
        `
      case "l":
        return css`
          font-size: 16px;
          line-height: 24px; /* 150% */
          letter-spacing: -0.1px;
        `
      case "m":
        return css`
          font-size: 15px;
          line-height: 22px; /* 146.667% */
          letter-spacing: -0.1px;
        `
      case "s":
        return css`
          font-size: 14px;
          line-height: 20px; /* 142.857% */
          letter-spacing: -0.1px;
        `
      case "xs":
        return css`
          font-size: 13px;
          line-height: 18px; /* 138.462% */
          letter-spacing: -0.1px;
        `
    }
  }}
`
