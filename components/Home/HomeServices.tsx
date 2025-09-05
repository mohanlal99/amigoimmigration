"use client";
import { motion } from "framer-motion";

import { title } from "../primitives";

import { SingleServicesCard } from "../Services/SingleFeature";
import CountryCard from "../Services/countryCard";
import { services } from "../Services/featuresData";
import LatestJobsPage from "./LatestJobs";

const Services = () => {
  const highlights = [
    "Guaranteed Placements in Top 5-Star Hotels",
    "Specialized Visa and Interview Preparation",
    "100% Free Job Assistance in Select Regions",
    "Diplomas with 6-Month Global Internship",
  ];

  return (
    <section className="bg-opacity-35 p-2" id="services">
      <div className="container mx-auto flex items-center justify-center flex-col">
        {/* Section Title */}
        <div
          className={`${title({ color: "blue" })} text-center flex items-center justify-center pb-10`}
        >
          Explore Our Services
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <SingleServicesCard key={index} service={service} />
          ))}
        </div>

        {/* Key Highlights Section */}
        <div className="w-full mt-10">
          <h2 className="text-2xl font-semibold text-center mb-5">
            Why Choose Amigo Immigration Services?
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((point, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-2 p-4 border rounded-lg shadow-md bg-secondary-50"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <span className="text-blue-500 text-xl">✓</span>
                <span className="text-sm font-medium">{point}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Counters */}
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {[
            { label: "Students Placed", value: 100 },
            { label: "Countries Covered", value: 10 },
            { label: "Partner Hotels", value: 50 },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 text-center border rounded-lg shadow-md w-40 bg-secondary-50"
              initial={{ scale: 0.8 }}
              transition={{ duration: 0.5 }}
              whileInView={{ scale: 1 }}
            >
              <p className="text-3xl font-bold text-blue-600">{item.value}+</p>
              <p className="text-sm font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Country Cards */}
        <CountryCard />

        {/* Call to Action */}
        <div className="flex justify-center mt-10">
          <motion.a
            className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
            href="/apply"
            whileHover={{ scale: 1.05 }}
          >
            Start Your Global Career Today
          </motion.a>
        </div>

        {/* LatestJobs Section */}
        <LatestJobsPage />
      </div>
    </section>
  );
};

export default Services;
