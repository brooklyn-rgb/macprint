import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import  Footer  from "./components/layout/Footer";
import  Navbar  from "./components/layout/Navbar";

import { PopupProvider } from "./context/PopupContext";
import SubscribeButton from '../app/components/layout/SubscribeButton';
import { cookies } from 'next/headers';
import GlobalPopup from "../app/components/layout/GlobalPopup";
import { ReactNode } from 'react';
import HeroCarousel from "./components/layout/HeroCarousel";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "MacPrinters",
  description: "Your trusted partner for custom software development and professional printing solutions",
themeColor: '#0ca4e1',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies()
  const theme = cookieStore.get('theme')
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
/>
<meta name="theme-color" content="#0ca4e1" />
  <link rel="manifest" href="/manifest.json" />
  <link rel="icon" href="/icon-192x192.png" />
  <link rel="apple-touch-icon" href="/icon-192x192.png" />

  <meta charSet="UTF-8" />
    <title>MacPrinters</title>    
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PopupProvider>
          <Navbar />         
          <HeroCarousel />
        {children}
        {/* Pass server value as prop */}
            <SubscribeButton hasSubscribed={false} />
           <GlobalPopup />
          <Footer />
          </PopupProvider>
      </body>
    </html>
  );
}
