"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/react";
import {
  Users,
  CheckCircle,
  Clock,
  FileText,
  Globe,
  PhoneCall,
} from "lucide-react";

const EmployerServices = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const services = [
    {
      icon: Users,
      title: "Hotel Staff Recruitment",
      description:
        "We specialize in providing skilled and experienced hotel staff from regions like Nepal and Uttarakhand, ensuring your establishment runs smoothly.",
      features: [
        "Access to Nepali and Himachali staff trained for various hotel roles",
        "Staff includes positions in housekeeping, food and beverage service, and front office",
        "8.50% of the candidate's annual CTC as recruitment charges",
        "3-month replacement guarantee for all hired candidates",
      ],
    },
    {
      icon: Clock,
      title: "Streamlined Recruitment Process",
      description:
        "Our comprehensive recruitment process ensures you meet the best candidates for your team.",
      features: [
        "Final interviews are conducted and confirmed directly by the employer",
        "Zoom interview facilities are available for added convenience",
        "We prepare and handle candidate files, including CVs, work permits, and training records",
        "Customized screening process based on your specific requirements",
      ],
    },
    {
      icon: CheckCircle,
      title: "Guaranteed Quality and Support",
      description:
        "Our services are backed by a commitment to quality and reliability, ensuring satisfaction for both employers and candidates.",
      features: [
        "Three-month guarantee for free candidate replacement, if needed",
        "Comprehensive support during the hiring and onboarding process",
        "End-to-end responsibility for candidate file preparation and documentation",
        "Regular follow-ups to ensure smooth integration of new hires",
      ],
    },
  ];

  const additionalBenefits = [
    "Access to a wide pool of pre-screened candidates",
    "Reduced time-to-hire and cost-per-hire",
    "Compliance with local labor laws and regulations",
    "Ongoing support for employee retention strategies",
    "Cultural sensitivity training for seamless team integration",
    "Tailored solutions for seasonal staffing needs",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center bg-[url('https://res.cloudinary.com/dp2aacz0d/image/upload/v1735204647/happy-businessmen-greeting-his-colleagues-meeting-shaking-hands-with-one-them-office_637285-7013_kqykgm.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 text-center">
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            Employer Services
          </motion.h1>
          <motion.p
            animate={{ opacity: 1 }}
            className="text-xl"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Your Gateway to Skilled Hospitality Professionals
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        {/* Overview Section */}
        <motion.div className="text-center mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-6">
            Partner with Amigo Immigration Services
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Access skilled hotel staff, including Nepali and Himachali
            candidates, ensuring your workforce is diverse, reliable, and
            professional. Our comprehensive services are designed to meet the
            unique staffing needs of the hospitality industry.
          </p>
        </motion.div>

        {/* Services Section */}
        <motion.div className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <p className="mb-4">{service.description}</p>
                  <ul className="list-disc pl-5 space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex}>{feature}</li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Additional Benefits */}
        <motion.div className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Additional Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalBenefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4"
              >
                <CheckCircle className="w-6 h-6 mr-4 text-green-400 flex-shrink-0" />
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Why Choose Amigo Immigration Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white bg-opacity-10 backdrop-blur-lg text-white">
              <CardHeader className="flex gap-3">
                <Globe className="w-8 h-8" />
                <p className="text-xl font-semibold">Global Reach</p>
              </CardHeader>
              <CardBody>
                <p>
                  Access to a diverse pool of candidates from Nepal,
                  Uttarakhand, and other regions, bringing unique skills and
                  perspectives to your team.
                </p>
              </CardBody>
            </Card>
            <Card className="bg-white bg-opacity-10 backdrop-blur-lg text-white">
              <CardHeader className="flex gap-3">
                <FileText className="w-8 h-8" />
                <p className="text-xl font-semibold">Comprehensive Vetting</p>
              </CardHeader>
              <CardBody>
                <p>
                  Rigorous screening process ensuring only the most qualified
                  and dedicated professionals are presented to you.
                </p>
              </CardBody>
            </Card>
            <Card className="bg-white bg-opacity-10 backdrop-blur-lg text-white">
              <CardHeader className="flex gap-3">
                <Users className="w-8 h-8" />
                <p className="text-xl font-semibold">Industry Expertise</p>
              </CardHeader>
              <CardBody>
                <p>
                  Deep understanding of the hospitality sector, allowing us to
                  match the right talent with your specific needs and company
                  culture.
                </p>
              </CardBody>
            </Card>
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
            Ready to Expand Your Team?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover how Amigo Immigration Services can help you streamline your
            hiring process and grow your team with skilled hospitality
            professionals. Our expert team is ready to assist you in finding the
            perfect candidates for your establishment.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              as="a"
              className="font-semibold text-lg px-8 py-6"
              color="primary"
              href="/contact"
              size="lg"
              startContent={<PhoneCall />}
            >
              Contact Us Today
            </Button>
            <Button
              as="a"
              className="font-semibold text-lg px-8 py-6"
              color="secondary"
              href="/employer-resources"
              size="lg"
            >
              Employer Resources
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EmployerServices;
