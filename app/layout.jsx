import { Lilita_One, DM_Sans } from "next/font/google";
import Background from "@/components/organisms/Background";
import Marquee from "@/components/organisms/Marquee";
import Banner from "@/components/organisms/Banner";
import Nav from "@/components/organisms/Nav";
import Footer from "@/components/organisms/Footer";
import "./globals.css";

const lilita = Lilita_One({ weight: "400", subsets: ["latin"], variable: "--font-lilita" });
const dm = DM_Sans({ subsets: ["latin"], variable: "--font-dm" });

export const metadata = { title: { default: "Judd's Portfolio", template: "%s | Judd's Portfolio" }, description: "Jud's corner of the internet." };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lilita.variable} ${dm.variable}`}>
      <body className="font-body leading-relaxed text-ink selection:bg-brand selection:text-black">
        <Background />
        <div className="mx-auto w-[92vw] max-w-300 py-4 md:w-4/5 md:py-8">
          <Banner />
          <Nav />
          <main className="border-3 border-dashed border-brand-dark bg-brand-pale/85 p-3 shadow-hard backdrop-blur-sm md:p-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
