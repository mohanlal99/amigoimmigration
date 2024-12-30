import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
export const countries = [
  {
    name: "Australia",
    image:
      "https://res.cloudinary.com/dp2aacz0d/image/upload/v1732100955/australia_wqldgk.avif",
    description: "Explore opportunities in the land down under",
  },
  {
    name: "UAE",
    image:
      "https://res.cloudinary.com/dp2aacz0d/image/upload/v1732100952/united-arab-emirates_soxzcs.avif",
    description: "Experience luxury hospitality in the Middle East",
  },
  {
    name: "USA",
    image:
      "https://res.cloudinary.com/dp2aacz0d/image/upload/v1732100956/united-states-america_epwcsc.avif",
    description: "Dive into diverse hospitality roles across America",
  },
  {
    name: "France",
    image:
      "https://res.cloudinary.com/dp2aacz0d/image/upload/v1732100951/russia-flag_qcgu9o.avif",
    description: "Immerse yourself in the culinary capital of the world",
  },
  {
    name: "Germany",
    image:
      "https://res.cloudinary.com/dp2aacz0d/image/upload/v1732100950/german-flag_phlyc0.avif",
    description: "Discover opportunities in Europe's economic powerhouse",
  },
  {
    name: "Russia",
    image:
      "https://res.cloudinary.com/dp2aacz0d/image/upload/v1732100951/russia-flag_qcgu9o.avif",
    description: "Explore unique hospitality experiences in Eastern Europe",
  },
];

const CountryCard = () => {
  return (
    <div className="w-full mt-10 ">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
        {countries.map((country, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Card className="w-full h-full">
              <CardBody className="flex flex-col items-center justify-center w-full h-full border border-gray-300 rounded-lg shadow-md p-2">
                <Image
                  removeWrapper
                  alt={country.name}
                  className="w-full h-32 lg:h-48 object-cover"
                  src={country.image}
                />
                <h3 className="text-lg font-semibold mb-2">{country.name}</h3>
                <p className="text-sm text-gray-600">{country.description}</p>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CountryCard;
