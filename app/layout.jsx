import { Inter, JetBrains_Mono } from "next/font/google";
import Background from "@/components/organisms/Background";
import Banner from "@/components/organisms/Banner";
import Nav from "@/components/organisms/Nav";
import { prefs, T } from "@/lib/i18n";
import Footer from "@/components/organisms/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = { title: { default: "Judd's Portfolio", template: "%s | Judd's Portfolio" }, description: "Jud's corner of the internet." };

export default async function RootLayout({ children }) {
  const { lang, theme } = await prefs();
  const t = T[lang];
  return (
    <html lang={lang} data-theme={theme} className={`${inter.variable} ${mono.variable}`}>
      <body className="font-body leading-relaxed text-ink selection:bg-accent selection:text-brand-pale">
        <Background />
        <div className="mx-auto w-[92vw] max-w-300 py-4 md:w-4/5 md:py-8">
          <Banner />
          <Nav pages={[t.home, t.posts, t.gallery]} />
          <main className="rounded-b-xl rounded-tr-xl border border-line bg-brand-pale/90 p-3 shadow-win backdrop-blur-sm md:p-4">{children}</main>
          <Footer text={t.footer} />
        </div>
      </body>
    </html>
  );
}
