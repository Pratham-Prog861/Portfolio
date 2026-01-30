import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Dock } from "@/components/Dock";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pratham Darji | Frontend Developer Portfolio",
    template: "%s | Pratham Darji",
  },
  description:
    "Pratham Darji - Frontend Developer specializing in React, Next.js, and modern web technologies. Based in Vadodara, Gujarat, India. View my projects and get in touch.",
  keywords: [
    "Pratham Darji",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "Web Developer",
    "Portfolio",
    "Vadodara",
  ],
  authors: [{ name: "Pratham Darji" }],
  creator: "Pratham Darji",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pratham-prog861.vercel.app/",
    siteName: "Pratham Darji Portfolio",
    title: "Pratham Darji | Frontend Developer Portfolio",
    description:
      "Frontend Developer specializing in React, Next.js, and modern web technologies.",
    images: [
      {
        url: "/profile.png",
        width: 400,
        height: 400,
        alt: "Pratham Darji",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratham Darji | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and modern web technologies.",
    images: ["/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: {
      url: "/favicon_io/apple-touch-icon.png",
      sizes: "180x180",
    },
    shortcut: "/favicon_io/favicon.ico",
  },
  metadataBase: new URL("https://pratham-prog861.vercel.app"),
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
              name: "Pratham Darji",
              url: "https://pratham-prog861.vercel.app/",
              sameAs: [
                "https://github.com/Pratham-Prog861",
                "https://www.linkedin.com/in/pratham-darji-b704092a2/",
              ],
              jobTitle: "Software Engineer",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
          <div className="fixed bottom-5 z-9999 w-full items-center h-10 flex justify-center">
            <Dock />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
