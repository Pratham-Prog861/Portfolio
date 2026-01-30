import ContactMe from "@/components/ContactMe";
import LocationMap from "@/components/LocationMap";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me | Pratham Darji",
  description:
    "Get in touch with Pratham Darji. Based in Vadodara, Gujarat, India. Open for frontend development roles and freelance projects.",
  openGraph: {
    title: "Contact Me | Pratham Darji",
    description:
      "Get in touch with Pratham Darji for frontend development opportunities.",
    type: "website",
  },
};

export default function Page() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
      <ContactMe />

      <div className="max-w-5xl mx-auto mt-4 px-3 pb-24">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-white mb-2">
            📍 Find Me Here
          </h3>
          <p className="text-gray-400">Based in Vadodara, Gujarat, India</p>
        </div>
        <LocationMap />
      </div>
    </div>
  );
}
