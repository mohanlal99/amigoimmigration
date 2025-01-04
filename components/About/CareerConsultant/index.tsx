"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/react";
import {
  Briefcase,
  Globe,
  Users,
  TrendingUp,
  BookOpen,
  Lightbulb,
  Network,
  UserPlus,
  CheckCircle,
} from "lucide-react";

const CareerConsultant = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const services = [
    {
      icon: Briefcase,
      title: "Personalized Career Guidance",
      description:
        "Our seasoned consultants work closely with you to match your skills and aspirations with the best internship opportunities, ensuring your career goals are met.",
    },
    {
      icon: Users,
      title: "Comprehensive Support",
      description:
        "From application preparation to visa procedures, we provide end-to-end support for a seamless and stress-free internship experience.",
    },
    {
      icon: Globe,
      title: "Global Opportunities",
      description:
        "As a premier provider of paid internships in prestigious destinations such as the USA, Europe, and many other countries, we open doors to valuable opportunities worldwide.",
    },
    {
      icon: TrendingUp,
      title: "Our Commitment",
      description:
        "We are dedicated to equipping you with the tools, skills, and experiences needed to excel in the global job market and achieve greatness.",
    },
  ];

  const approaches = [
    {
      icon: BookOpen,
      title: "Practical Skills Development",
      description:
        "Gain hands-on experience and develop industry-specific skills that are crucial for your future career success.",
    },
    {
      icon: Lightbulb,
      title: "Industry Knowledge",
      description:
        "Immerse yourself in your chosen field, learning from professionals and gaining insights into industry trends and practices.",
    },
    {
      icon: Network,
      title: "Networking Opportunities",
      description:
        "Build valuable connections with industry professionals and fellow interns, expanding your professional network.",
    },
    {
      icon: UserPlus,
      title: "Personal Growth",
      description:
        "Develop soft skills, cultural awareness, and adaptability through international experiences and challenges.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative h-[25vh] md:h-[50vh] flex items-center justify-center bg-[url('https://res.cloudinary.com/dp2aacz0d/image/upload/v1735979035/female-staff-scanning-boarding-pass-with-mobile-phone_107420-85086_bydwld.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 text-center">
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            Career Consultant
          </motion.h1>
          <motion.p
            animate={{ opacity: 1 }}
            className="text-xl"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Guiding You Towards Professional Excellence
          </motion.p>
        </div>
      </div>

      <div className="py-16 px-4">
        {/* Overview Section */}
        <motion.div className=" text-center mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-6">
            Your Path to Success Starts Here
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            At Amigo Immigration Services, we understand that the journey to
            building a successful career is both exciting and challenging. Our
            mission is to serve as your dedicated career consultants, guiding
            you through every step of the process with expertise and
            personalized support.
          </p>
        </motion.div>

        {/* Services Section */}
        <motion.div className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-lg text-white"
              >
                <CardHeader className="flex gap-3">
                  <service.icon className="w-8 h-8" />
                  <p className="text-xl font-semibold">{service.title}</p>
                </CardHeader>
                <CardBody>
                  <p>{service.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Building Trust Section */}
        <motion.div className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Building Trust and Fostering Growth
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Real-world professional experience",
              "Tailored internship opportunities",
              "Ongoing support and guidance",
              "Career advancement strategies",
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-lg text-white"
              >
                <CardBody className="text-center">
                  <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-lg font-semibold">{item}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Our Approach Section */}
        <motion.div className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Our Holistic Approach
          </h2>
          <p className="text-lg text-center mb-8">
            We believe in providing a comprehensive career development
            experience that goes beyond just finding an internship.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approaches.map((approach, index) => (
              <Card
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-lg text-white"
              >
                <CardHeader className="flex gap-3">
                  <approach.icon className="w-8 h-8" />
                  <p className="text-xl font-semibold">{approach.title}</p>
                </CardHeader>
                <CardBody>
                  <p>{approach.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div className="mb-16" {...fadeIn}>
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <CardBody className="text-center py-12">
              <h3 className="text-2xl font-semibold mb-4">
                Amigo Immigration Services transformed my career path
              </h3>
              <p className="text-lg mb-6">
                Their personalized guidance and global opportunities helped me
                secure an internship that kickstarted my international career. I
                m forever grateful for their support and expertise
              </p>
              <p className="font-semibold">
                - Priya M., Hotel Management Professional
              </p>
            </CardBody>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-6">
            Start Your Journey to Success
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our dedication to excellence is reflected in the success stories of
            countless students who have achieved their dreams through our
            guidance. We take pride in fostering lasting relationships with our
            clients, built on trust, transparency, and mutual respect.
          </p>
          <p className="text-xl mb-8">
            Trust us to guide you towards a future filled with promise and
            opportunity. Join Amigo Immigration Services today!
          </p>
          <Button
            as="a"
            className="font-semibold text-lg px-8 py-6"
            color="primary"
            href="/contact"
            size="lg"
          >
            Schedule a Consultation
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default CareerConsultant;
