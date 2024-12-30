"use client";

import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Earth,
  Briefcase,
  CheckCircle,
  Star,
  Send,
  ChefHat,
  Flag,
  Verified,
  ForkKnife,
  LucideHousePlus,
  Plane,
} from "lucide-react";
import { Image } from "@nextui-org/image";

import HeroImage from "./images";

import { title } from "@/components/primitives";

const Hero = () => {
  const router = useRouter();

  const services = [
    {
      name: "Explore Cruise Ship Internships",
      href: "/internship/cruise",
      icon: "ship",
    },
    {
      name: "Hospitality Careers in the USA",
      href: "/internship/usa",
      icon: "flag",
    },
    {
      name: "Opportunities in Australia",
      href: "/internship/australia",
      icon: "flag",
    },
    { name: "Work in the UAE", href: "/internship/uae", icon: "flag" },
    {
      name: "Internship Programs in France",
      href: "/internship/france",
      icon: "flag",
    },
  ];

  const diplomas = [
    {
      name: "Diploma in Food Production",
      icon: ChefHat,
      href: "/services/diploma-programs#food-production",
    },
    {
      name: "Diploma in Food & Beverage Service",
      icon: ForkKnife,
      href: "/services/diploma-programs#food-beverage-service",
    },
    {
      name: "Diploma in Front Office",
      icon: Briefcase,
      href: "/services/diploma-programs#front-office",
    },
    {
      name: "Diploma in Housekeeping",
      icon: LucideHousePlus,
      href: "/services/diploma-programs#housekeeping",
    },
  ];
  const destinations = [
    { name: "USA", color: "text-blue-600" },
    { name: "UAE", color: "text-green-600" },
    { name: "France", color: "text-red-600" },
    { name: "Australia", color: "text-yellow-600" },
  ];

  return (
    <section className="relative container mx-auto z-10 overflow-hidden pt-6 px-4">
      <div className="absolute w-full inset-0 opacity-50 z-[-1]" />
      <svg
        className="absolute top-0 left-0 w-full h-64 -mt-3 z-[-1]"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,117.3C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          fill="#0099ff"
          fillOpacity="0.1"
        />
      </svg>

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 xl:grid-cols-2 items-center justify-between gap-12"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Side: Overview */}
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1
            className={`${title({ color: "cyan", size: "md" })} flex items-center justify-center gap-2`}
          >
            <Earth className="text-4xl text-primary" size={60} />
            Discover Global Hospitality Opportunities
          </h1>
          <motion.div
            animate={{ opacity: 1 }}
            className="text-md md:text-lg text-foreground-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Amigo Immigration Services connects talented individuals with
            exceptional career opportunities in the hospitality industry. We
            specialize in securing luxury hotel placements, cruise ship
            internships, and offering free job assistance across top
            destinations, including
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:mt-2 max-w-4xl mx-auto">
              {[
                "Internships in luxury hotels and cruise ships",
                "Diploma programs for 12th-pass students",
                "Guaranteed placements in top global destinations",
                "100% free job assistance for Indian Ocean regions",
                "Comprehensive visa and interview preparation",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg py-4"
                >
                  <CheckCircle className="text-green-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center text-[10px] sm:text-xl italic mt-12"
          >
            "Start your journey with us and transform your dreams into
            reality—because your career deserves the best opportunities!"
          </motion.blockquote> */}
          <Button
            className="shadow-lg hover:shadow-xl transition-all duration-300"
            color="primary"
            size="lg"
            startContent={<Send />}
            onPress={() => router.push("/apply")}
          >
            Apply Now & Build Your Global Career
          </Button>
        </motion.div>

        {/* Right Side: Services & Highlights */}
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col  gap-6"
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Briefcase className="text-3xl text-primary" />
            Explore Our Programs
          </h2>
          {/* <p className="text-lg text-foreground-700">
            Discover internships and career opportunities tailored to the
            hospitality industry. Whether you&lsquo;re interested in global
            placements or local Indian Ocean jobs, we have programs designed to
            elevate your career.
          </p> */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              "Exclusive internships in top destinations",
              "Guaranteed placements",
              "Free job assistance",
              "Specialized diploma courses",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2  rounded-lg p-4 shadow"
              >
                <Star className="text-yellow-500 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map((service, index) => (
              <Card
                isPressable
                onClick={() => router.push(service.href)}
                key={index}
                className=" bg-blue-200 bg-opacity-20"
                radius="none"
              >
                <CardBody className="flex text-blue-500 items-center gap-2 pb-0 ">
                  <Flag />{" "}
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                </CardBody>
              </Card>
            ))}
            <Link className="relative w-full sm:col-span-2" href="/apply">
              <Button
                className="w-full text-white font-bold"
                color="success"
                size="lg"
                startContent={<Verified className="text-xl" />}
              >
                Apply For India + Ocean Regions
              </Button>
              <motion.span
                animate={{ opacity: 1, y: 0 }}
                className=" text-red-500 text-xl font-bold font-serif absolute -top-7 right-2 animate-pulse rounded-md "
                initial={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Image
                  alt="free images"
                  className="h-14"
                  src="/images/free.png"
                />
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Diploma Section */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {diplomas.map((diploma) => (
          <Link
            key={diploma.name}
            className="cursor-pointer"
            href={diploma.href} // Use the href from the object
          >
            <Card className="rounded-lg shadow-lg bg-gradient-to-br from-cyan-100 dark:from-cyan-900 to-blue-50 dark:">
              <CardBody className="flex flex-col items-center justify-center text-center p-4 ">
                {/* Use the dynamic icon from the object */}
                <diploma.icon className="text-xl text-success mb-2" size={24} />
                <h3 className="text-lg font-bold">{diploma.name}</h3>
                <p className="text-sm text-foreground-500 mt-2">
                  Perfect for students looking to build their careers in
                  hospitality.
                </p>
              </CardBody>
            </Card>
          </Link>
        ))}
      </motion.div>

      {/* Image Gallery */}
      <HeroImage />
    </section>
  );
};

export default Hero;
