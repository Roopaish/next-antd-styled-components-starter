"use client";

import { Title } from "@/components/ui/title";
import { siteConfig } from "@/data/config";
import useBreakpoints from "@/hooks/use-breakpoints";
import withTheme from "@/theme";
import { Button, Divider, Space } from "antd";
import Link from "next/link";

function Home() {
  const breakpoints = useBreakpoints();

  return (
    <section
      style={{
        textAlign: "center",
        marginTop: 48,
        marginBottom: 40,
        padding: 100,
      }}
    >
      <Space align="start">
        <h2 style={{ marginBottom: 0 }}>{siteConfig.name}</h2>
      </Space>
      <Divider style={{ marginBottom: 60 }}>Divider</Divider>
      <Button type="primary">Button</Button>
      <Title>Hello From Styled Component</Title>
      <Button type="primary">
        <Link href={"/ssr-page"}>Go to SSR Page</Link>
      </Button>
      <br />
      <h1>Breakpoints using useBreakpoints</h1>
      {JSON.stringify(breakpoints)}
    </section>
  );
}

const HomePage = () => {
  return withTheme(<Home />);
};

export default HomePage;
