"use client"

import type { SVGProps } from "react"
import { type StyledComponentsTheme } from "@/theme"
import { useTheme } from "styled-components"

import SearchIcon from "./search.icon"

const Icons = {
  search: SearchIcon,
}

export default function Icon({
  type,
  color,
  size = 28,
  themeColor = "icon",
  style,
  ...rest
}: IconProps & { type: IconType }) {
  const { token } = useTheme()
  color = !!color
    ? color
    : !!themeColor
      ? token[themeColor as "colorPrimary"]
      : "currentColor"

  const IconComponent = Icons[type]

  return IconComponent ? (
    <IconComponent size={size} color={color} style={style} {...rest} />
  ) : null
}

export type IconType = keyof typeof Icons

export type IconProps = {
  size?: number
  color?: string
  themeColor?: keyof StyledComponentsTheme["token"]
} & SVGProps<SVGSVGElement>
