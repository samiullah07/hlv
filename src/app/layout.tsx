import type { Metadata } from "next";
import { Caudex } from "next/font/google";
import "./globals.css";

import ResponsiveNav from "./components/Navigation/ResponsiveNav";
import Footer from "./components/Footer/footer";

const caudex = Caudex({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HLV | Medical Solution",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={caudex.className}>
        <ResponsiveNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
