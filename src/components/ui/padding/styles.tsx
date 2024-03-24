import { ResponsiveValue, generateResponsiveStyle } from "@/lib/breakpoints";
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

export const Padding = styled.div<PaddingProps>`
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
