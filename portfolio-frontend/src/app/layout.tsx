

import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import HomePage from "@/components/shared/Home/Home";
import Footer from "@/components/shared/footer";
import Providers from "@/liv/Providers";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noobwork",
  description:
    "Welcome to myy Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={roboto.className}>
        <Providers>
          <HomePage />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
