"use client";

import { Title } from "@/components/title";
import withTheme from "@/theme";
import { Button, Divider, Space } from "antd";
import Link from "next/link";

function Home() {
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
        <h2 style={{ marginBottom: 0 }}>Ant Design</h2>
      </Space>
      <Divider style={{ marginBottom: 60 }}>Divider</Divider>
      <Button type="primary">Button</Button>
      <Title>Hello From Styled Component</Title>
      <Button type="primary">
        <Link href={"/ssr-page"}>Go to SSR Page</Link>
      </Button>
    </section>
  );
}

const HomePage = () => {
  return withTheme(<Home />);
};

export default HomePage;
