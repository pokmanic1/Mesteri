import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Meșteri – găsește un meșter în orașul tău",
    template: "%s | Meșteri",
  },
  description:
    "Găsește electricieni, instalatori, zugravi și ingineri din orașul tău și sună-i direct. Fără intermediari, fără comision.",
  openGraph: {
    title: "Meșteri – găsește un meșter în orașul tău",
    description:
      "Alegi categoria, vezi lucrările și suni direct. Fără intermediari, fără comision.",
    locale: "ro_RO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${montserrat.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}