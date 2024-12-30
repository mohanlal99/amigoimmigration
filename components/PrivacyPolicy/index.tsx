"use client";
import { Link } from "@nextui-org/link";
import React from "react";

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

        {/* Content */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-semibold">
              1. Information We Collect
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We collect the following information when you interact with our
              website, apply for programs, or use our services:
            </p>
            <ul className="list-disc pl-6 mt-4 text-gray-700">
              <li>
                **Personal Information**: Name, email address, phone number,
                date of birth, and address provided in application forms.
              </li>
              <li>
                **Educational and Professional Details**: Educational
                qualifications, work experience, resumes, and certifications for
                placement or internships.
              </li>
              <li>
                **Payment Information**: Payment details, including billing
                information, required for program fees and services.
              </li>
              <li>
                **Usage Data**: Information about your interactions with our
                website, such as IP address, browser type, and pages visited.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-semibold">
              2. How We Use Your Information
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 mt-4 text-gray-700">
              <li>
                To process your applications for internships, placements, or
                training programs.
              </li>
              <li>
                To communicate with you regarding your application status,
                interviews, or other updates.
              </li>
              <li>
                To prepare and submit required documents for visa applications,
                training records, and employer verifications.
              </li>
              <li>
                To improve our services, website functionality, and customer
                support.
              </li>
              <li>
                To comply with legal obligations and prevent fraud or misuse of
                our services.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-semibold">
              3. How We Protect Your Information
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We take the security of your information seriously. The following
              measures are implemented to safeguard your data:
            </p>
            <ul className="list-disc pl-6 mt-4 text-gray-700">
              <li>
                Data encryption for sensitive information during transmission.
              </li>
              <li>
                Secure storage of personal and payment details on protected
                servers.
              </li>
              <li>
                Access controls to ensure only authorized personnel can view
                your data.
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-semibold">
              4. Sharing Your Information
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We do not sell or rent your information to third parties. However,
              your information may be shared with:
            </p>
            <ul className="list-disc pl-6 mt-4 text-gray-700">
              <li>
                Employers and training institutions as part of the application
                or placement process.
              </li>
              <li>
                Government authorities or visa agencies as required for visa or
                immigration processes.
              </li>
              <li>
                Service providers (e.g., payment processors, IT support) who
                assist in delivering our services.
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-semibold">5. Your Rights</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              You have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 mt-4 text-gray-700">
              <li>
                Access: Request details about the data we collect and process.
              </li>
              <li>
                Correction: Request corrections to inaccurate or incomplete
                information.
              </li>
              <li>
                Deletion: Request deletion of your personal data, subject to
                legal requirements.
              </li>
              <li>
                Opt-out: Withdraw consent for marketing communications at any
                time.
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-semibold">6. Cookies and Tracking</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We use cookies and similar tracking technologies to enhance your
              browsing experience and analyze website performance. You can
              manage your cookie preferences through your browser settings.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-semibold">
              7. Changes to this Privacy Policy
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes
              in our practices or legal requirements. Updates will be posted on
              this page with a revised &lsquo;Last Updated&lsquo; date.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-2xl font-semibold">8. How to contact us</h2>
            Please
            <Link href="/contact">&nbsp; Contact Support &nbsp;</Link>
            if you have any questions or concerns not already addressed in this
            Privacy Policy.
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
