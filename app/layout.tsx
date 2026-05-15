import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/sections/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import ScrollToTop from "./components/ui/ScrollToTop/ScrollToTop";

export const metadata: Metadata = {
  title: "bakaru.dev",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
