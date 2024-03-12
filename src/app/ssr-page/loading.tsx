"use client";

import { Flex, Spin } from "antd";

export default function Loader() {
  return (
    <Flex
      style={{ height: "100vh", width: "100%" }}
      align="center"
      justify="center"
    >
      <Spin size="large" />
    </Flex>
  );
}
