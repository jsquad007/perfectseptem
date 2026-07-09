import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import BgTextLayer from "@/components/BgTextLayer";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  icons: { icon: "/icon.svg" },

  title: "Perfect Septem — Sharing the Good News",
  description:
    '"I do not say to you seven times, but seventy times seven." Matthew 18:22',
  metadataBase: new URL("https://perfectseptem.com"),
  openGraph: {
    siteName: "Perfect Septem",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={hanken.variable}>

      <body className="bg-[#131313] text-[#e5e2e1] antialiased min-h-screen">
        <BgTextLayer />
        <TopNav />
        <Sidebar />
        <main className="lg:ml-64 pt-20 lg:pt-8 px-4 md:px-8 pb-12 max-w-7xl mx-auto min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
