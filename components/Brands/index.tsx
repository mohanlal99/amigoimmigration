"use client";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { motion } from "framer-motion";
import { Home, Briefcase, Globe, Users, Building } from "lucide-react";
import { useState } from "react";

type Company = {
  name: string;
  href: string;
  icon: JSX.Element;
  image: string;
};

export const companies: Company[] = [
  {
    name: "EliteStay Hospitality",
    href: "https://elitestay.com",
    icon: <Home size={60} />,
    image: "https://elitestay.com/image.jpg", // Add the image URL here
  },
  {
    name: "Opal Heights Hotels",
    href: "https://opalheights.com",
    icon: <Building size={60} />,
    image: "https://opalheights.com/image.jpg", // Add the image URL here
  },
  {
    name: "GrandVista Management",
    href: "https://grandvista.com",
    icon: <Briefcase size={60} />,
    image: "https://grandvista.com/image.jpg", // Add the image URL here
  },
  {
    name: "Prestige Inn Services",
    href: "https://prestigeinn.com",
    icon: <Globe size={60} />,
    image: "https://prestigeinn.com/image.jpg", // Add the image URL here
  },
  {
    name: "LuxePath Hospitality",
    href: "https://luxepath.com",
    icon: <Users size={60} />,
    image: "https://luxepath.com/image.jpg", // Add the image URL here
  },
  {
    name: "SereneSuites Management",
    href: "https://serenesuites.com",
    icon: <Home size={60} />,
    image: "https://serenesuites.com/image.jpg", // Add the image URL here
  },
  {
    name: "PrimeStay Solutions",
    href: "https://primestay.com",
    icon: <Building size={60} />,
    image: "https://primestay.com/image.jpg", // Add the image URL here
  },
  {
    name: "Horizon Hospitality Group",
    href: "https://horizonhospitality.com",
    icon: <Briefcase size={60} />,
    image: "https://horizonhospitality.com/image.jpg", // Add the image URL here
  },
];

const Brands = () => {
  const [items] = useState(companies);

  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      className="w-full container mx-auto p-6 rounded-xl shadow-md overflow-hidden "
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl font-bold text-center mb-6">Our Partners</h2>

      {/* Horizontal scrollable list */}
      <div className="relative overflow-hidden">
        <motion.div
          animate={{
            x: ["0%", "-20%"], // Infinite scrolling
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          style={{ display: "inline-flex", willChange: "transform" }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "linear",
          }}
        >
          {items.concat(items).map((company, index) => (
            <motion.div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 border-2 border-gray-700 "
            >
              <Link
                aria-label={`Visit ${company.name} website`}
                className="flex flex-col items-center justify-center p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-96"
                href={company.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="relative h-full w-full z-10 ">
                  <Image
                    removeWrapper
                    alt="Luxury hotel room"
                    className="object-cover -z-10"
                    src={company.image}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <motion.div className="text-white">
                      {company.icon}
                    </motion.div>
                  </div>
                </div>
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {company.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Luxury hospitality partner
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Brands;
