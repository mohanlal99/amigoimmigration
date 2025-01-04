import { Card, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Amigo Immigration Services",
  description:
    "Review the Terms and Conditions for using Amigo Immigration Services. Learn about our services, payment terms, data privacy, and candidate guarantees.",
  keywords: [
    "terms and conditions",
    "Amigo Immigration terms",
    "immigration services policies",
    "candidate placement terms",
    "hospitality staffing terms",
    "data privacy policies",
    "visa consultancy terms",
    "recruitment terms and fees",
  ],
  openGraph: {
    title: "Terms and Conditions | Amigo Immigration Services",
    description:
      "Understand the policies and procedures for availing services from Amigo Immigration, including immigration consultancy, staffing, and data privacy.",
    siteName: "Amigo Immigration Services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions | Amigo Immigration",
    description:
      "Get detailed information on the terms and conditions for Amigo Immigration services, including hospitality staffing and visa consultancy.",
  },
};

const termsSections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using the Amigo Immigration Services website, you confirm that you agree to comply with these Terms and Conditions. If you do not agree, you may not access or use our services.",
  },
  {
    title: "2. Services Provided",
    content: `
      Amigo Immigration Services specializes in immigration consultancy, including hospitality staffing, internships, and guaranteed placement programs. Services are offered subject to compliance with eligibility criteria.`,
    list: [
      "Immigration services for hospitality internships in countries such as the USA, Australia, UAE, and France.",
      "Placement of Nepali, Himachali, and Uttarakhandi candidates in the hotel industry.",
      "Preparation of candidate documentation, including CVs, visas, and training records.",
    ],
  },
  {
    title: "3. Payment and Fees",
    content: `
      By availing of our services, you agree to the payment terms outlined in your contract. Recruitment charges include:`,
    list: [
      "8.50% of the candidate's annual CTC for hotel staffing services.",
      "Full payment of internship or placement program fees before confirmation.",
      "Non-refundable administrative charges.",
    ],
  },
  {
    title: "4. Candidate Replacement Guarantee",
    content: `
      We provide a 3-month guarantee for candidate replacement, subject to the following conditions:`,
    list: [
      "The request for replacement is made within 90 days of the candidate's joining date.",
      "The candidate leaves the job due to unforeseen circumstances or performance issues.",
      "No refund is provided; a replacement is offered instead.",
    ],
  },
  {
    title: "5. Employer Responsibilities",
    content:
      "Employers are required to provide accurate job descriptions, expected salaries, and other employment details during the recruitment process. Failure to provide accurate information may result in delays or termination of services.",
  },
  {
    title: "6. Data Privacy and Usage",
    content: `
      By using our website or services, you consent to the collection, processing, and storage of your personal information as outlined below:`,
    list: [
      "We collect personal information such as names, contact details, immigration status, and employment history when you apply for our services.",
      "Your personal data will be used solely for the purpose of providing you with immigration consultancy services, including visa applications, documentation preparation, and placement services.",
      "We will not sell, rent, or share your personal data with third parties without your consent, except as necessary to comply with legal obligations or to facilitate your services (e.g., submitting documents to immigration authorities).",
      "We employ industry-standard security measures to protect your data from unauthorized access, alteration, or destruction.",
      "You have the right to request access to, correction, or deletion of your personal information by contacting us at support@amigoimmigrant.com.",
    ],
  },
  {
    title: "7. Liability and Limitations",
    content: `
      Amigo Immigration Services is not responsible for the following:`,
    list: [
      "Decisions made by employers after hiring the candidates.",
      "Visa approvals or rejections by government authorities.",
      "Personal conduct or actions of hired candidates.",
    ],
  },
  {
    title: "8. Changes to Terms",
    content:
      "We reserve the right to modify these Terms and Conditions at any time. Changes will be communicated on our website and will take effect immediately upon posting.",
  },
  {
    title: "9. How to Contact Us",
    content: `
      Please <Link href="/contact">Contact Support</Link> if you have any questions or concerns not already addressed in this Privacy Policy.`,
  },
];

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
            {termsSections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-semibold">{section.title}</h2>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  {section.content}
                </p>
                {section.list && (
                  <ul className="list-disc pl-6 mt-4 text-gray-700">
                    {section.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
                <Divider />
              </div>
            ))}
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default TermsAndConditions;
