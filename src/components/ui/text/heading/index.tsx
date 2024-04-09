import { HTMLAttributes } from "react"

import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  HeadingProps,
} from "./styles"

export function Heading({
  size = "l",
  children,
  mobile: mobileStyleOnly = false,
  desktop: desktopStyleOnly = false,
  ...rest
}: HeadingProps &
  HTMLAttributes<HTMLHeadingElement> & {
    size?: "xl" | "l" | "m" | "s" | "xs" | "xxs"
    mobile?: boolean
    desktop?: boolean
  }) {
  return (
    <>
      {
        {
          xl: <Heading1 {...rest}>{children}</Heading1>,
          l: <Heading2 {...rest}>{children}</Heading2>,
          m: <Heading3 {...rest}>{children}</Heading3>,
          s: <Heading4 {...rest}>{children}</Heading4>,
          xs: <Heading5 {...rest}>{children}</Heading5>,
          xxs: <Heading6 {...rest}>{children}</Heading6>,
        }[size]
      }
    </>
  )
}
