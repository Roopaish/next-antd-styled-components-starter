"use client"

import { StyledComponentsTheme } from "@/theme"
import { useTheme } from "styled-components"

import SearchIcon from "./search.icon"

export default function Icon({
  type,
  color,
  size = 28,
  themeColor = "icon",
}: IconProps & { type: IconType }) {
  const { token } = useTheme()
  color = !!color
    ? color
    : !!themeColor
      ? token[themeColor as "colorPrimary"]
      : "currentColor"

  return (
    <>
      {
        {
          search: <SearchIcon size={size} color={color} />,
        }[type]
      }
    </>
  )
}

export type IconType = "search"

export type IconProps = {
  size?: number
  color?: string
  themeColor?: keyof StyledComponentsTheme["token"]
}
