"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/react";
import {
  CheckCircle,
  Star,
  FileText,
  Globe,
  Briefcase,
  TrendingUp,
  BookOpen,
  MessageCircle,
  Award,
} from "lucide-react";

const PremiumServices = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const services = [
    {
      icon: FileText,
      title: "Professional CV Creation",
      description:
        "Tailored CV crafted by industry experts to highlight your strengths",
    },
    {
      icon: Globe,
      title: "Country-Specific Cover Letters",
      description:
        "Customized cover letters aligned with the job market demands of your target country",
    },
    {
      icon: TrendingUp,
      title: "12-Month Job Market Insights",
      description:
        "Access to up-to-date job market trends and opportunities in your field",
    },
    {
      icon: Briefcase,
      title: "Job Application Assistance",
      description: "Support in identifying and applying for suitable positions",
    },
    {
      icon: BookOpen,
      title: "Interview Preparation",
      description:
        "Mock interviews and tips to boost your confidence and performance",
    },
    {
      icon: MessageCircle,
      title: "24/7 Career Counseling",
      description:
        "Round-the-clock access to our career experts for guidance and advice",
    },
    {
      icon: Award,
      title: "Skills Assessment",
      description:
        "Comprehensive evaluation of your skills and areas for improvement",
    },
    {
      icon: Star,
      title: "LinkedIn Profile Optimization",
      description:
        "Expert enhancement of your LinkedIn profile to attract recruiters",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative h-[30vh] lg:h-[50vh] flex items-center justify-center bg-[url('https://res.cloudinary.com/dp2aacz0d/image/upload/v1734771311/photo-1507679799987-c73779587ccf_nqonzp.avif')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10 text-center">
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            Premium Career Services
          </motion.h1>
          <motion.p
            animate={{ opacity: 1 }}
            className="text-xl"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Elevate Your Career Prospects with Our Comprehensive Package
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        {/* Overview Section */}
        <motion.div className="text-center mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-6">
            Unlock Your Career Potential
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Our Premium Career Services package is designed to give you a
            competitive edge in the global job market. For just ₹4,999,
            you&#39;ll receive a suite of tailored services to boost your career
            prospects and land your dream job.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          {...fadeIn}
        >
          {services.map((service, index) => (
            <Card key={index} className="bg-indigo-800 text-white">
              <CardBody className="text-center">
                <service.icon className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </CardBody>
            </Card>
          ))}
        </motion.div>

        {/* Why Choose Us */}
        <motion.div className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Why Choose Our Premium Package?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-purple-800 text-white">
              <CardHeader className="text-xl font-semibold">
                Comprehensive Support
              </CardHeader>
              <CardBody>
                <ul className="list-none space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2" /> 360° career development
                    assistance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2" /> Tailored guidance for
                    international job markets
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2" /> Continuous support for 12
                    months
                  </li>
                </ul>
              </CardBody>
            </Card>
            <Card className="bg-purple-800 text-white">
              <CardHeader className="text-xl font-semibold">
                Expert Insights
              </CardHeader>
              <CardBody>
                <ul className="list-none space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2" /> Access to industry
                    professionals
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2" /> Up-to-date market trends
                    and analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2" /> Personalized career
                    strategy planning
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div className="mb-16" {...fadeIn}>
          <Card className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <CardBody className="text-center py-12">
              <h3 className="text-2xl font-semibold mb-4">
                This service transformed my job search!
              </h3>
              <p className="text-lg mb-6">
                With the premium package, I received invaluable guidance that
                helped me secure a position in my dream company abroad. The
                personalized support made all the difference.
              </p>
              <p className="font-semibold">
                - Priya S., Software Engineer placed in Germany
              </p>
            </CardBody>
          </Card>
        </motion.div>

        {/* Pricing and CTA */}
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6">Invest in Your Future</h2>
          <p className="text-3xl font-semibold mb-8">
            All-inclusive Premium Package:{" "}
            <span className="text-yellow-400">₹4,999</span>
          </p>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Unlock your potential and fast-track your career with our
            comprehensive premium services. Don&#39;t miss this opportunity to
            stand out in the competitive job market.
          </p>
          <Button
            as="a"
            className="font-semibold text-lg px-8 py-6"
            color="warning"
            href="/apply"
            size="lg"
          >
            Get Started Now
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default PremiumServices;
