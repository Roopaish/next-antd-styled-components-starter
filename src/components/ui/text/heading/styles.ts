"use client"

import { media } from "@/lib/utils/breakpoints"
import { shouldNotForwardPropsWithKeys } from "@/lib/utils/styled"
import { type StyledComponentsTheme } from "@/theme"
import styled, { css } from "styled-components"

export interface HeadingProps {
  color?: string
  medium?: boolean
  bold?: boolean
  semibold?: boolean
  mobileStyleOnly?: boolean
  desktopStyleOnly?: boolean
  inline?: boolean
  textAlign?: "center" | "left" | "right"
  themeColor?: keyof StyledComponentsTheme["token"]
}

const baseStyle = css<HeadingProps>`
  font-family: var(--font-inter);
  font-style: normal;
  font-weight: ${(props) =>
    props.bold ? 700 : props.semibold ? 600 : props.medium ? 500 : 400};
  color: ${(props) =>
    props.themeColor
      ? props.theme.token[props.themeColor as "colorPrimary"]
      : props.color || "inherit"};
  margin: 0;
  display: ${(props) => (props.inline ? "inline" : "block")};
  text-align: ${(props) => props.textAlign};
`

export const Heading1 = styled.h1.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<HeadingProps>([
    "bold",
    "color",
    "medium",
    "semibold",
    "mobileStyleOnly",
    "desktopStyleOnly",
    "inline",
    "textAlign",
    "themeColor",
  ]),
})<HeadingProps>`
  ${baseStyle}

  ${({ mobileStyleOnly, desktopStyleOnly }) => {
    if (mobileStyleOnly) {
      return css`
        font-size: 36px;
        line-height: 44px; /* 122.222% */
        letter-spacing: -0.72px;
      `
    }

    if (desktopStyleOnly) {
      return css`
        font-size: 40px;
        line-height: 48px; /* 120% */
        letter-spacing: -0.8px;
      `
    }

    return css`
      font-size: 36px;
      line-height: 44px; /* 122.222% */
      letter-spacing: -0.72px;

      ${media.md`
        font-size: 40px;
        line-height: 48px; /* 120% */
        letter-spacing: -0.8px;
      `}
    `
  }}
`

export const Heading2 = styled.h2.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<HeadingProps>([
    "bold",
    "color",
    "medium",
    "semibold",
    "mobileStyleOnly",
    "desktopStyleOnly",
  ]),
})<HeadingProps>`
  ${baseStyle}

  ${({ mobileStyleOnly, desktopStyleOnly }) => {
    if (mobileStyleOnly) {
      return css`
        font-size: 32px;
        line-height: 40px; /* 125% */
        letter-spacing: -0.64px;
      `
    }

    if (desktopStyleOnly) {
      return css`
        font-size: 36px;
        line-height: 44px; /* 122.222% */
        letter-spacing: -0.72px;
      `
    }

    return css`
      font-size: 32px;
      line-height: 40px; /* 125% */
      letter-spacing: -0.64px;

      ${media.md`
          font-size: 36px;
          line-height: 44px; /* 122.222% */
          letter-spacing: -0.72px;
      `}
    `
  }}
`

export const Heading3 = styled.h3.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<HeadingProps>([
    "bold",
    "color",
    "medium",
    "semibold",
    "mobileStyleOnly",
    "desktopStyleOnly",
  ]),
})<HeadingProps>`
  ${baseStyle}

  ${({ mobileStyleOnly, desktopStyleOnly }) => {
    if (mobileStyleOnly) {
      return css`
        font-size: 28px;
        line-height: 36px; /* 128.571% */
        letter-spacing: -0.56px;
      `
    }

    if (desktopStyleOnly) {
      return css`
        font-size: 32px;
        line-height: 40px; /* 125% */
        letter-spacing: -0.64px;
      `
    }

    return css`
      font-size: 28px;
      line-height: 36px; /* 128.571% */
      letter-spacing: -0.56px;

      ${media.md`
        font-size: 32px;
        line-height: 40px; /* 125% */
        letter-spacing: -0.64px;
      `}
    `
  }}
`

export const Heading4 = styled.h4.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<HeadingProps>([
    "bold",
    "color",
    "medium",
    "semibold",
    "mobileStyleOnly",
    "desktopStyleOnly",
  ]),
})<HeadingProps>`
  ${baseStyle}

  ${({ mobileStyleOnly, desktopStyleOnly }) => {
    if (mobileStyleOnly) {
      return css`
        font-size: 24px;
        line-height: 32px; /* 133.333% */
        letter-spacing: -0.48px;
      `
    }

    if (desktopStyleOnly) {
      return css`
        font-size: 28px;
        line-height: 38px; /* 135.714% */
        letter-spacing: -0.28px;
      `
    }

    return css`
      font-size: 24px;
      line-height: 32px; /* 133.333% */
      letter-spacing: -0.48px;

      ${media.md`
          font-size: 28px;
          line-height: 38px; /* 135.714% */
          letter-spacing: -0.28px;
        `}
    `
  }}
`

export const Heading5 = styled.h5.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<HeadingProps>([
    "bold",
    "color",
    "medium",
    "semibold",
    "mobileStyleOnly",
    "desktopStyleOnly",
  ]),
})<HeadingProps>`
  ${baseStyle}

  ${({ mobileStyleOnly, desktopStyleOnly }) => {
    if (mobileStyleOnly) {
      return css`
        font-size: 20px;
        line-height: 28px; /* 140% */
        letter-spacing: -0.4px;
      `
    }

    if (desktopStyleOnly) {
      return css`
        font-size: 22px;
        line-height: 30px; /* 136.364% */
        letter-spacing: -0.22px;
      `
    }

    return css`
      font-size: 20px;
      line-height: 28px; /* 140% */
      letter-spacing: -0.4px;

      ${media.md`
        font-size: 22px;
        line-height: 30px; /* 136.364% */
        letter-spacing: -0.22px;
      `}
    `
  }}
`

export const Heading6 = styled.h6.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<HeadingProps>([
    "bold",
    "color",
    "medium",
    "semibold",
    "mobileStyleOnly",
    "desktopStyleOnly",
  ]),
})<HeadingProps>`
  ${baseStyle}

  ${({ mobileStyleOnly, desktopStyleOnly }) => {
    if (mobileStyleOnly) {
      return css`
        font-size: 18px;
        line-height: 24px; /* 133.333% */
        letter-spacing: -0.36px;
      `
    }

    if (desktopStyleOnly) {
      return css`
        font-size: 20px;
        line-height: 28px; /* 140% */
      `
    }

    return css`
      font-size: 18px;
      line-height: 24px; /* 133.333% */
      letter-spacing: -0.36px;

      ${media.md`
        font-size: 20px;
        line-height: 28px; /* 140% */
      `}
    `
  }}
`
