import React from "react";
import { Metadata } from "next";

import StudyAbroadPrograms from "@/components/Immigration";

export const metadata: Metadata = {
  title: "Study Abroad Programs | Amigo Immigration Services",
  description:
    "Unlock boundless opportunities to build your future with our Study Abroad Programs. Explore degrees and diplomas in Hotel Management and other fields at top institutions worldwide.",
  keywords: [
    "study abroad",
    "hotel management programs",
    "BHM degrees",
    "diploma in food production",
    "front office diploma",
    "housekeeping courses",
    "master's in hotel management",
    "top institutions for hotel management",
    "top institutions for hotel management",
    "study hospitality abroad",
    "international hotel management degrees",
    "culinary arts diploma",
    "food and beverage management master's",
    "scholarships for hotel management",
    "hospitality internships abroad",
    "global hospitality courses",
    "study in Switzerland",
    "hospitality schools in the USA",
    "Les Roches International School of Hotel Management",
    "Cornell University School of Hotel Administration",
  ],
  openGraph: {
    title: "Study Abroad Programs | Amigo Immigration Services",
    description:
      "Discover Study Abroad Programs for degrees and diplomas in Hotel Management and related fields. Partnering with top institutions worldwide, Amigo Immigration helps you unlock global opportunities.",
    url: "https://amigoimmigrant.com/study-abroad",
    siteName: "Amigo Immigration",
    images: [
      {
        url: "https://amigoimmigrant.com/images/study-abroad.jpg", // Add an appropriate image URL
        width: 1200,
        height: 630,
        alt: "Study Abroad Programs",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Study Abroad Programs | Amigo Immigration",
    description:
      "Explore a range of degrees and diplomas in Hotel Management at prestigious global institutions. Learn how to study abroad with Amigo Immigration.",
    images: ["https://amigoimmigrant.com/images/study-abroad.jpg"], // Add an appropriate image URL
  },
};

const StudyAbroad = () => {
  return <StudyAbroadPrograms />;
};

export default StudyAbroad;
