import { Metadata } from "next";

import Footer from "@/components/Footer";
import Hero from "@/components/Home/Hero";
import CallButton from "@/components/Home/CallButton";
import FandQ from "@/components/Home/faq";
import Loan from "@/components/Home/loan";
import PopularVisa from "@/components/Home/PopularVisa";
import StartJourney from "@/components/Home/StartJourney";
import Services from "@/components/Services";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amigoimmigrant.com"),
  title: {
    default: "Amigo Immigration Services",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Amigo Immigration: Trusted visa and study abroad services for USA, UAE, Australia, France, and Russia. Your gateway to global education and career opportunities.",
  keywords: [
    "immigration services",
    "visa consultancy",
    "international internships",
    "visa assistance",
    "pay after visa approval",
    "hotel management careers",
    "study abroad programs",
    "USA visa process",
    "UAE work permit",
    "Australian student visa",
    "France study visa",
    "Russia work visa",
    "hospitality internships",
    "study overseas consultancy",
    "global opportunities",
    "Amigo Immigration services",
  ],
  authors: [
    { name: "Amigo Immigration Team", url: "https://www.amigoimmigrant.com" },
  ],
  creator: "Amigo Immigration Team",
  publisher: "Amigo Immigration",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg" }],
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.amigoimmigrant.com",
    siteName: siteConfig.name,
    title: "Amigo Immigration | Global Education & Career Services",
    description:
      "Specialized visa services, internships, and study abroad opportunities for USA, UAE, Australia, Russia, and France. Start your global journey with Amigo Immigration.",
    images: [
      {
        url: "https://www.amigoimmigrant.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amigo Immigration - Empowering Global Dreams",
      },
      {
        url: "https://www.amigoimmigrant.com/images/og-image.jpg",
        width: 1200,
        height: 600,
        alt: "Study Abroad with Amigo Immigration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AmigoImmigrant",
    creator: "@AmigoImmigrant",
    title: "Amigo Immigration | Study & Work Abroad",
    description:
      "Explore global career paths with our expert visa and study abroad services for USA, UAE, Australia, Russia, and France. Your future starts here!",
    images: ["https://www.amigoimmigrant.com/images/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://www.amigoimmigrant.com",
    languages: {
      "en-US": "https://www.amigoimmigrant.com/en-US",
      "fr-FR": "https://www.amigoimmigrant.com/fr-FR",
      "ru-RU": "https://www.amigoimmigrant.com/ru-RU",
    },
  },
  category: "Education",
};

export default function Home() {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-purple-100 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -top-10 w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-3xl" />
        <div className="absolute -left-10 top-40 w-[300px] h-[300px] bg-purple-200/30 rounded-full blur-2xl" />
      </div>
      <Hero />
      <Services />
      <Loan />
      {/* <Video /> */}
      {/* <Brands/> */}
      <PopularVisa />
      <StartJourney />
      {/* <Review /> */}
      <FandQ />
      <CallButton />
      <Footer />
    </section>
  );
}
