import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portfolio | Kyrylo",
  description: "Portfolio by Kyrylo <coder.frontend@gmail.com>",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-primary-2 flex flex-col h-screen`}
      >
        <Header />
        <main className="flex-1">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
