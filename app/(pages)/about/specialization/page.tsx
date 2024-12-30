import { Metadata } from "next";

import Specialization from "@/components/About/Specialization";

export const metadata: Metadata = {
  title: "Specialization - Amigo Immigration Services",
  description:
    "Learn more Specialization Amigo Immigration Services, a leading organization providing international internships, job placements, and career opportunities in the hospitality industry. Trusted by students and employers worldwide.",
  keywords: [
    "Amigo Immigration Services",
    "Hospitality internships",
    "Job placements",
    "International careers",
    "Immigration services",
    "Hotel staff hiring",
    "Career in hospitality",
  ],
  authors: [{ name: "Amigo Immigration Services" }],
  openGraph: {
    title: "Specialization Us - Amigo Immigration Services",
    description:
      "Discover how Amigo Immigration Services empowers individuals through international internships and job placements in the hospitality industry.",
    url: "https://amigoimmigrant.com/specialization",
    siteName: "Amigo Immigration Services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Specialization Us - Amigo Immigration Services",
    description:
      "Learn how Amigo Immigration Services is transforming careers with global opportunities in the hospitality industry.",
  },
  robots: "index, follow",
};

const SpecializationPage = () => {
  return <Specialization />;
};

export default SpecializationPage;
