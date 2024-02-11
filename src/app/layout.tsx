import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React UI Collection",
  description: "Created by Saeed Khosravi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen h-full`}>
        <Header />
        <main className="min-h-screen h-full container bg-slate-100 text-black pt-[100px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
