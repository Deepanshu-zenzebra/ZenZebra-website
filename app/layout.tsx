import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from '../components/Navbar'
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["300","400","500","600","700"],
});

export const metadata = {
  title: "ZenZebra - Curated Lifestyle Where You Already Are",
  description:
    "ZenZebra brings curated lifestyle products directly into your daily spaces - offices, gyms, cafés, and malls. Try first, own after. No pressure, no guesswork, just better living by design.",
  keywords: [
    "ZenZebra",
    "lifestyle brand",
    "lifestyle integrated brand",
    "try before you buy",
    "curated experiences",
    "consumer convenience",
    "brand sampling",
    "modern retail India",
  ],
  authors: [{ name: "ZenZebra Team" }],
  openGraph: {
    title: "ZenZebra - Curated Lifestyle Where You Already Are",
    description:
      "World’s first lifestyle-integrated brand. Discover, try, and buy premium products right where you live, work, and relax.",
    url: "https://zenzebra.in",
    siteName: "ZenZebra",
    images: [
      {
        url: "/logo.png", 
        width: 1200,
        height: 630,
        alt: "ZenZebra Lifestyle Experience",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  metadataBase: new URL("https://zenzebra.in"),
  themeColor: "#CC2224",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-black`}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}