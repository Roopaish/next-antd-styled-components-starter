import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "@/theme/global-styles";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Antd Styled-Components Starter",
  description: "Starter Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GlobalStyles />
      <body className={inter.className}>
        <AntdRegistry>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </AntdRegistry>
      </body>
    </html>
  );
}
