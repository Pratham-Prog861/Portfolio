import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore detailed case studies of Pratham Darji's featured projects. See the process, challenges, and solutions behind each project.",
  openGraph: {
    title: "Project Case Studies | Pratham Darji",
    description: "Deep dives into my most impactful projects.",
    type: "website",
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
