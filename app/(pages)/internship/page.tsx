import { Metadata } from "next";

import Internship from "@/components/Internship";

export const metadata: Metadata = {
  title: "Hospitality Internship Opportunities Around the World",
  description:
    "Explore exciting hospitality internship opportunities in the USA, Australia, UAE, France, and on luxury cruises. Kickstart your international career!",
  keywords:
    "hospitality internships, international internships, USA internships, Australia internships, UAE internships, France internships, cruise internships, hospitality career",
  openGraph: {
    title: "Hospitality Internship Opportunities Around the World",
    description:
      "Explore exciting hospitality internship opportunities in the USA, Australia, UAE, France, and on luxury cruises. Kickstart your international career!",
    url: "https://amigoimmigrant/internship",
    images: [
      "https://amigoimmigrant/images/og-image.jpg", // Replace with the actual URL of the image you want to use
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospitality Internship Opportunities Around the World",
    description:
      "Explore exciting hospitality internship opportunities in the USA, Australia, UAE, France, and on luxury cruises. Kickstart your international career!",
    images: "https://amgioimmigrant.com/images/twitter-image.jpg", // Replace with the actual URL of the image you want to use
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function InternshipPage() {
  return <Internship />;
}
