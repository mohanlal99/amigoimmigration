"use client";

import { useState } from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export interface ServicesType {
  id: number;
  icon: React.ReactNode;
  title: string;
  paragraph: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  image: string;
  href: string;
  icon?: string;
}

export const SingleServicesCard: React.FC<{ service: Service }> = ({
  service,
}) => {
  const router = useRouter();
  const [isHovered] = useState(false);

  return (
    <motion.div
      transition={{ type: "spring", stiffness: 300 }}
      whileHover={{ scale: 1.03 }}
    >
      <Card radius="none" isHoverable className="overflow-hidden h-full p-2">
        <CardBody className="p-0">
          <div className="relative">
            <Image
              removeWrapper
              alt={service.title}
              className="w-full h-60 object-cover  transition-transform duration-300 ease-in-out"
              src={service.image}
              radius="none"
              style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="absolute w-full h-fit overflow-hidden bg-black bg-opacity-30 b z-10 bottom-0 left-0 p-2  text-white "
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className=" text-2xl font-bold  ">{service.title}</h2>
            </motion.div>
          </div>
        </CardBody>
        <CardBody>
          <div className="flex items-start ">
            <p className="text-foreground-600">{service.description}</p>
          </div>
        </CardBody>
        <CardFooter>
          <Button
            className="w-full"
            color="primary"
            endContent={<ArrowRight />}
            variant="shadow"
            onPress={() => router.push(service.href)}
          >
            Learn More
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export const SingleFeature = ({ feature }: { feature: ServicesType }) => {
  const router = useRouter();
  const { icon, title, paragraph, href } = feature;

  return (
    <div className="relative w-full">
      {/* SVG Background */}
      <svg
        className="absolute inset-0 -z-10"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            height="30"
            id="dots"
            patternUnits="userSpaceOnUse"
            width="30"
          >
            <circle
              className="fill-gray-200 dark:fill-gray-700"
              cx="2"
              cy="2"
              r="1"
            />
          </pattern>
        </defs>
        <rect fill="url(#dots)" height="100%" width="100%" />
      </svg>

      {/* Card */}
      <Card className="w-full shadow-lg overflow-hidden">
        <CardBody className="p-6">
          <div className="wow fadeInUp" data-wow-delay=".15s">
            {/* Icon container */}
            <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary dark:bg-opacity-20">
              {icon}
            </div>

            {/* Title */}
            <h3 className="mb-5 text-xl font-bold sm:text-2xl lg:text-xl xl:text-2xl">
              {title}
            </h3>

            {/* Paragraph */}
            <p className="mb-6 text-base font-medium leading-relaxed">
              {paragraph}
            </p>

            {/* Action Button */}
            <div className="flex items-center justify-center">
              <Button className="w-full" onClick={() => router.push(href)}>
                Learn More
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
