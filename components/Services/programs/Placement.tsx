"use client";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import {
  BriefcaseIcon,
  ClockIcon,
  DollarSignIcon,
  GlobeIcon,
  GoalIcon,
  GraduationCapIcon,
  HomeIcon,
  LightbulbIcon,
  MapPinIcon,
  ShieldCheckIcon,
  TimerIcon,
  UsersIcon,
} from "lucide-react";

const Placement = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative h-[30vh] lg:h-[50vh] flex items-center justify-center bg-[url('https://res.cloudinary.com/dp2aacz0d/image/upload/v1733227120/apply-backgroud_foztbf.avif')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 text-center">
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            Guaranteed Placement Programs
          </motion.h1>
          <motion.p
            animate={{ opacity: 1 }}
            className="text-md md:text-xl"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Your Gateway to a Global Hospitality Career
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        {/* Overview Section */}
        <motion.div className="text-center mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-6">
            Empowering Your Future in Hospitality
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Amigo Immigration Services offers guaranteed placement programs for
            aspiring hospitality professionals in India and Nepal. Our programs
            cater to individuals aged 17 to 35 years, providing unparalleled
            opportunities for growth and success in the dynamic world of
            hospitality.
          </p>
        </motion.div>

        {/* Program Details */}
        <motion.div className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Program Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-blue-800 text-white">
              <CardHeader className="text-xl font-semibold">
                $ Salary & Benefits
              </CardHeader>
              <CardBody>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Minimum salary: ₹12,000 to ₹20,000 INR</li>
                  <li>Accommodation and meals provided (employer-dependent)</li>
                  <li>Hostel facilities available when required</li>
                  <li>Guaranteed salary increase based on performance</li>
                  <li>Annual bonuses or tips (depending on the employer)</li>
                  <li>
                    Health insurance provided by employers (subject to location)
                  </li>
                </ul>
              </CardBody>
            </Card>
            <Card className="bg-blue-800 text-white">
              <CardHeader className="text-xl font-semibold flex gap-2">
                <TimerIcon /> Eligibility & Duration
              </CardHeader>
              <CardBody>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Age: 17 to 35 years</li>
                  <li>Abroad Paid internship duration: 9 to 12 months</li>
                  <li>Total program duration: 18 months minimum</li>
                  <li>
                    Basic knowledge of English (optional language courses
                    provided)
                  </li>
                  <li>
                    Prior experience in hospitality (preferred but not
                    mandatory)
                  </li>
                  <li>Visa assistance and work permits handled by us</li>
                </ul>
              </CardBody>
            </Card>
            <Card className="bg-blue-800 text-white">
              <CardHeader className="text-xl font-semibold flex gap-2">
                <GlobeIcon />
                Global Opportunities
              </CardHeader>
              <CardBody>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Guaranteed internships abroad</li>
                  <li>Countries: UAE, Australia, Europe, USA, Canada</li>
                  <li>Luxury cruise and shipping internships available</li>
                  <li>
                    Opportunities in 5-star hotels, resorts, and cruise lines
                  </li>
                  <li>Post-internship job placement assistance worldwide</li>
                  <li>
                    Exposure to global hospitality standards and practices
                  </li>
                  <li>
                    Networking opportunities with international hospitality
                    leaders
                  </li>
                </ul>
              </CardBody>
            </Card>
            <Card className="bg-blue-800 text-white">
              <CardHeader className="text-xl font-semibold flex gap-2">
                <GoalIcon />
                Additional Services
              </CardHeader>
              <CardBody>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Personalized career counseling and mentoring</li>
                  <li>
                    Soft skill development workshops (communication, teamwork,
                    leadership)
                  </li>
                  <li>Onboarding support and cultural adaptation training</li>
                  <li>Visa and immigration processing assistance</li>
                  <li>24/7 emergency support while abroad</li>
                  <li>
                    Post-internship job placement assistance in various
                    industries
                  </li>
                  <li>Access to alumni network for career advancement</li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </motion.div>

        {/* Additional Benefits */}
        <motion.div className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Program Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: GraduationCapIcon,
                title: "Recognized Diploma",
                description: "Awarded by NHMCT after program completion",
              },
              {
                icon: BriefcaseIcon,
                title: "Job Opportunities",
                description: "Eligible for government and central-level jobs",
              },
              {
                icon: MapPinIcon,
                title: "Relocation Support",
                description: "Assistance with relocation for internships",
              },
              {
                icon: DollarSignIcon,
                title: "Return on Investment",
                description: "Potential to earn 2x/4x/5x of education cost",
              },
              {
                icon: GlobeIcon,
                title: "Global Exposure",
                description:
                  "Work in international hospitality settings across UAE, Australia, Europe",
              },
              {
                icon: LightbulbIcon,
                title: "Career Growth & Mentorship",
                description:
                  "Guidance from industry experts to shape your career path",
              },
              {
                icon: ShieldCheckIcon,
                title: "Job Security",
                description:
                  "Guaranteed internship placement with potential for full-time roles",
              },
              {
                icon: UsersIcon,
                title: "Networking Opportunities",
                description:
                  "Connect with top hospitality leaders and alumni for career advancement",
              },
            ].map((benefit, index) => (
              <Card key={index} className="bg-indigo-800 text-white">
                <CardBody className="text-center">
                  <benefit.icon className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p>{benefit.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Program Journey */}
        <motion.div className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Your Journey to Success
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500" />
            {[
              {
                icon: GraduationCapIcon,
                title: "Enrollment",
                description:
                  "Join our program and embark on your exciting hospitality career journey with a clear roadmap to success.",
              },
              {
                icon: BriefcaseIcon,
                title: "Skill Development",
                description:
                  "Gain essential hospitality skills through our comprehensive curriculum, tailored to real-world industry demands.",
              },
              {
                icon: GlobeIcon,
                title: "International Internship",
                description:
                  "Work abroad in top hospitality destinations like UAE, Australia, and Europe, and gain invaluable hands-on experience.",
              },
              {
                icon: HomeIcon,
                title: "Return & Diploma",
                description:
                  "Upon completing the program, receive a recognized NHMCT diploma and a competitive edge in the global job market.",
              },
              {
                icon: ClockIcon,
                title: "Career Launch",
                description:
                  "Kickstart your career with placements in both government and private sector roles, ensuring stability and growth.",
              },
              {
                icon: UsersIcon,
                title: "Global Network",
                description:
                  "Connect with a network of industry professionals, alumni, and mentors to enhance your career prospects.",
              },
              {
                icon: BriefcaseIcon,
                title: "Placement Assistance",
                description:
                  "We provide dedicated placement support to help you secure rewarding job opportunities after program completion.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center mb-8`}
              >
                <div
                  className={`w-1/2 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}
                >
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center z-10 shadow-lg">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div className="w-1/2" />
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
            Start Your Hospitality Career Today
          </h2>
          <p className="text-xl mb-8">
            Whether you&#39;re entering the hospitality industry without prior
            experience or looking to advance your career, our program is
            designed to help you achieve your dreams of securing government jobs
            and international opportunities.
          </p>
          <Button
            as="a"
            className="font-semibold text-lg px-8 py-6"
            color="primary"
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

export default Placement;
