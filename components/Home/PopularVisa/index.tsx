"use client";

import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";
import { ChevronRight, Plane } from "lucide-react";

const PopularVisa = () => {
  const visaData = [
    {
      country: "Australia",
      visas: [
        "PR Visa",
        "Work Visa",
        "Study Visa",
        "Subclass 462 Visa",
        "Business Visa",
        "Subclass 189 Visa",
        "TSS Visa",
        "Visit Visa",
      ],
    },
    {
      country: "Germany",
      visas: [
        "Opportunity Card",
        "Work Visa",
        "Study Visa",
        "Visit Visa",
        "Business Visa",
        "Jobseeker Visa",
      ],
    },
    {
      country: "USA",
      visas: [
        "H1-B : Work Visa",
        "B-1 Visa",
        "F-1 Visa",
        "Visit Visa",
        "J-1 Visa",
        "O-1 Visa",
      ],
    },
    {
      country: "UK",
      visas: [
        "Work Visa",
        "Study Visa",
        "Business Visa",
        "Innovator Visa",
        "Sponsorship Visa",
        "HPI Visa",
        "Visit Visa",
        "Youth Mobility Visa",
        "GAE Visa",
      ],
    },
    {
      country: "UAE",
      visas: [
        "Golden Visa",
        "Work Visa",
        "Study Visa",
        "Green Visa",
        "Visit Visa",
      ],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-8 bg-gradient-to-b from-blue-50 dark:from-gray-900 to-white dark:to-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-bold text-blue-900 dark:text-blue-300 mb-4">
            Popular Visa Categories
          </h2>
          <p className="text-xl text-blue-700  dark:text-blue-200">
            Explore visa options for your dream destination
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {visaData.map((country, index) => (
            <motion.div
              key={index}
              initial="hidden"
              variants={cardVariants}
              viewport={{ once: true, margin: "-50px" }}
              whileInView="visible"
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-400 p-6">
                  <h3 className="text-2xl font-bold text-white flex items-center justify-center">
                    <Plane className="mr-2" />
                    {country.country}
                  </h3>
                </CardHeader>
                <CardBody className="p-6">
                  <ul className="space-y-3">
                    {country.visas.map((visa, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center cursor-pointer  hover:text-blue-600 transition-colors duration-200"
                        initial="hidden"
                        transition={{ delay: idx * 0.1 }}
                        variants={listItemVariants}
                        viewport={{ once: true }}
                        whileInView="visible"
                      >
                        <ChevronRight
                          className="mr-2 text-blue-500"
                          size={16}
                        />
                        <span>{visa}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularVisa;
