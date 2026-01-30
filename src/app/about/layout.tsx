import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about Pratham Darji - Frontend Developer specializing in React, Next.js, and modern web technologies. Based in Vadodara, Gujarat, India.",
  openGraph: {
    title: "About Me | Pratham Darji",
    description:
      "Frontend Developer passionate about creating beautiful web applications.",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
