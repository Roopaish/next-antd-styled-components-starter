"use client";

import { ResponsiveValue, generateResponsiveStyle } from "@/lib/breakpoints";
import { shouldNotForwardPropsWithKeys } from "@/lib/styled";
import { CSSProperties } from "react";
import styled from "styled-components";

type StyledBoxProps = {
  display?: ResponsiveValue<CSSProperties["display"]>;
};

export const StyledBox = styled.div.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<StyledBoxProps>(["display"]),
})<StyledBoxProps>`
  ${({ display }) => display && generateResponsiveStyle("display", display)}
`;
