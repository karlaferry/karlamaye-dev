import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "karlamaye.dev",
  description: "Karla's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="lofi">
      <body className={jetBrainsMono.className}>
        <Header>
          {children}
          <Footer />
        </Header>
      </body>
    </html>
  );
}
