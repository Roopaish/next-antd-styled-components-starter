import { type CSSProperties, type ReactNode } from "react"

import { StyledContainer, type ContainerProps } from "./styles"

export default function Container({
  as,
  px,
  pb,
  py,
  pt,
  maxW,
  children,
  ...rest
}: ContainerProps &
  CSSProperties & { children?: ReactNode; as?: keyof JSX.IntrinsicElements }) {
  return (
    <StyledContainer
      as={as}
      px={px}
      pb={pb}
      py={py}
      pt={pt}
      maxW={maxW}
      style={{ ...rest }}
    >
      {children}
    </StyledContainer>
  )
}
