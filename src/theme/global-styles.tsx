"use client";

import { ThemeConfig } from "antd";
import { createGlobalStyle } from "styled-components";

type Props = {
  theme?: ThemeConfig;
};

const GlobalStyles = createGlobalStyle<Props>`
  body {
    margin: 0;
    font-family: Inter;
  }
`;

export default GlobalStyles;
