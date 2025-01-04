"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/react";
import {
  Globe,
  Users,
  Briefcase,
  Target,
  Award,
  BookOpen,
  Heart,
} from "lucide-react";

const WhoWeAre = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const features = [
    {
      icon: Globe,
      title: "Global Opportunities",
      description:
        "Paid internships across the USA, Europe, and other exciting destinations.",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description:
        "Seasoned experts matching students with career-aligned internships.",
    },
    {
      icon: Target,
      title: "Our Mission",
      description:
        "Opening doors for ambitious students, enhancing career prospects and personal growth.",
    },
  ];

  const values = [
    {
      icon: Briefcase,
      title: "Hard work and integrity",
      description:
        "We believe in the power of dedication and ethical practices.",
    },
    {
      icon: Award,
      title: "Real-world experience",
      description:
        "Providing opportunities that translate directly to career success.",
    },
    {
      icon: Heart,
      title: "Comprehensive support",
      description:
        "Guiding you every step of the way, from application to completion.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative  h-[25vh] md:h-[50vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 text-center">
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            Who We Are
          </motion.h1>
          <motion.p
            animate={{ opacity: 1 }}
            className="text-xl"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Your Trusted Partner in International Internships
          </motion.p>
        </div>
      </div>

      <div className="py-16 px-4">
        {/* Welcome Section */}
        <motion.div className="text-center mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-6">
            Welcome to Amigo Immigration Services
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            We are your trusted partner in securing valuable international
            internships. With a proven track record of success and a deep
            commitment to the achievements of our clients, Amigo Immigration
            Services stands out as a leader in the field.
          </p>
        </motion.div>

        {/* Features Section */}
        <motion.div className="mb-16" {...fadeIn}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-lg text-white"
              >
                <CardBody className="text-center">
                  <feature.icon className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p>{feature.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

        {/* International Internships Section */}
        <motion.div className="mb-16" {...fadeIn}>
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <CardBody className="text-center py-12">
              <BookOpen className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl font-semibold mb-4">
                International Internships
              </h2>
              <p className="text-lg mb-6">
                Trust us to be your guide and partner in navigating the path to
                international success. Our internships offer unparalleled
                experiences that enhance your career prospects and personal
                growth.
              </p>
              <Button
                as="a"
                className="font-semibold text-lg px-8 py-6 bg-white text-blue-600"
                color="primary"
                href="/internships"
                size="lg"
              >
                Explore Opportunities
              </Button>
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
          <h2 className="text-3xl font-semibold mb-6">Join Us Today</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Take the first step towards an enriching and rewarding internship
            experience! Let Amigo Immigration Services guide you on your journey
            to international success.
          </p>
          <Button
            as="a"
            className="font-semibold text-lg px-8 py-6"
            color="secondary"
            href="/apply"
            size="lg"
          >
            Apply Now
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default WhoWeAre;
