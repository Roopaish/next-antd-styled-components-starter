import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { siteConfig } from "@/data/config"
import Providers from "@/lib/providers"
import { AntdRegistry } from "@ant-design/nextjs-registry"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.variable}`}>
        <AntdRegistry>
          <Providers>{children}</Providers>
        </AntdRegistry>
      </body>
    </html>
  )
}
