"use client";

import {
  ResponsiveValue,
  generateResponsiveStyle,
} from "@/lib/utils/breakpoints";
import { shouldNotForwardPropsWithKeys } from "@/lib/utils/styled";
import { CSSProperties } from "react";
import styled from "styled-components";

export type StyledBoxProps = {
  display?: ResponsiveValue<CSSProperties["display"]>;
};

export const StyledBox = styled.div.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<StyledBoxProps>(["display"]),
})<StyledBoxProps>`
  ${({ display }) => display && generateResponsiveStyle("display", display)}
`;
