import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from './navBar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JSKnews",
  description: "Hier findest du coole news",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        <body className={inter.className}>{children}</body>
      </body>
    </html>
  );
}
