import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Dock } from "@/components/Dock";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pratham Darji Portfolio",
  description: "Pratham Darji Portfolio Website - Pratham Darji",
  icons: {
    icon: [
      {
        url: '/favicon_io/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon_io/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      }
    ],
    apple: {
      url: '/favicon_io/apple-touch-icon.png',
      sizes: '180x180',
    },
    shortcut: '/favicon_io/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Pratham Darji",
              "url": "https://pratham-prog861.vercel.app/",
              "sameAs": [
                "https://github.com/Pratham-Prog861",
                "https://www.linkedin.com/in/pratham-darji-b704092a2/"
              ],
              "jobTitle": "Software Engineer"
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <div className="fixed bottom-5 z-9999 w-full items-center h-10 flex justify-center">
          <Dock />
        </div>
      </body>
    </html>
  );
}
