"use client";
import React, { useState } from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Input } from "@nextui-org/input";
import { Chip } from "@nextui-org/chip";
import { Divider } from "@nextui-org/divider";
import { Plane, Search } from "lucide-react";

import ApplyButton from "../Home/ApplyButton";

const internships = [
  {
    id: 71,
    title: "Hospitality Internship in the USA",
    path: "/internship/usa",
    newTab: false,
    image:
      "https://res.cloudinary.com/dp2aacz0d/image/upload/v1732098786/business-people-_ti4zyx.jpg",
    description:
      "Explore a world of opportunities with our hospitality internships in the USA. Gain hands-on experience in renowned hotels and restaurants while immersing yourself in American culture.",
    location: "USA",
    duration: ["3 months", "6 months", "18 months"],
  },
  {
    id: 72,
    title: "Hospitality Internship in Australia",
    path: "/internship/australia",
    newTab: false,
    image:
      "https://res.cloudinary.com/dp2aacz0d/image/upload/v1732098794/2young-woman-with-r_ozht8m.avif",
    description:
      "Enhance your skills and career prospects with our hospitality internships in Australia. Work in top-tier establishments and experience the Australian way of life.",
    location: "Australia",
    duration: ["12 months"],
  },
  {
    id: 74,
    title: "Hospitality Internship in UAE",
    path: "/internship/uae",
    newTab: false,
    image:
      "https://res.cloudinary.com/dp2aacz0d/image/upload/v1732098794/3full-shot-arab-people-spending_cjh1ny.jpg",
    description:
      "Join our UAE hospitality internship program and gain exposure to luxury service standards in one of the world's most dynamic regions.",
    location: "UAE",
    duration: ["3 months", "6 months", "12 months", "18 months"],
  },
  {
    id: 77,
    title: "Hospitality Internship in Cruise",
    path: "/internship/cruise",
    newTab: false,
    image:
      "https://res.cloudinary.com/dp2aacz0d/image/upload/v1732098795/4Internship_in_Cruise_jmqma4.jpg",
    description:
      "Set sail on a unique journey with our hospitality internships on luxury cruises. Learn the art of customer service on the high seas.",
    location: "International Waters",
    duration: ["6 months", "9 months"],
  },
  {
    id: 78,
    title: "Hospitality Internship in France",
    path: "/internship/france",
    newTab: false,
    image:
      "https://res.cloudinary.com/dp2aacz0d/image/upload/v1732098795/5laughing-woman-sho_yefsgu.jpg",
    description:
      "Discover the heart of European hospitality with our internships in France. Work in world-class establishments and embrace French culture.",
    location: "France",
    duration: ["6 months"],
  },
];

const Internship = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredInternships = internships.filter(
    (internship) =>
      internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.location.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-8">
          Internship Opportunities
        </h1>
        <p className="text-xl text-center  mb-12">
          Discover exciting hospitality internships around the world and
          kickstart your international career!
        </p>

        <div className="mb-8 max-w-md mx-auto">
          <Input
            isClearable
            placeholder="Search internships..."
            startContent={<Search className="" />}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInternships.map((internship) => (
            <Card
              key={internship.id}
              className=" shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardBody className="p-0">
                <Image
                  removeWrapper
                  alt={internship.title}
                  className="w-full p-2 h-full object-cover"
                  height={240}
                  src={internship.image}
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-blue-800 mb-3">
                    {internship.title}
                  </h2>

                  <div className="flex gap-2 mb-4">
                    {internship.duration.map((duration, index) => (
                      <Chip key={index} color="secondary" variant="flat">
                        {duration}
                      </Chip>
                    ))}
                  </div>
                  <p className=" mb-4">{internship.description}</p>
                </div>
              </CardBody>
              <Divider />
              <CardFooter className="justify-between">
                <Button
                  as="a"
                  color="primary"
                  endContent={<Plane className="ml-2" />}
                  href={internship.path}
                  target={internship.newTab ? "_blank" : "_self"}
                >
                  Learn More
                </Button>
                <Button color="secondary" variant="ghost">
                  {internship.location}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredInternships.length === 0 && (
          <p className="text-center  mt-8">
            No internships found matching your search. Please try different
            keywords.
          </p>
        )}

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl  mb-8">
            Apply now and take the first step towards an exciting international
            career in hospitality!
          </p>
          <ApplyButton />
        </div>
      </div>
    </section>
  );
};

export default Internship;
