"use client";

import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { motion } from "framer-motion";
import { CheckCircle, FileText, Globe, Plane, UserPlus } from "lucide-react";

const steps = [
  {
    title: "Connect With Us",
    description:
      "Get in touch via our website or visit our office to start your application process.",
    icon: <UserPlus size={32} />,
  },
  {
    title: "Submit Documents",
    description:
      "Share your resume, certificates, and required details for verification.",
    icon: <FileText size={32} />,
  },
  {
    title: "Eligibility Assessment",
    description:
      "Our team will assess your profile to ensure you meet the program requirements.",
    icon: <CheckCircle size={32} />,
  },
  {
    title: "Attend Interview",
    description:
      "Participate in our scheduled interview to secure your placement.",
    icon: <Globe size={32} />,
  },
  {
    title: "Placement Abroad",
    description:
      "Once selected, begin your journey at top international hotels.",
    icon: <Plane size={32} />,
  },
];

const StartJourney = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Your Journey Starts Here
          </h2>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto">
            Follow these simple steps to embark on an exciting career abroad in
            the hospitality industry.
          </p>
        </motion.div>

        {/* Steps Wrapper */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-200 transform -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Card
                  isHoverable
                  className="shadow-xl border border-blue-100 bg-white h-full"
                >
                  <CardHeader className="flex flex-col items-center gap-4 p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                    <div className="bg-white text-blue-600 p-4 rounded-full shadow-lg">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-center">
                      Step {index + 1}
                    </h3>
                  </CardHeader>
                  <CardBody className="text-center p-6">
                    <h4 className="text-xl font-semibold mb-4 text-blue-900">
                      {step.title}
                    </h4>
                    <p className="text-gray-600">{step.description}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Button
            as="a"
            className="shadow-lg text-lg font-semibold px-10 py-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
            color="primary"
            href="/apply"
            radius="full"
            size="lg"
          >
            Start Your Journey Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default StartJourney;
