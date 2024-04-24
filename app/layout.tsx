import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "karlamaye.dev",
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
