"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import {
  GraduationCap,
  BookOpen,
  Award,
  Briefcase,
  Globe,
  CheckCircle,
  DollarSign,
  Plane,
} from "lucide-react";

const StudyAbroadPrograms = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const programs = [
    {
      icon: GraduationCap,
      title: "Undergraduate Programs",
      description:
        "Bachelor's degree programs offered by universities abroad, typically lasting 3–4 years.",
      forWho:
        "Students who have completed their 12th grade and wish to pursue their higher education abroad.",
      destinations: [
        {
          country: "USA",
          details:
            "Renowned for its diverse range of courses and student-centric education.",
        },
        {
          country: "Australia",
          details: "Known for hospitality and tourism programs.",
        },
        {
          country: "France",
          details:
            "Ideal for students looking for culinary arts and luxury brand management.",
        },
      ],
      benefits: [
        "Earn a globally recognized degree",
        "Build strong industry connections and practical knowledge through internships",
        "Gain early exposure to international cultures and lifestyles",
      ],
    },
    {
      icon: BookOpen,
      title: "Postgraduate Programs (Master's Degrees)",
      description:
        "Advanced degree programs focusing on specialization in a chosen field, typically lasting 1–2 years.",
      forWho:
        "Graduates aiming to deepen their expertise or shift to a new career domain.",
      destinations: [
        {
          country: "USA",
          details:
            "Masters in Management (MIM), MBA, or Hospitality Management.",
        },
        {
          country: "Australia",
          details:
            "Postgraduate programs in event management and hotel administration.",
        },
        {
          country: "Russia",
          details:
            "Affordable Master's degrees in engineering, business, or hospitality.",
        },
      ],
      benefits: [
        "Specialize in a niche field with advanced learning",
        "Access high-paying job opportunities globally",
        "Develop industry-specific skills through internships or research projects",
      ],
    },
    {
      icon: Award,
      title: "Diploma & Certification Courses",
      description:
        "Short-term programs (6 months to 2 years) focusing on practical and technical skills.",
      forWho:
        "Students who want a quicker and more affordable way to start their international career.",
      destinations: [
        {
          country: "Canada",
          details:
            "Diploma courses in culinary arts and business administration.",
        },
        {
          country: "UAE",
          details:
            "Certification programs for luxury hospitality and event management.",
        },
        {
          country: "Australia",
          details: "Technical and vocational diplomas in tourism and catering.",
        },
      ],
      benefits: [
        "Shorter duration and lower cost compared to degree programs",
        "Highly practical and job-oriented",
        "Ideal for students who want to enter the workforce quickly",
      ],
    },
    {
      icon: Briefcase,
      title: "Internship and Apprenticeship Programs",
      description:
        "Hands-on training programs in collaboration with global companies and institutions.",
      forWho:
        "Students in hospitality and hotel management who want real-world experience while earning.",
      destinations: [
        {
          country: "USA",
          details: "Paid internships with leading hotel chains.",
        },
        {
          country: "France",
          details: "Apprenticeships in luxury hospitality and culinary arts.",
        },
        {
          country: "UAE",
          details: "Internships with world-renowned hotels and resorts.",
        },
      ],
      benefits: [
        "Earn while you learn",
        "Build valuable international work experience",
        "Improve chances of landing a full-time job in your field",
      ],
    },
  ];

  const services = [
    {
      icon: Globe,
      title: "Personalized Counseling",
      description: "Select the right program for your career goals",
    },
    {
      icon: CheckCircle,
      title: "University Selection",
      description: "Tailored to your interests and qualifications",
    },
    {
      icon: DollarSign,
      title: "Financial Planning",
      description: "Assistance with education loans and budgeting",
    },
    {
      icon: Plane,
      title: "Visa Guidance",
      description: "Ensure a smooth application process",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative h-[25vh] md:h-[50vh] flex items-center justify-center bg-[url('https://res.cloudinary.com/dp2aacz0d/image/upload/v1735387564/photo-1523050854058-8df90110c9f1_qfychr.avif')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 text-center">
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            Study Abroad Programs
          </motion.h1>
          <motion.p
            animate={{ opacity: 1 }}
            className="text-xl"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Unlock Boundless Opportunities to Build Your Future
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        {/* Overview Section */}
        <motion.div className="text-center mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-6">
            Your Gateway to Global Success
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            At Amigo Immigration, we guide aspiring students toward global
            success by offering tailored solutions for studying abroad. We
            specialize in providing support for students in hotel management,
            hospitality, and other fields to find the right study program in
            their dream destination.
          </p>
        </motion.div>

        {/* Programs Section */}
        <motion.div className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Types of Study Programs for Students Going Abroad
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-lg text-white"
                shadow="none"
              >
                <CardHeader className="flex gap-3">
                  <program.icon className="w-8 h-8" />
                  <p className="text-xl font-semibold">{program.title}</p>
                </CardHeader>
                <CardBody>
                  <p className="mb-4">
                    <strong>What It Is:</strong> {program.description}
                  </p>
                  <p className="mb-4">
                    <strong>Who Is It For:</strong> {program.forWho}
                  </p>
                  <div className="mb-4">
                    <strong>Popular Destinations:</strong>
                    <ul className="list-disc pl-5 mt-2">
                      {program.destinations.map((dest, dIndex) => (
                        <li key={dIndex}>
                          <strong>{dest.country}:</strong> {dest.details}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <strong>Benefits:</strong>
                    <ul className="list-disc pl-5 mt-2">
                      {program.benefits.map((benefit, bIndex) => (
                        <li key={bIndex}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-8 text-center">
            What We Offer
          </h2>
          <p className="text-lg text-center mb-8">
            At Amigo Immigration, we provide a complete range of services for
            every type of study program:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Testimonial */}
      </div>
    </div>
  );
};

export default StudyAbroadPrograms;
