import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar'
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["300","400","500","600","700"],
});


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