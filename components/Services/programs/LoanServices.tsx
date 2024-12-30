"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { CheckCircle, DollarSign, Briefcase, Plane } from "lucide-react";

const LoanServices = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const loanTypes = [
    {
      icon: DollarSign,
      title: "Education Loans",
      description:
        "Designed to cover tuition fees, study materials, accommodation, and other academic expenses, our loans are tailored to help you focus on achieving your educational goals.",
    },
    {
      icon: Briefcase,
      title: "Internship Loans",
      description:
        "Hospitality internships and work placements can be expensive. We provide funding to ensure you can participate in high-quality training programs that will enhance your skills and employability.",
    },
    {
      icon: Plane,
      title: "Visa Assistance Loans",
      description:
        "Immigration processes often require significant upfront costs, including visa fees, documentation, and travel expenses. Our visa-related loan options help ease the financial strain so you can focus on preparing for your move abroad.",
    },
  ];

  const benefits = [
    "Simplified Processes",
    "Flexible Repayment Options",
    "Expert Guidance",
    "Specialized for Hospitality",
  ];

  const countries = ["USA", "UAE", "Australia", "Russia", "France"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center bg-[url('https://res.cloudinary.com/dp2aacz0d/image/upload/v1735382351/photo-1554224155-8d04cb21cd6c_nngfm1.avif')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 text-center">
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            Loan Services
          </motion.h1>
          <motion.p
            animate={{ opacity: 1 }}
            className="text-xl"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Empowering Your Global Hospitality Journey
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        {/* Overview Section */}
        <motion.div className="text-center mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-6">Our Commitment</h2>
          <p className="text-lg max-w-3xl mx-auto">
            At Amigo Immigration Services, we are committed to empowering
            students in the hotel management field and related disciplines to
            achieve their dreams of studying, training, and working abroad.
          </p>
        </motion.div>

        {/* Loan Types */}
        <motion.div className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Our Loan Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loanTypes.map((loan, index) => (
              <Card
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-lg text-white"
              >
                <CardHeader className="flex gap-3">
                  <loan.icon className="w-8 h-8" />
                  <p className="text-xl font-semibold">{loan.title}</p>
                </CardHeader>
                <CardBody>
                  <p>{loan.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Why Choose Our Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4"
              >
                <CheckCircle className="w-6 h-6 mr-4 text-green-400" />
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Countries */}
        <motion.div className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Countries We Serve
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {countries.map((country, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-full px-6 py-2"
              >
                <p className="text-lg">{country}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoanServices;
