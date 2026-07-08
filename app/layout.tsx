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
  metadataBase: new URL("https://brittnevaldivia.com"),
  title: "Brittne Valdivia | Front-End Developer",
  description:
    "Front-end developer portfolio featuring accessible interfaces, thoughtful UX, and web projects by Brittne Valdivia.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Brittne Valdivia | Front-End Developer",
    description:
      "Front-end developer portfolio featuring accessible interfaces, thoughtful UX, and web projects by Brittne Valdivia.",
    siteName: "Brittne Valdivia Portfolio",
    type: "website",
    url: "https://brittnevaldivia.com",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Brittne Valdivia portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brittne Valdivia | Front-End Developer",
    description:
      "Front-end developer portfolio featuring accessible interfaces, thoughtful UX, and web projects by Brittne Valdivia.",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
