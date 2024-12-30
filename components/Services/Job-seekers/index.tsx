"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/react";
import {
  ChefHat,
  Briefcase,
  Building,
  Coffee,
  CheckCircle,
  MapPin,
  Star,
  Clock,
  DollarSign,
} from "lucide-react";

const JobSeekers = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const jobRoles = [
    { icon: ChefHat, title: "Chef" },
    { icon: Briefcase, title: "Housekeeping" },
    { icon: Building, title: "Front Office" },
    { icon: Coffee, title: "Food & Beverage Service" },
  ];

  const benefits = [
    {
      icon: MapPin,
      title: "Prime Locations",
      description: "Work in top hotels across India and Indian Ocean countries",
    },
    {
      icon: Star,
      title: "Top-Rated Hotels",
      description: "Opportunities in 3, 4, and 5-star hotels",
    },
    {
      icon: DollarSign,
      title: "Free Services",
      description: "100% free job placement assistance",
    },
    {
      icon: Clock,
      title: "Quick Process",
      description: "Efficient placement process to start your career faster",
    },
  ];

  const process = [
    {
      title: "Apply",
      description:
        "Submit your application with your preferred job role and location preferences.",
    },
    {
      title: "Interview",
      description:
        "We'll prepare you for and schedule interviews with suitable hotels.",
    },
    {
      title: "Placement",
      description:
        "Once approved, receive your job offer and start your exciting new role!",
    },
  ];

  const progrmas = [
    {
      icon: Building,
      title: "Guaranteed Placement Programs",
      description:
        "Secure a job placement with our exclusive programs designed to give you the best start in the hospitality industry.",
    },
    {
      icon: Briefcase,
      title: "Premium Career Services",
      description:
        "Access top-notch career services including resume building, interview prep, and job matching with leading hotels.",
    },
    {
      icon: DollarSign,
      title: "Loan Services",
      description:
        "Get financial assistance with our loan services to cover travel and accommodation expenses.",
    },
    {
      icon: MapPin,
      title: "Explore Our Diploma Programs",
      description:
        "Enhance your qualifications with specialized diploma programs in hospitality management and related fields.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center bg-[url('https://res.cloudinary.com/dp2aacz0d/image/upload/v1735299245/handsome-men-black-suits-working-cafe_1157-45666_bk8ifg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 text-center">
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            Free Job Placement for Hospitality Professionals
          </motion.h1>
          <motion.p
            animate={{ opacity: 1 }}
            className="text-xl"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Your Gateway to Exciting Careers in Top Indian Hotels
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        {/* Overview Section */}
        <motion.div className="text-center mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-6">
            Launch Your Hospitality Career
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Amigo Immigration Services offers free, reliable job placement
            services in top Indian hotels. Whether you&lsquo;re starting your
            career or seeking to advance, we connect you with excellent
            opportunities across India and Indian Ocean countries.
          </p>
        </motion.div>

        {/* Job Opportunities Section */}
        <motion.div className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Job Opportunities in Indian Hotels
          </h2>
          <p className="text-lg text-center mb-8">
            Apply for jobs in 3, 4, and 5-star hotels across India with
            competitive salaries ranging from ₹15,000 to ₹20,000 per month, plus
            free accommodation and meals.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {jobRoles.map((role, index) => (
              <Card
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-lg text-white"
              >
                <CardBody className="flex flex-col items-center justify-center p-6">
                  <role.icon className="w-12 h-12 mb-4" />
                  <p className="text-xl font-semibold text-center">
                    {role.title}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Free Placement Services */}
        <motion.div className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-8 text-center">
            100% Free Placement Services
          </h2>
          <Card className="bg-white bg-opacity-10 backdrop-blur-lg text-white">
            <CardBody className="p-8">
              <p className="text-lg mb-6">
                Our job placement services are completely free for job seekers.
                We assist you throughout the process:
              </p>
              <ul className="list-none space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-4 text-green-400 flex-shrink-0 mt-1" />
                  <p>
                    Resume building and optimization for the hospitality
                    industry
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-4 text-green-400 flex-shrink-0 mt-1" />
                  <p>Interview preparation and mock interviews</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-4 text-green-400 flex-shrink-0 mt-1" />
                  <p>Job matching based on your skills and preferences</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-4 text-green-400 flex-shrink-0 mt-1" />
                  <p>Assistance with paperwork and onboarding process</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-4 text-green-400 flex-shrink-0 mt-1" />
                  <p>Post-placement support and career guidance</p>
                </li>
              </ul>
            </CardBody>
          </Card>
        </motion.div>

        {/* Benefits Section */}
        <motion.div className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Why Choose Our Job Placement Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-lg text-white"
              >
                <CardBody className="flex flex-col items-center justify-center p-6">
                  <benefit.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-center">
                    {benefit.title}
                  </h3>
                  <p className="text-center">{benefit.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-8 text-center">
            How It Works
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-center">
            {process.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center mb-8 md:mb-0"
              >
                <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-2xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-center max-w-xs">{step.description}</p>
              </div>
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
            Ready to Start Your Hospitality Career in India?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Take the first step towards your dream job in top Indian hotels. Our
            team is ready to guide you through the process and help you secure
            the perfect opportunity, completely free of charge.
          </p>
          <Button
            as="a"
            className="font-semibold text-lg px-8 py-6"
            color="primary"
            href="/apply-job-placement"
            size="lg"
          >
            Apply Now
          </Button>
        </motion.div>
      </div>
      <div className="flex gap-2 py-16 px-4">
        {progrmas.map((program, index) => (
          <Card
            key={index}
            className="bg-white bg-opacity-10 backdrop-blur-lg text-white"
          >
            <CardBody className="flex flex-col items-center justify-center p-6">
              <program.icon className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-center">
                {program.title}
              </h3>
              <p className="text-center">{program.description}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default JobSeekers;
