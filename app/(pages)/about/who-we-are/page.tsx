import { Metadata } from "next";

import WhoWeAre from "@/components/About/WhoWeAre";

export const metadata: Metadata = {
  title: "Who-We-Are - Amigo Immigration Services",
  description:
    "Learn more Who-We-Are Amigo Immigration Services, a leading organization providing international internships, job placements, and career opportunities in the hospitality industry. Trusted by students and employers worldwide.",
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
    title: "Who-We-Are Us - Amigo Immigration Services",
    description:
      "Discover how Amigo Immigration Services empowers individuals through international internships and job placements in the hospitality industry.",
    url: "https://amigoimmigrant.com/who-we-are",
    siteName: "Amigo Immigration Services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Who-We-Are Us - Amigo Immigration Services",
    description:
      "Learn how Amigo Immigration Services is transforming careers with global opportunities in the hospitality industry.",
  },
  robots: "index, follow",
};

const WhoWeArePage = () => {
  return <WhoWeAre />;
};

export default WhoWeArePage;
