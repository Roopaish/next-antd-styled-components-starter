import { Flex, Spin } from "antd"

// For the awaiting time in SSR, we can show a loader
export default function Loader() {
  return (
    <Flex
      style={{ height: "100vh", width: "100%" }}
      align="center"
      justify="center"
    >
      <Spin size="large" />
    </Flex>
  )
}
