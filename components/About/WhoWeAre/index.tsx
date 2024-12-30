import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Award, BookOpen, Globe, Users } from "lucide-react";

const WhoWeAre = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 ">
          Who We Are
        </h1>
        <p className="text-xl leading-relaxed text-center max-w-3xl mx-auto mb-12 ">
          Welcome to Amigo Immigration Services, your trusted partner in
          securing valuable international internships.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className=" shadow-lg">
            <CardBody className="p-6">
              <Globe className="w-12 h-12  mb-4" />
              <h2 className="text-2xl font-semibold mb-4 ">
                Global Opportunities
              </h2>
              <p className="">
                We offer paid internship opportunities across the globe,
                including the USA, Europe, and many other exciting destinations.
              </p>
            </CardBody>
          </Card>
          <Card className=" shadow-lg">
            <CardBody className="p-6">
              <Users className="w-12 h-12  mb-4" />
              <h2 className="text-2xl font-semibold mb-4 ">Expert Guidance</h2>
              <p className="">
                Our seasoned experts work diligently to match students with
                internships that align with their career goals, offering
                tailored support throughout the process.
              </p>
            </CardBody>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Our Mission Card */}
          <Card className=" shadow-lg rounded-lg overflow-hidden">
            <CardBody className="p-6 md:p-8">
              <h2 className="text-3xl font-bold mb-4 ">Our Mission</h2>
              <p className=" mb-4">
                We open doors for ambitious students, providing unparalleled
                experiences that enhance their career prospects and personal
                growth.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center ">
                  <Award className="w-5 h-5 mr-2 " />
                  Hard work and integrity
                </li>
                <li className="flex items-center ">
                  <BookOpen className="w-5 h-5 mr-2 " />
                  Real-world experience
                </li>
                <li className="flex items-center ">
                  <Users className="w-5 h-5 mr-2 " />
                  Comprehensive support
                </li>
              </ul>
            </CardBody>
          </Card>

          {/* Image Card */}
          <Card className=" shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <Image
                removeWrapper
                alt="International Internships"
                className="w-full h-full object-cover rounded-lg"
                height={300}
                src="https://res.cloudinary.com/dp2aacz0d/image/upload/v1732098787/1about_top-view-travel-_lqrdmf.jpg"
              />
            </div>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-xl leading-relaxed  mb-8">
            With a proven track record of success and a deep commitment to the
            achievements of our clients, Amigo Immigration Services stands out
            as a leader in the field. Trust us to be your guide and partner in
            navigating the path to international success.
          </p>
          <p className="text-2xl font-semibold ">
            Join us and take the first step towards an enriching and rewarding
            internship experience!
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
