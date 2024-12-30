import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Award, Briefcase, Globe, Shield, Users } from "lucide-react";
import React from "react";

// Type definition for SpecializationCard props
interface SpecializationCardProps {
  title: string;
  content: string;
  icon: React.ReactNode; // This can be any React element, like an icon component
}

const SpecializationCard: React.FC<SpecializationCardProps> = ({
  title,
  content,
  icon,
}) => (
  <Card className=" shadow-md">
    <CardHeader className="flex gap-3 p-5">
      {icon}
      <h2 className="text-xl font-semibold text-blue-900">{title}</h2>
    </CardHeader>
    <Divider />
    <CardBody className="p-5">
      <p className="">{content}</p>
    </CardBody>
  </Card>
);

const Specialization: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-blue-900">
          Our Specialization
        </h1>

        <Card className=" shadow-lg mb-8">
          <CardBody className=" grid md:grid-cols-2 grid-cols-1 items-center">
            <p className="text-lg leading-relaxed ">
              At{" "}
              <span className="font-semibold text-blue-700">
                Amigo Immigration Services
              </span>
              , we pride ourselves on being a leading provider of paid
              internship opportunities for students aspiring to gain invaluable
              international experience. Our specialization lies in seamlessly
              connecting ambitious students with prestigious internships in
              destinations such as the USA, Europe, and many more. We understand
              the profound impact that international internships can have on a
              students career and personal growth, and we are dedicated to
              facilitating these transformative experiences.
            </p>
            <div className="">
              <Image
                removeWrapper
                alt="International Internships"
                className="w-full h-full object-cover rounded-lg"
                height={300}
                src="https://res.cloudinary.com/dp2aacz0d/image/upload/v1732098787/1about_top-view-travel-_lqrdmf.jpg"
              />
            </div>
          </CardBody>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <SpecializationCard
            content="Our expert team brings together years of experience and a deep understanding of the global job market. We meticulously curate internship opportunities that align with the academic and professional goals of our clients, providing practical skills and exposure to diverse cultures and work environments."
            icon={<Globe className="w-6 h-6 text-blue-600" />}
            title="Expert Guidance"
          />
          <SpecializationCard
            content="We take a holistic approach to career consulting, considering the unique aspirations and strengths of each individual. By providing tailored guidance and support, we empower our clients to navigate the complexities of securing international internships with confidence and ease."
            icon={<Users className="w-6 h-6 text-blue-600" />}
            title="Personalized Approach"
          />
          <SpecializationCard
            content="Our comprehensive services include everything from personalized career consulting to meticulous application preparation, visa processing, and ongoing support throughout the internship period. We also offer cultural orientation programs, accommodation assistance, and ongoing mentoring."
            icon={<Briefcase className="w-6 h-6 text-blue-600" />}
            title="Comprehensive Services"
          />
          <SpecializationCard
            content="We stay abreast of the latest immigration policies and regulations, providing our clients with up-to-date information and advice. Our goal is to make the entire process as smooth and stress-free as possible, allowing students to focus on making the most of their international experiences."
            icon={<Shield className="w-6 h-6 text-blue-600" />}
            title="Risk Management & Compliance"
          />
        </div>

        <Card className=" shadow-lg">
          <CardHeader className="flex gap-3 p-5">
            <Award className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-blue-900">
              Our Commitment to Excellence
            </h2>
          </CardHeader>
          <Divider />
          <CardBody className="p-6">
            <p className=" mb-4">
              At Amigo Immigration Services, we recognize the importance of
              building trust and fostering lasting relationships with our
              clients. Our transparent and ethical practices ensure that
              students and their families feel confident in the decisions they
              make. We are dedicated to upholding the highest standards of
              professionalism and integrity in all our interactions.
            </p>
            <p className=" mb-4">
              The success stories of our clients are a testament to the quality
              of our services and our dedication to helping students achieve
              their dreams. We are proud to have played a role in shaping the
              careers of many bright and talented individuals.
            </p>
            <p className="text-lg text-blue-900 font-semibold">
              Join us at Amigo Immigration Services and let us help you unlock
              the door to unparalleled international opportunities. Our
              specialization in providing top-notch paid internships abroad
              ensures that you are equipped with the skills, experiences, and
              global perspectives needed to excel in your career.
            </p>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default Specialization;
