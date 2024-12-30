import React from "react";
import { Metadata } from "next";

import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us - Amigo Immigration Services",
  description:
    "Get in touch with Amigo Immigration Services for inquiries about international internships, job placements, and immigration services. We are here to help!",
  keywords: [
    "Contact Amigo Immigration Services",
    "Hospitality internships",
    "Job placements",
    "Immigration services",
    "International careers",
    "Get in touch",
  ],
  authors: [{ name: "Amigo Immigration Services" }],
  openGraph: {
    title: "Contact Us - Amigo Immigration Services",
    description:
      "Reach out to Amigo Immigration Services for assistance with global career opportunities in the hospitality industry.",
    url: "https://amigoimmigrant.com/contact",
    siteName: "Amigo Immigration Services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Amigo Immigration Services",
    description:
      "Need help? Contact Amigo Immigration Services for expert guidance in the hospitality industry.",
  },
  robots: "index, follow",
};

const ContactPage = () => {
  return <Contact />;
};

export default ContactPage;
