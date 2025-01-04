"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/react";
import {
  Globe,
  Users,
  FileText,
  Briefcase,
  Heart,
  Star,
  Award,
  BookOpen,
} from "lucide-react";

const AboutUs = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const services = [
    {
      icon: BookOpen,
      title: "Study Abroad Consulting",
      description: "Expert guidance for international education opportunities",
    },
    {
      icon: Briefcase,
      title: "Hospitality Placements",
      description:
        "Connecting talent with top-tier hospitality positions globally",
    },
    {
      icon: FileText,
      title: "Visa Assistance",
      description:
        "Streamlined visa application process for hassle-free travel",
    },
    {
      icon: Globe,
      title: "Cultural Preparation",
      description: "Comprehensive support for smooth cultural transitions",
    },
  ];

  const values = [
    {
      icon: Star,
      title: "Excellence",
      description: "Striving for the highest standards in all we do",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Driven by our love for helping people achieve their goals",
    },
    {
      icon: Users,
      title: "Diversity",
      description: "Celebrating and embracing multiculturalism",
    },
    {
      icon: Award,
      title: "Empathy",
      description: "Understanding and supporting every client's unique journey",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative h-[25vh] md:h-[50vh] flex items-center justify-center bg-[url('https://res.cloudinary.com/dp2aacz0d/image/upload/v1732098787/0rathaskarsuite_2024_rfotef.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 text-center">
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            About Amigo Immigration Services
          </motion.h1>
          <motion.p
            animate={{ opacity: 1 }}
            className="text-xl"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Empowering Dreams. Building Global Careers.
          </motion.p>
        </div>
      </div>

      <div className="py-16 px-4">
        {/* Our Journey Section */}
        <motion.div className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Our Journey
          </h2>
          <p className="text-lg max-w-4xl mx-auto text-center">
            At Amigo Immigration Services, we specialize in providing tailored
            immigration solutions for students and professionals aspiring to
            build careers in the global hospitality industry. With a focus on
            hotel management studies, we understand the unique challenges faced
            by aspiring hospitality professionals and offer expert guidance
            through every step of the immigration process—be it studying abroad,
            securing internships, or starting careers in leading international
            hotels and resorts.
          </p>
          <p className="text-lg max-w-4xl mx-auto mt-4 text-center">
            Our mission is to simplify the path to success by providing
            personalized services that open doors to education and career
            opportunities worldwide. Trusted by students and professionals
            alike, we are dedicated to helping you achieve your global
            aspirations in hospitality.
          </p>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Global Expertise",
                description:
                  "Providing immigration and career consulting services for five major countries",
              },
              {
                title: "Hospitality Specialists",
                description:
                  "Tailored services for students and professionals in the hospitality industry",
              },
              {
                title: "Seamless Process",
                description:
                  "From documentation to placement, we ensure a hassle-free experience",
              },
              {
                title: "Client-Centric Approach",
                description:
                  "Personalized support to meet individual goals and aspirations",
              },
              {
                title: "Proven Track Record",
                description:
                  "Helping clients successfully transition to international careers since our inception",
              },
              {
                title: "Dedicated Support",
                description:
                  "A committed team guiding every step of the journey",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-lg text-white"
              >
                <CardBody>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Our Services Section */}
        <motion.div className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-lg text-white"
              >
                <CardBody className="text-center">
                  <service.icon className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p>{service.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Our Mission Section */}
        <motion.div className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Our Mission
          </h2>
          <p className="text-lg max-w-4xl mx-auto text-center">
            At Amigo Immigration Services, our mission is to empower individuals
            to follow their dreams and unlock their global potential. We are
            committed to:
          </p>
          <ul className="list-disc pl-5 max-w-2xl mx-auto mt-4">
            <li className="text-lg mb-2">
              Delivering high-quality, personalized immigration services.
            </li>
            <li className="text-lg mb-2">
              Enabling access to top international opportunities.
            </li>
            <li className="text-lg">
              Supporting our clients success with integrity, passion, and
              professionalism.
            </li>
          </ul>
        </motion.div>

        {/* Our Values Section */}
        <motion.div className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-lg text-white"
              >
                <CardBody className="text-center">
                  <value.icon className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p>{value.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-6">
            Let s Build Your Future Together
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            At Amigo Immigration Services, we are not just about helping people
            relocate; we are about transforming lives and creating meaningful
            opportunities. Join us, and let s pave the path to your success
            abroad!
          </p>
          <Button
            as="a"
            className="font-semibold text-lg px-8 py-6"
            color="primary"
            href="/contact"
            size="lg"
          >
            Start Your Journey
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
