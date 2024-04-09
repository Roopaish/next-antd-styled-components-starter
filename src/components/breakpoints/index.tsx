"use client"

import useBreakpoints from "@/hooks/use-breakpoints"

import { Text } from "../ui/text"

export default function BreakpointsChecker() {
  const breakpoints = useBreakpoints()

  return (
    <Text style={{ wordBreak: "break-all" }}>
      {JSON.stringify(breakpoints)}
    </Text>
  )
}
