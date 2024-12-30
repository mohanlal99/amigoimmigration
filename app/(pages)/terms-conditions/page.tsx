"use client";
import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/react";

const TermsAndConditions = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold">Terms and Conditions</h1>
          <p className="text-lg mt-4 text-gray-700">
            Please read these Terms and Conditions carefully before using our
            services. By accessing or using our website, you agree to be bound
            by these terms.
          </p>
        </div>

        {/* Content */}
        <Card className="shadow-lg">
          <CardBody className="p-6 space-y-8">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                By accessing or using the Amigo Immigration Services website,
                you confirm that you agree to comply with these Terms and
                Conditions. If you do not agree, you may not access or use our
                services.
              </p>
            </div>
            <Divider />
            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-semibold">2. Services Provided</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Amigo Immigration Services specializes in immigration
                consultancy, including hospitality staffing, internships, and
                guaranteed placement programs. Services are offered subject to
                compliance with eligibility criteria, including:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-700">
                <li>
                  Immigration services for hospitality internships in countries
                  such as the USA, Australia, UAE, and France.
                </li>
                <li>
                  Placement of Nepali, Himachali, and Uttarakhandi candidates in
                  the hotel industry.
                </li>
                <li>
                  Preparation of candidate documentation, including CVs, visas,
                  and training records.
                </li>
              </ul>
            </div>
            <Divider />
            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-semibold">3. Payment and Fees</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                By availing of our services, you agree to the payment terms
                outlined in your contract. Recruitment charges include:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-700">
                <li>
                  8.50% of the candidate&lsquo;s annual CTC for hotel staffing
                  services.
                </li>
                <li>
                  Full payment of internship or placement program fees before
                  confirmation.
                </li>
                <li>Non-refundable administrative charges.</li>
              </ul>
            </div>
            <Divider />
            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-semibold">
                4. Candidate Replacement Guarantee
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                We provide a 3-month guarantee for candidate replacement,
                subject to the following conditions:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-700">
                <li>
                  The request for replacement is made within 90 days of the
                  candidate&lsquo;s joining date.
                </li>
                <li>
                  The candidate leaves the job due to unforeseen circumstances
                  or performance issues.
                </li>
                <li>
                  No refund is provided; a replacement is offered instead.
                </li>
              </ul>
            </div>
            <Divider />
            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-semibold">
                5. Employer Responsibilities
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Employers are required to provide accurate job descriptions,
                expected salaries, and other employment details during the
                recruitment process. Failure to provide accurate information may
                result in delays or termination of services.
              </p>
            </div>
            <Divider />
            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-semibold">
                6. Data Privacy and Usage
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                By using our website or services, you consent to the collection,
                processing, and storage of your personal information as outlined
                below:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-700">
                <li>
                  We collect personal information such as names, contact
                  details, immigration status, and employment history when you
                  apply for our services.
                </li>
                <li>
                  Your personal data will be used solely for the purpose of
                  providing you with immigration consultancy services, including
                  visa applications, documentation preparation, and placement
                  services.
                </li>
                <li>
                  We will not sell, rent, or share your personal data with third
                  parties without your consent, except as necessary to comply
                  with legal obligations or to facilitate your services (e.g.,
                  submitting documents to immigration authorities).
                </li>
                <li>
                  We employ industry-standard security measures to protect your
                  data from unauthorized access, alteration, or destruction.
                </li>
                <li>
                  You have the right to request access to, correction, or
                  deletion of your personal information by contacting us at
                  support@amigoimmigrant.com.
                </li>
              </ul>
            </div>
            <Divider />
            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-semibold">
                7. Liability and Limitations
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Amigo Immigration Services is not responsible for the following:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-700">
                <li>
                  Decisions made by employers after hiring the candidates.
                </li>
                <li>Visa approvals or rejections by government authorities.</li>
                <li>Personal conduct or actions of hired candidates.</li>
              </ul>
            </div>
            <Divider />
            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-semibold">8. Changes to Terms</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms and Conditions at any
                time. Changes will be communicated on our website and will take
                effect immediately upon posting.
              </p>
            </div>
            <Divider />
            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-semibold">9. How to contact us</h2>
              Please
              <Link href="/contact">&nbsp; Contact Support &nbsp;</Link>
              if you have any questions or concerns not already addressed in
              this Privacy Policy.
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default TermsAndConditions;
