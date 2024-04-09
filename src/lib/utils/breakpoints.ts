import { css } from "styled-components"

const breakpoints = {
  base: 0,
  /**
   * screen width < 576px
   */
  xs: 575,
  /**
   * screen width >= 576px
   */
  sm: 576,
  /**
   * screen width >= 768px
   */
  md: 768,
  /**
   * screen width >= 992px
   */
  lg: 992,
  /**
   * screen width >= 1200px
   */
  xl: 1200,
  /**
   * screen width >= 1600px
   */
  xxl: 1600,
}

export const media = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    if (label === "xs") {
      accumulator[label] = (styles: TemplateStringsArray | string) => css`
        @media (max-width: ${breakpoints[label]}px) {
          ${styles}
        }
      `
    }

    // used `else if` instead of `else` to avoid typescript errors
    else if (
      label === "xxl" ||
      label === "xl" ||
      label === "lg" ||
      label === "md" ||
      label === "sm"
    ) {
      accumulator[label] = (styles: TemplateStringsArray | string) => css`
        @media (min-width: ${breakpoints[label]}px) {
          ${styles}
        }
      `
    }
    return accumulator
  },
  {} as {
    [key in keyof Breakpoints]: (
      styles: TemplateStringsArray | string
    ) => ReturnType<typeof css>
  }
)

export const generateResponsiveStyle = (
  property: string,
  value: ResponsiveValue<number | string>
) => {
  if (typeof value === "number" || typeof value === "string") {
    const style = `${property}: ${value}${
      typeof value === "number" ? "px" : ""
    };`
    return css`
      ${style}
    `
  }

  const breakpointStyles = Object.entries(value).map(([breakpoint, val]) => {
    if (breakpoint === "base") {
      const style = `${property}: ${val}${typeof val === "number" ? "px" : ""};`
      return css`
        ${style}
      `
    }

    const breakpointStyle = media[breakpoint as keyof typeof media](
      `${property}: ${val}${typeof val === "number" ? "px" : ""};`
    )
    return css`
      ${breakpointStyle};
    `
  })

  return breakpointStyles
}

export type Breakpoints = typeof breakpoints
export type ResponsiveValue<T> = T | { [breakpoint in keyof Breakpoints]?: T }
