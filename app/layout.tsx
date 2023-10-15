"use client";

import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { Providers } from "./providers";
import { WagmiConfig } from "wagmi";
import {
  RainbowKitProvider,
  cssStringFromTheme,
  darkTheme,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import { wagmiConfig, chains } from "@/configs/Web3ConnectConfig";
import ClientOnly from "@/components/ClientOnly";
import "@rainbow-me/rainbowkit/styles.css";
import { useTheme } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className="dark:bg-black">
        <ClientOnly>
          <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains} modalSize="compact">
              <Providers>
                <Header />
                {children}
                <ScrollToTop />
              </Providers>
            </RainbowKitProvider>
          </WagmiConfig>
        </ClientOnly>
      </body>
    </html>
  );
}
