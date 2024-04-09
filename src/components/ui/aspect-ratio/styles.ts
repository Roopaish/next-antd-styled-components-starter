"use client";

import { shouldNotForwardPropsWithKeys } from "@/lib/utils/styled";
import styled from "styled-components";

interface OuterWrapperProps {
  /**
   * ratio = width / height
   */
  ratio: number;
}

export const OuterWrapper = styled("div").withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<OuterWrapperProps>([
    "ratio",
  ]),
})<OuterWrapperProps>`
  position: relative;
  width: 100%;
  height: 0;

  padding-bottom: ${({ ratio }) => (1 / ratio) * 100}%;
`;
export const InnerWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
