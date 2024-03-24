import { CSSProperties, ReactNode } from "react";
import { ContainerProps, StyledContainer } from "./styles";

export default function Container({
  px,
  pb,
  py,
  pt,
  maxW,
  children,
  ...rest
}: ContainerProps & CSSProperties & { children?: ReactNode }) {
  return (
    <StyledContainer
      px={px}
      pb={pb}
      py={py}
      pt={pt}
      maxW={maxW}
      style={{ ...rest }}
    >
      {children}
    </StyledContainer>
  );
}
