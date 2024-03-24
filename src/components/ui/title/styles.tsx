"use client";

import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${({ theme }) => theme.token?.colorPrimary};
  background: ${({ theme }) => theme.token?.newColor};
`;
