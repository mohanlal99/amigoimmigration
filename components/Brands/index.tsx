"use client";
import { Link } from "@nextui-org/link";
import { motion } from "framer-motion";
import { Home, Briefcase, Globe, Users, Building } from "lucide-react";
import { useEffect, useState } from "react";

type Company = {
  name: string;
  href: string;
  icon: JSX.Element;
};

export const companies: Company[] = [
  {
    name: "EliteStay Hospitality",
    href: "https://elitestay.com",
    icon: <Home size={60} />,
  },
  {
    name: "Opal Heights Hotels",
    href: "https://opalheights.com",
    icon: <Building size={60} />,
  },
  {
    name: "GrandVista Management",
    href: "https://grandvista.com",
    icon: <Briefcase size={60} />,
  },
  {
    name: "Prestige Inn Services",
    href: "https://prestigeinn.com",
    icon: <Globe size={60} />,
  },
  {
    name: "LuxePath Hospitality",
    href: "https://luxepath.com",
    icon: <Users size={60} />,
  },
  {
    name: "SereneSuites Management",
    href: "https://serenesuites.com",
    icon: <Home size={60} />,
  },
  {
    name: "PrimeStay Solutions",
    href: "https://primestay.com",
    icon: <Building size={60} />,
  },
  {
    name: "Horizon Hospitality Group",
    href: "https://horizonhospitality.com",
    icon: <Briefcase size={60} />,
  },
];

const Brands = () => {
  const [items, setItems] = useState(companies);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prevItems) => {
        const newItems = [...prevItems];
        const firstItem = newItems.shift();

        if (firstItem) newItems.push(firstItem);

        return newItems;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
            x: ["0%", "-50%"], // Infinite scrolling
          }}
          className="flex space-x-4 pb-4"
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
              whileHover={{ scale: 1.1 }}
            >
              <Link
                aria-label={`Visit ${company.name} website`}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-40"
                href={company.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-2"
                  initial={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.5 }}
                >
                  {company.icon}
                </motion.div>
                <motion.span
                  animate={{ opacity: 1 }}
                  className="text-sm font-semibold text-primary text-center"
                  initial={{ opacity: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {company.name}
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Brands;
