'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { ContextProvider } from "./ModeContext/Context";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <ContextProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ContextProvider>
  );
}
