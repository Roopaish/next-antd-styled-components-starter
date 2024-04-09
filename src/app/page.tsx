import Link from "next/link"
import BreakpointsChecker from "@/components/breakpoints"
import Box from "@/components/ui/box"
import Container from "@/components/ui/container"
import { Margin } from "@/components/ui/margin"
import { Heading, Text } from "@/components/ui/text"
import { siteConfig } from "@/data/config"
import { Button, Divider, Flex, Input } from "antd"

export default function Home() {
  return (
    <Container
      as="main"
      textAlign="center"
      px={{ md: 48, base: 24 }}
      py={{ md: 60, base: 30 }}
    >
      <Heading size="xl">{siteConfig.name}</Heading>
      <Text as="h1" size="xl" themeColor="colorPrimary">
        {siteConfig.description}
      </Text>

      <Margin vertical={{ md: 60, base: 30 }}>
        <Divider>Divider</Divider>
      </Margin>

      <Flex gap="12px" justify="center">
        <Button type="primary" size="large">
          Button
        </Button>
        <Button type="primary" size="large">
          <Link href={"/ssr-page"}>Go to SSR Page</Link>
        </Button>
      </Flex>

      <Box as="section" maxWidth="500px" margin="20px auto">
        <Input
          size="large"
          placeholder="This input is modified from theme/index.ts"
        />
      </Box>

      <h1>Breakpoints using useBreakpoints</h1>
      <BreakpointsChecker />
    </Container>
  )
}
