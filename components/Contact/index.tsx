"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  LinkedinIcon as LinkedIn,
  Instagram,
} from "lucide-react";

import ContactForm from "./ContactForm";

const Contact = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "Head Office: 0141-6655850\nMobile: +91 9887699703",
    },
    { icon: Mail, title: "Email", content: "info@amigoimmigrant.com" },
    {
      icon: MapPin,
      title: "Address",
      content: "G-FF-03, Capitol High Street Mall, Jagatpura, Jaipur.",
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Monday to Saturday, 10:00 AM to 6:00 PM",
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: LinkedIn, href: "#" },
    { icon: Instagram, href: "#" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center bg-[url('https://res.cloudinary.com/dp2aacz0d/image/upload/v1735976891/Screenshot_2025-01-04_131539_nhcmlb.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 text-center">
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            animate={{ opacity: 1 }}
            className="text-xl"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We re Here to Help You on Your Journey
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div {...fadeIn}>
            <h2 className="text-3xl font-semibold mb-8">Get in Touch</h2>
            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <item.icon className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="whitespace-pre-line">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    className="text-white hover:text-blue-300 transition-colors"
                    href={link.href}
                  >
                    <link.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div {...fadeIn}>
            <ContactForm />
          </motion.div>
        </div>

        {/* Map */}
        <motion.div className="mt-16" {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Find Us Here
          </h2>
          <div className="aspect-w-16 aspect-h-9">
            <motion.iframe
              allowFullScreen={true}
              className="rounded-lg"
              height="450"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1074.6428170744634!2d75.85834289648673!3d26.799343185167988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9d6f000be8f%3A0x96781e9898265140!2sRTech%20Capital%20Highstreet%20Jaipur!5e1!3m2!1sen!2sin!4v1731915749892!5m2!1sen!2sin"
              style={{ border: 0 }}
              title="Our Location"
              width="100%"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
