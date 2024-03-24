"use client";

import { ResponsiveValue, generateResponsiveStyle } from "@/lib/breakpoints";
import { shouldNotForwardPropsWithKeys } from "@/lib/styled";
import { styled } from "styled-components";

export interface ContainerProps {
  py?: ResponsiveValue<number>;
  px?: ResponsiveValue<number>;
  pt?: ResponsiveValue<number>;
  pb?: ResponsiveValue<number>;
  maxW?: string;
}

export const StyledContainer = styled("section").withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<ContainerProps>([
    "py",
    "pt",
    "pb",
    "maxW",
    "px",
  ]),
})<ContainerProps>`
  max-width: ${({ maxW }) => maxW ?? "1280px"};
  margin: 0 auto;
  box-sizing: border-box;
  width: 100%;

  ${({ py = { base: 24, md: 64 }, pt, pb }) =>
    !!pt || !!pb ? "" : generateResponsiveStyle("padding-top", py)}
  ${({ py = { base: 24, md: 64 }, pt, pb }) =>
    !!pt || !!pb ? "" : generateResponsiveStyle("padding-bottom", py)}
  ${({ px = { base: 24, md: 32 } }) =>
    px && generateResponsiveStyle("padding-left", px)}
  ${({ px = { base: 24, md: 32 } }) =>
    px && generateResponsiveStyle("padding-right", px)}

  ${({ pt = { base: 24, md: 64 }, py }) =>
    pt && generateResponsiveStyle("padding-top", py === 0 ? 0 : pt)}
  ${({ pb = { base: 24, md: 64 }, py }) =>
    pb && generateResponsiveStyle("padding-bottom", py === 0 ? 0 : pb)}
`;
