import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read articles and tutorials by Pratham Darji about web development, React, Next.js, and modern frontend technologies.",
  openGraph: {
    title: "Blog | Pratham Darji",
    description: "Articles and tutorials on web development.",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
