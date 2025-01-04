"use client";
import React from "react";
import { Link } from "@nextui-org/link";

const sections = [
  {
    title: "1. Information We Collect",
    content:
      "We collect the following information when you interact with our website, apply for programs, or use our services:",
    list: [
      "**Personal Information**: Name, email address, phone number, date of birth, and address provided in application forms.",
      "**Educational and Professional Details**: Educational qualifications, work experience, resumes, and certifications for placement or internships.",
      "**Payment Information**: Payment details, including billing information, required for program fees and services.",
      "**Usage Data**: Information about your interactions with our website, such as IP address, browser type, and pages visited.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: "We use the collected information for the following purposes:",
    list: [
      "To process your applications for internships, placements, or training programs.",
      "To communicate with you regarding your application status, interviews, or other updates.",
      "To prepare and submit required documents for visa applications, training records, and employer verifications.",
      "To improve our services, website functionality, and customer support.",
      "To comply with legal obligations and prevent fraud or misuse of our services.",
    ],
  },
  {
    title: "3. How We Protect Your Information",
    content:
      "We take the security of your information seriously. The following measures are implemented to safeguard your data:",
    list: [
      "Data encryption for sensitive information during transmission.",
      "Secure storage of personal and payment details on protected servers.",
      "Access controls to ensure only authorized personnel can view your data.",
    ],
  },
  {
    title: "4. Sharing Your Information",
    content:
      "We do not sell or rent your information to third parties. However, your information may be shared with:",
    list: [
      "Employers and training institutions as part of the application or placement process.",
      "Government authorities or visa agencies as required for visa or immigration processes.",
      "Service providers (e.g., payment processors, IT support) who assist in delivering our services.",
    ],
  },
  {
    title: "5. Your Rights",
    content: "You have the following rights regarding your personal data:",
    list: [
      "Access: Request details about the data we collect and process.",
      "Correction: Request corrections to inaccurate or incomplete information.",
      "Deletion: Request deletion of your personal data, subject to legal requirements.",
      "Opt-out: Withdraw consent for marketing communications at any time.",
    ],
  },
  {
    title: "6. Cookies and Tracking",
    content:
      "We use cookies and similar tracking technologies to enhance your browsing experience and analyze website performance. You can manage your cookie preferences through your browser settings.",
  },
  {
    title: "7. Changes to this Privacy Policy",
    content:
      "We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Updates will be posted on this page with a revised 'Last Updated' date.",
  },
  {
    title: "8. How to contact us",
    content: (
      <>
        Please <Link href="/contact">&nbsp;Contact Support&nbsp;</Link> if you
        have any questions or concerns not already addressed in this Privacy
        Policy.
      </>
    ),
  },
];

const PrivacyPolicy = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-lg mt-4 text-gray-700">
            Your privacy is important to us. This Privacy Policy explains how
            Amigo Immigration Services collects, uses, and protects your
            information.
          </p>
        </div>

        {/* Dynamic Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                {section.content}
              </p>
              {section.list && (
                <ul className="list-disc pl-6 mt-4 text-gray-700">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
