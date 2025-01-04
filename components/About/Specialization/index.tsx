"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/react";
import { Globe, Users, Briefcase, Shield, Award, Compass } from "lucide-react";

const Specialization = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const services = [
    {
      icon: Globe,
      title: "International Internships",
      description:
        "Connect with prestigious internships in the USA, Europe, and beyond",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description:
        "Benefit from our years of experience in the global job market",
    },
    {
      icon: Compass,
      title: "Personalized Approach",
      description:
        "Receive tailored guidance aligned with your unique aspirations",
    },
    {
      icon: Briefcase,
      title: "Comprehensive Services",
      description:
        "From application prep to ongoing support throughout your internship",
    },
    {
      icon: Shield,
      title: "Risk Management & Compliance",
      description:
        "Stay informed with up-to-date immigration policies and regulations",
    },
    {
      icon: Award,
      title: "Commitment to Excellence",
      description: "Trust in our transparent and ethical practices",
    },
  ];

  return (
    <div className="min-h-screen  bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative h-[25vh] md:h-[50vh] flex items-center justify-center bg-[url('https://res.cloudinary.com/dp2aacz0d/image/upload/v1735977217/employee-engagement-concept-illustration_114360-20413_tz1oox.avif')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 text-center">
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            Our Specialization
          </motion.h1>
          <motion.p
            animate={{ opacity: 1 }}
            className="text-xl"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Unlocking Global Opportunities Through International Internships
          </motion.p>
        </div>
      </div>

      <div className=" mx-auto py-16 px-4">
        {/* Overview Section */}
        <motion.div className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Empowering Your Global Career Journey
          </h2>
          <p className="text-lg max-w-4xl mx-auto text-center">
            At Amigo Immigration Services, we pride ourselves on being a leading
            provider of paid internship opportunities for students aspiring to
            gain invaluable international experience. Our specialization lies in
            seamlessly connecting ambitious students with prestigious
            internships in destinations such as the USA, Europe, and many more.
          </p>
          <p className="text-lg max-w-4xl mx-auto mt-4 text-center">
            We understand the profound impact that international internships can
            have on a student s career and personal growth, and we are dedicated
            to facilitating these transformative experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Detailed Sections */}
        <motion.div className="space-y-16" {...fadeIn}>
          <div>
            <h2 className="text-3xl font-semibold mb-4">Expert Guidance</h2>
            <p className="text-lg">
              Our expert team brings together years of experience and a deep
              understanding of the global job market. We meticulously curate
              internship opportunities that align with the academic and
              professional goals of our clients, providing practical skills and
              exposure to diverse cultures and work environments.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Personalized Approach
            </h2>
            <p className="text-lg">
              We take a holistic approach to career consulting, considering the
              unique aspirations and strengths of each individual. By providing
              tailored guidance and support, we empower our clients to navigate
              the complexities of securing international internships with
              confidence and ease.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Comprehensive Services
            </h2>
            <p className="text-lg">
              Our comprehensive services include everything from personalized
              career consulting to meticulous application preparation, visa
              processing, and ongoing support throughout the internship period.
              We also offer cultural orientation programs, accommodation
              assistance, and ongoing mentoring.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Risk Management & Compliance
            </h2>
            <p className="text-lg">
              We stay abreast of the latest immigration policies and
              regulations, providing our clients with up-to-date information and
              advice. Our goal is to make the entire process as smooth and
              stress-free as possible, allowing students to focus on making the
              most of their international experiences.
            </p>
          </div>
        </motion.div>

        {/* Commitment to Excellence */}
        <motion.div className="mt-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Our Commitment to Excellence
          </h2>
          <p className="text-lg max-w-4xl mx-auto text-center">
            At Amigo Immigration Services, we recognize the importance of
            building trust and fostering lasting relationships with our clients.
            Our transparent and ethical practices ensure that students and their
            families feel confident in the decisions they make. We are dedicated
            to upholding the highest standards of professionalism and integrity
            in all our interactions.
          </p>
          <p className="text-lg max-w-4xl mx-auto mt-4 text-center">
            The success stories of our clients are a testament to the quality of
            our services and our dedication to helping students achieve their
            dreams. We are proud to have played a role in shaping the careers of
            many bright and talented individuals.
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mt-16"
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-6">
            Join Us in Your Global Journey
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join us at Amigo Immigration Services and let us help you unlock the
            door to unparalleled international opportunities. Our specialization
            in providing top-notch paid internships abroad ensures that you are
            equipped with the skills, experiences, and global perspectives
            needed to excel in your career.
          </p>
          <Button
            as="a"
            className="font-semibold text-lg px-8 py-6"
            color="primary"
            href="/apply"
            size="lg"
          >
            Start Your International Journey
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Specialization;
