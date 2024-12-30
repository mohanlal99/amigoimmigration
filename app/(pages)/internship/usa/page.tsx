import React from "react";
import { Metadata } from "next";

import Usa from "@/components/Internship/Usa";

export const metadata: Metadata = {
  title: "Hospitality Internship Opportunities in the USA | Amigo Immigrant",
  description:
    "Explore hospitality internship opportunities in the USA and gain hands-on experience in top-tier establishments. Kickstart your career in hospitality today!",
  keywords:
    "hospitality internship, USA internships, USA hospitality career, internship opportunities in USA, hospitality industry USA",
  openGraph: {
    title: "Hospitality Internship Opportunities in the USA",
    description:
      "Explore hospitality internship opportunities in the USA and gain hands-on experience in top-tier establishments. Kickstart your career in hospitality today!",
    url: "https://amigoimmigrant.com/internship/usa", // Change this URL to the correct one for your USA internship page
    images: [
      "https://amigoimmigrant.com/images/usa/usa-internship-og.jpg", // Replace with your actual image URL
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospitality Internship Opportunities in the USA",
    description:
      "Explore hospitality internship opportunities in the USA and gain hands-on experience in top-tier establishments. Kickstart your career in hospitality today!",
    images: ["https://amigoimmigrant.com/images/usa/usa-internship-og.jpg"], // Replace with the correct Twitter image
  },
  robots: {
    index: true, // Tells search engines to index this page
    follow: true, // Allows search engines to follow links on this page
  },
};

const UsaPage = () => {
  return <Usa />;
};

export default UsaPage;
