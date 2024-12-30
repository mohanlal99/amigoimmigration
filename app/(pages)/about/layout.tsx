import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Amigo Immigration Services",
  description:
    "Learn more about Amigo Immigration Services, a leading organization providing international internships, job placements, and career opportunities in the hospitality industry. Trusted by students and employers worldwide.",
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
    title: "About Us - Amigo Immigration Services",
    description:
      "Discover how Amigo Immigration Services empowers individuals through international internships and job placements in the hospitality industry.",
    url: "https://amigoimmigrant.com/about",
    siteName: "Amigo Immigration Services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Amigo Immigration Services",
    description:
      "Learn how Amigo Immigration Services is transforming careers with global opportunities in the hospitality industry.",
  },
  robots: "index, follow",
};
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 ">
      <div className="inline-block  mx-auto justify-center">{children}</div>
    </section>
  );
}
