import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { motion } from "framer-motion";
import React from "react";

const HeroImage = () => {
  const images = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dp2aacz0d/image/upload/v1732098791/1happy-male-chef-dressed_gkz52o.avif",
      alt: "Chef showing thumbs up with a pot in hand",
      description:
        "A cheerful chef in uniform holding a pot and showing a thumbs up.",
      style: "rounded-lg shadow-lg",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dp2aacz0d/image/upload/v1732098791/2chambermaid-hotel-r_cnik2t.avif",
      alt: "Chambermaid tidying up a hotel room",
      description:
        "An chambermaid diligently organizing a hotel room with precision.",
      style: "rounded-md shadow-md",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dp2aacz0d/image/upload/v1732098794/3view-chef-working-kitchen_st4unr.jpg",
      alt: "chef preparing dishes in the kitchen",
      description: "An chef passionately preparing dishes in a busy kitchen.",
      style: "rounded-sm shadow-sm",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dp2aacz0d/image/upload/v1732098793/4bartender-making_rtwrqf.jpg",
      alt: "bartender crafting a cocktail in a lounge",
      description:
        "An bartender skillfully pouring cocktail ingredients in a vibrant lounge.",
      style: "rounded-sm shadow-sm",
    },
  ];

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4"
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      {images.map((image) => (
        <Card
          key={image.id}
          className={`overflow-hidden  rounded-lg shadow-md capitalize ${image.style}`}
        >
          <CardBody className="overflow-hidden rounded-md">
            <Image
              removeWrapper
              alt={image.alt}
              className="object-cover overflow-hidden hover:scale-105  w-full h-48"
              radius="sm"
              src={image.src}
            />
            <h3 className="text-sm text-center pt-2 font-bold truncate">
              {image.alt}
            </h3>
          </CardBody>
        </Card>
      ))}
    </motion.div>
  );
};

export default HeroImage;
