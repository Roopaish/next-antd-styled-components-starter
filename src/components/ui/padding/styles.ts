"use client";

import {
  ResponsiveValue,
  generateResponsiveStyle,
} from "@/lib/utils/breakpoints";
import { shouldNotForwardPropsWithKeys } from "@/lib/utils/styled";
import styled from "styled-components";

interface PaddingProps {
  top?: ResponsiveValue<number>;
  bottom?: ResponsiveValue<number>;
  left?: ResponsiveValue<number>;
  right?: ResponsiveValue<number>;
  all?: ResponsiveValue<number>;
  horizontal?: ResponsiveValue<number>;
  vertical?: ResponsiveValue<number>;
}

export const Padding = styled.div.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<PaddingProps>([
    "top",
    "bottom",
    "left",
    "right",
    "all",
    "horizontal",
    "vertical",
  ]),
})<PaddingProps>`
  ${({ top }) => top && generateResponsiveStyle("padding-top", top)}
  ${({ bottom }) => bottom && generateResponsiveStyle("padding-bottom", bottom)}
  ${({ left }) => left && generateResponsiveStyle("padding-left", left)}
  ${({ right }) => right && generateResponsiveStyle("padding-right", right)}
  ${({ all }) => all && generateResponsiveStyle("padding", all)}
  ${({ horizontal }) =>
    horizontal && generateResponsiveStyle("padding-left", horizontal)}
  ${({ horizontal }) =>
    horizontal && generateResponsiveStyle("padding-right", horizontal)}
  ${({ vertical }) =>
    vertical && generateResponsiveStyle("padding-top", vertical)}
  ${({ vertical }) =>
    vertical && generateResponsiveStyle("padding-bottom", vertical)}
`;
