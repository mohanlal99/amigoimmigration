import { Metadata } from "next";

import CareerConsultant from "@/components/About/CareerConsultant";

export const metadata: Metadata = {
  title: "Career-Consultant - Amigo Immigration Services",
  description:
    "Learn more Career-Consultant Amigo Immigration Services, a leading organization providing international internships, job placements, and career opportunities in the hospitality industry. Trusted by students and employers worldwide.",
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
    title: "Career-Consultant Us - Amigo Immigration Services",
    description:
      "Discover how Amigo Immigration Services empowers individuals through international internships and job placements in the hospitality industry.",
    url: "https://amigoimmigrant.com/career-consultant",
    siteName: "Amigo Immigration Services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Career-Consultant Us - Amigo Immigration Services",
    description:
      "Learn how Amigo Immigration Services is transforming careers with global opportunities in the hospitality industry.",
  },
  robots: "index, follow",
};

const CareerConsultantPage = () => {
  return <CareerConsultant />;
};

export default CareerConsultantPage;
