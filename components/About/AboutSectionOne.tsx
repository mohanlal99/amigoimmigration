import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/react";

const AboutSectionOne = () => {
  const services = [
    "Study Abroad Consulting",
    "Hospitality Placements",
    "Visa Assistance",
    "Cultural Preparation",
  ];

  const values = [
    {
      title: "Excellence",
      description: "Striving for the highest standards in all we do.",
    },
    {
      title: "Passion",
      description: "Driven by our love for helping people achieve their goals.",
    },
    {
      title: "Diversity",
      description: "Celebrating and embracing multiculturalism.",
    },
    {
      title: "Empathy",
      description:
        "Understanding and supporting every client's unique journey.",
    },
  ];

  return (
    <section className="">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="relative text-center mb-12">
          <Image
            removeWrapper
            alt="Contact Amigo Immigration"
            className=" rounded-lg opacity-90 object-cover shadow-lg w-full"
            height={200}
            src="https://res.cloudinary.com/dp2aacz0d/image/upload/v1732098787/0rathaskarsuite_2024_rfotef.jpg"
          />
          {/* <h1 className="absolute top-40  right-10 z-10 transform translate-y-[-50%] text-4xl font-bold mt-8 px-8 py-4 border-4 border-solid border-black bg-white rounded-lg shadow-lg">
            Contact
          </h1> */}
          <div className="absolute z-10 inset-0 bg-gray-900 w-full h-full opacity-60 rounded-xl flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl  font-bold text-white">
              About Amigo Immigration Services
            </h1>
          </div>
          <p className="text-lg leading-7 text-center mb-12 max-w-4xl mx-auto">
            Empowering Dreams. Building Global Careers.
          </p>
        </div>
        <div className="grid gap-12 mb-16">
          <Card className="p-6">
            <CardHeader>
              <h2 className="text-2xl font-semibold text-primary">
                Our Journey
              </h2>
            </CardHeader>
            <CardBody>
              <p className="">
                At Amigo Immigration Services, we specialize in providing
                tailored immigration solutions for students and professionals
                looking to build a career in the global hospitality industry,
                particularly those pursuing hotel management studies. We
                understand the unique challenges faced by aspiring hotel
                management professionals and offer expert guidance through every
                step of the immigration process—whether you&#39;re aiming to
                study abroad, secure internships, or start a career in leading
                international hotels and resorts. Our mission is to simplify the
                path to success by providing personalized services that open
                doors to education and career opportunities worldwide. Trusted
                by students and professionals alike, we are dedicated to helping
                you achieve your global aspirations in hospitality
              </p>
            </CardBody>
          </Card>

          <Card className="p-6">
            <CardHeader>
              <h2 className="text-2xl font-semibold text-primary">
                Why Choose Us?
              </h2>
            </CardHeader>
            <CardBody>
              <ul className="list-disc list-inside space-y-2 ">
                <li>
                  Global Expertise: Providing immigration and career consulting
                  services for five major countries.
                </li>
                <li>
                  Hospitality Specialists: Tailored services for students and
                  professionals in the hospitality industry.
                </li>
                <li>
                  Seamless Process: From documentation to placement, we ensure a
                  hassle-free experience.
                </li>
                <li>
                  Client-Centric Approach: Personalized support to meet
                  individual goals and aspirations.
                </li>
                <li>
                  Proven Track Record: Helping clients successfully transition
                  to international careers since our inception.
                </li>
                <li>
                  Dedicated Support: A committed team guiding every step of the
                  journey.
                </li>
              </ul>
            </CardBody>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-primary">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <CardBody>
                  <p className="text-lg font-medium ">{service}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>

        <Divider className="my-16" />

        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-primary">
            Our Mission
          </h2>
          <Card className="p-6">
            <CardBody>
              <p className=" mb-4">
                At Amigo Immigration Services, our mission is to empower
                individuals to follow their dreams and unlock their global
                potential. We are committed to:
              </p>
              <ul className="list-disc list-inside space-y-2 ">
                <li>
                  Delivering high-quality, personalized immigration services.
                </li>
                <li>Enabling access to top international opportunities.</li>
                <li>
                  Supporting our clients&#39; success with integrity, passion,
                  and professionalism.
                </li>
              </ul>
            </CardBody>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-primary">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <h3 className="text-xl font-semibold ">{value.title}</h3>
                </CardHeader>
                <CardBody>
                  <p className="">{value.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4 text-primary">
            Let&#39;s Build Your Future Together
          </h3>
          <p className="text-lg leading-7  max-w-3xl mx-auto">
            At Amigo Immigration Services, we are not just about helping people
            relocate; we are about transforming lives and creating meaningful
            opportunities. Join us, and let&#39;s pave the path to your success
            abroad!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
