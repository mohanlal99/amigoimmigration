"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@nextui-org/card";
import {
  GraduationCap,
  BookOpen,
  Award,
  Briefcase,
  Globe,
  CheckCircle,
  Plane,
} from "lucide-react";

const StudyAbroadPrograms = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  // Degree and Diploma Data
  const programs = [
    {
      title: "Bachelor of Hotel Management (BHM)",
      description:
        "A 3-4 year comprehensive degree covering hospitality, food production, marketing, and operations.",
      icon: GraduationCap,
    },
    {
      title: "Diploma in Food Production",
      description: "A short-term course specializing in culinary arts and kitchen management.",
      icon: BookOpen,
    },
    {
      title: "Diploma in Front Office",
      description: "Focuses on front desk operations, customer interactions, and hospitality skills.",
      icon: Briefcase,
    },
    {
      title: "Diploma in Housekeeping",
      description: "Learn to maintain cleanliness and provide world-class guest experiences.",
      icon: Award,
    },
    {
      title: "Master's in Hotel Management",
      description: "Advanced degree for leadership roles in global hospitality chains.",
      icon: Globe,
    },
    {
      title: "Master's in Food & Beverage Management",
      description: "Specialized program focusing on managing restaurants and catering services.",
      icon: CheckCircle,
    },
  ];

  // Steps to Study Abroad
  const stepsToAbroad = [
    "Choose a program that aligns with your career goals (BHM, diplomas, or master's degrees).",
    "Research universities or colleges offering these programs abroad.",
    "Prepare required documents: academic transcripts, English proficiency tests (IELTS/TOEFL), and a Statement of Purpose.",
    "Apply for the selected program and await acceptance.",
    "Secure funding: scholarships, educational loans, or personal funds.",
    "Apply for a student visa and book your travel tickets.",
  ];

  // Top Institutions for Hotel Management
  const topInstitutions = [
    "Les Roches International School of Hotel Management, Switzerland",
    "Cornell University School of Hotel Administration, USA",
    "Blue Mountains International Hotel Management School, Australia",
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

      {/* Degrees and Diplomas Section */}
      <div className="py-12 px-6 md:px-12">
        <motion.h2 className="text-3xl font-bold mb-6 text-center" {...fadeIn}>
          Degrees & Diplomas
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="bg-white text-black rounded-lg shadow-lg p-6"
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: index * 0.2 }}
            >
              <program.icon className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold">{program.title}</h3>
              <p className="mt-2">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* How to Study Abroad Section */}
      <div className="py-12 px-6 md:px-12 bg-indigo-800">
        <motion.h2 className="text-3xl font-bold mb-6 text-center" {...fadeIn}>
          How to Study Abroad
        </motion.h2>
        <motion.ol
          className="text-lg mb-6 space-y-4"
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.3 }}
        >
          {stepsToAbroad.map((step, index) => (
            <li key={index} className="flex items-start">
              <Plane className="h-6 w-6 text-green-400 mr-4" />
              {step}
            </li>
          ))}
        </motion.ol>
      </div>

      {/* Top Institutions Section */}
      <div className="py-12 px-6 md:px-12">
        <motion.h2 className="text-3xl font-bold mb-6 text-center" {...fadeIn}>
          Top Institutions for Hotel Management
        </motion.h2>
        <motion.div
          className="text-center text-lg"
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.6 }}
        >
          <ul className="list-disc list-inside">
            {topInstitutions.map((institution, index) => (
              <li key={index}>{institution}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default StudyAbroadPrograms;