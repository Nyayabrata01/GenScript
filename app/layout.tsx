import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GenScript - AI-Powered Terminal Assistant",
  description:
    "GenScript enhances your terminal with AI-powered command execution and intelligent suggestions. Boost your productivity with seamless prompt and auto-suggestion modes.",
  keywords: [
    "AI Terminal",
    "Command Assistant",
    "GenScript",
    "AI-powered CLI",
    "Terminal Automation",
    "Productivity Tools",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "GenScript - AI-Powered Terminal Assistant",
    description:
      "Run commands faster with AI-powered suggestions and natural language processing. Never struggle with complex syntax again.",
    url: "https://genscript.deploylite.tech",
    siteName: "GenScript",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GenScript AI Terminal",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GenScript - AI-Powered Terminal Assistant",
    description:
      "Enhance your terminal with AI-powered command execution and suggestions. Faster, smarter, and seamless.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="GenScript Team" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
