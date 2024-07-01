import { type CSSProperties, type ReactNode } from "react"

import { InnerWrapper, OuterWrapper } from "./styles"

interface AspectRatioProps {
  children: ReactNode
  /**
   * ratio = width / height
   */
  ratio: number
  style?: CSSProperties
}

const AspectRatio = ({ children, ratio, style }: AspectRatioProps) => (
  <OuterWrapper ratio={ratio} style={style}>
    <InnerWrapper>{children}</InnerWrapper>
  </OuterWrapper>
)
export default AspectRatio
