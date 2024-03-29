import "./globals.css";

import { Inter, Open_Sans } from "next/font/google";
import localFont from "next/font/local";

import { Providers } from "@/components/Providers";

import type { Metadata } from "next";
import cx from "clsx";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--open-sans-font" });
const avenirNext = localFont({
  src: [
    {
      path: "../assets/fonts/avenir-next/AvenirNextCyr-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/avenir-next/AvenirNextCyr-Demi.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--avenir-next-font",
});

export const metadata: Metadata = {
  title: "Rotate Settings",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cx(openSans.className, inter.variable, avenirNext.variable)}>
        <Providers>
          <Suspense>{children}</Suspense>
        </Providers>
      </body>
    </html>
  );
}
