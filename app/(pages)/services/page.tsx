"use client";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Chip, Divider, Image } from "@nextui-org/react";
import { Plane } from "lucide-react";
import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Services to Job Seekers",
      description:
        "Explore tailored career guidance, resume building, and skill development services designed to help you land your dream job.",
      image:
        "https://res.cloudinary.com/dp2aacz0d/image/upload/v1735299245/handsome-men-black-suits-working-cafe_1157-45666_bk8ifg.jpg",
      path: "/services/job-seekers",
      location: "Global Opportunities",
      newTab: false,
      duration: ["Guidance", "Skills"],
    },
    {
      id: 2,
      title: "Services to Employers",
      description:
        "Find qualified candidates effortlessly with our recruitment solutions, designed to match top talent with employer needs.",
      image:
        "https://res.cloudinary.com/dp2aacz0d/image/upload/v1735204647/happy-businessmen-greeting-his-colleagues-meeting-shaking-hands-with-one-them-office_637285-7013_kqykgm.jpg",
      path: "/services/employers",
      location: "Hiring Solutions",
      newTab: false,
      duration: ["Recruitment", "Placements"],
    },
    {
      id: 3,
      title: "Guaranteed Placement Programs",
      description:
        "Join our industry-recognized programs to secure guaranteed job placements in leading companies worldwide.",
      image:
        "https://res.cloudinary.com/dp2aacz0d/image/upload/v1733227120/apply-backgroud_foztbf.avif",
      path: "/services/placement-programs",
      location: "Secure Your Future",
      newTab: false,
      duration: ["Certifications", "Job Ready"],
    },
    {
      id: 4,
      title: "Premium Career Services",
      description:
        "Unlock premium services including mentorship, personalized coaching, and career strategy for ultimate success.",
      image:
        "https://res.cloudinary.com/dp2aacz0d/image/upload/v1734771311/photo-1507679799987-c73779587ccf_nqonzp.avif",
      path: "/services/premium-career",
      location: "Exclusive Offerings",
      newTab: false,
      duration: ["Mentorship", "Coaching"],
    },
    {
      id: 5,
      title: "Loan Services",
      description:
        "Access education and internship loans tailored for students and professionals pursuing international opportunities.",
      image:
        "https://res.cloudinary.com/dp2aacz0d/image/upload/v1735382351/photo-1554224155-8d04cb21cd6c_nngfm1.avif",
      path: "/services/loan-services",
      location: "Financial Support",
      newTab: false,
      duration: ["Education Loans", "Internship Loans"],
    },
    {
      id: 6,
      title: "Explore Our Diploma Programs",
      description:
        "Browse our wide range of diploma programs designed to equip you with the skills for global success.",
      image:
        "https://res.cloudinary.com/dp2aacz0d/image/upload/v1734772428/graduation-diploma-certificate-copy-space_23-2148769717_pboazi.jpg",
      path: "/services/diploma-programs",
      location: "Career Growth",
      newTab: false,
      duration: ["Diplomas", "Skills"],
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      {/* Content above the cards */}
      <div className="container mx-auto text-center mb-12 px-6">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">
          Discover Our Services
        </h1>
        <p className="text-lg text-gray-700">
          At Amigo Immigration, we offer a comprehensive range of services to
          support students, job seekers, and employers in achieving their goals.
          From career guidance to education loans, explore solutions tailored to
          your needs.
        </p>
      </div>

      {/* Cards */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card
            key={service.id}
            className="shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <CardBody className="p-0">
              <Image
                removeWrapper
                alt={service.title}
                className="w-full p-2 h-full object-cover"
                height={240}
                src={service.image}
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-800 mb-3">
                  {service.title}
                </h2>

                <div className="flex gap-2 mb-4">
                  {service.duration.map((duration, index) => (
                    <Chip key={index} color="secondary" variant="flat">
                      {duration}
                    </Chip>
                  ))}
                </div>
                <p className="mb-4">{service.description}</p>
              </div>
            </CardBody>
            <Divider />
            <CardFooter className="justify-between">
              <Button
                as="a"
                color="primary"
                endContent={<Plane className="ml-2" />}
                href={service.path}
                target={service.newTab ? "_blank" : "_self"}
              >
                Learn More
              </Button>
              <Button color="secondary" variant="ghost">
                {service.location}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Content below the cards */}
      <div className="container mx-auto text-center mt-12 px-6">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Ready to Take the Next Step?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Whether you&#39;re looking to advance your career, find the right
          employees, or explore our diploma programs, we&apos;re here to help.
          Let&apos;s work together to achieve your goals.
        </p>
        <Button
          as="a"
          className="shadow-lg hover:shadow-xl"
          color="primary"
          href="/contact"
          size="lg"
        >
          Contact Us Today
        </Button>
      </div>
    </section>
  );
};

export default Services;
