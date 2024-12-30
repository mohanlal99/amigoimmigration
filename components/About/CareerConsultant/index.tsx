import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Award, BookOpen, Briefcase, Globe, Target, Users } from "lucide-react";

const CareerConsultant = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 ">
          Career Consultant
        </h1>
        <p className="text-xl leading-relaxed text-center max-w-3xl mx-auto mb-12 ">
          At Amigo Immigration Services, we understand that the journey to
          building a successful career is both exciting and challenging. Our
          mission is to serve as your dedicated career consultants, guiding you
          through every step of the process with expertise and personalized
          support.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className=" shadow-lg">
            <CardBody className="p-6">
              <Briefcase className="w-12 h-12  mb-4" />
              <h2 className="text-2xl font-semibold mb-4 ">
                Personalized Career Guidance
              </h2>
              <p className="">
                Our seasoned consultants work closely with you to match your
                skills and aspirations with the best internship opportunities,
                ensuring your career goals are met.
              </p>
            </CardBody>
          </Card>
          <Card className=" shadow-lg">
            <CardBody className="p-6">
              <Users className="w-12 h-12  mb-4" />
              <h2 className="text-2xl font-semibold mb-4 ">
                Comprehensive Support
              </h2>
              <p className="">
                From application preparation to visa procedures, we provide
                end-to-end support for a seamless and stress-free internship
                experience.
              </p>
            </CardBody>
          </Card>
          <Card className=" shadow-lg">
            <CardBody className="p-6">
              <Globe className="w-12 h-12  mb-4" />
              <h2 className="text-2xl font-semibold mb-4 ">
                Global Opportunities
              </h2>
              <p className="">
                As a premier provider of paid internships in prestigious
                destinations such as the USA, Europe, and many other countries,
                we open doors to valuable opportunities worldwide.
              </p>
            </CardBody>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className=" shadow-lg rounded-lg overflow-hidden">
            <CardBody className="p-6 md:p-8">
              <h2 className="text-3xl font-bold mb-4 ">Our Commitment</h2>
              <p className=" mb-4">
                We are dedicated to equipping you with the tools, skills, and
                experiences needed to excel in the global job market and achieve
                greatness.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center ">
                  <Award className="w-5 h-5 mr-2 " />
                  Building trust and fostering growth
                </li>
                <li className="flex items-center ">
                  <BookOpen className="w-5 h-5 mr-2 " />
                  Real-world professional experience
                </li>
                <li className="flex items-center ">
                  <Target className="w-5 h-5 mr-2 " />
                  Tailored internship opportunities
                </li>
                <li className="flex items-center ">
                  <Users className="w-5 h-5 mr-2 " />
                  Ongoing support and guidance
                </li>
              </ul>
            </CardBody>
          </Card>

          <Card className=" shadow-lg rounded-lg overflow-hidden">
            <CardBody className="p-6">
              <Image
                removeWrapper
                alt="Career Guidance"
                className="w-full h-full object-cover rounded-lg"
                height={280}
                src="https://res.cloudinary.com/dp2aacz0d/image/upload/v1732098786/business-people-_ti4zyx.jpg"
              />
            </CardBody>
          </Card>
        </div>

        <Card className=" shadow-lg rounded-lg overflow-hidden mb-12">
          <CardBody className="p-6 md:p-8">
            <h2 className="text-3xl font-bold mb-4  text-center">
              Our Holistic Approach
            </h2>
            <p className=" mb-6 text-center">
              We believe in providing a comprehensive career development
              experience that goes beyond just finding an internship.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 ">
                  Practical Skills Development
                </h3>
                <p className="">
                  Gain hands-on experience and develop industry-specific skills
                  that are crucial for your future career success.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 ">
                  Industry Knowledge
                </h3>
                <p className="">
                  Immerse yourself in your chosen field, learning from
                  professionals and gaining insights into industry trends and
                  practices.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 ">
                  Networking Opportunities
                </h3>
                <p className="">
                  Build valuable connections with industry professionals and
                  fellow interns, expanding your professional network.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 ">Personal Growth</h3>
                <p className="">
                  Develop soft skills, cultural awareness, and adaptability
                  through international experiences and challenges.
                </p>
              </div>
            </div>
          </CardBody>
        </Card>

        <div className="text-center">
          <p className="text-xl leading-relaxed  mb-8">
            Our dedication to excellence is reflected in the success stories of
            countless students who have achieved their dreams through our
            guidance. We take pride in fostering lasting relationships with our
            clients, built on trust, transparency, and mutual respect.
          </p>
          <p className="text-2xl font-semibold ">
            Trust us to guide you towards a future filled with promise and
            opportunity. Join Amigo Immigration Services today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerConsultant;
