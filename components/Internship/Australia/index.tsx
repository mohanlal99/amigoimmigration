"use client";
import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import {
  Globe,
  Briefcase,
  Award,
  Utensils,
  Building,
  Plane,
} from "lucide-react";

import ApplyButton from "../../Home/ApplyButton";

const Australia = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center  mb-8">
          Hospitality Internships in Australia
        </h1>

        <Card className=" shadow-lg mb-12">
          <CardBody className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-semibold  mb-4">
                  All About Australia
                </h2>
                <p className=" leading-relaxed">
                  Australia is a stunning and diverse country located in the
                  Southern Hemisphere, known for its breathtaking landscapes,
                  iconic wildlife, and vibrant cities like Sydney, Melbourne,
                  and Brisbane. The country offers a unique blend of cultural
                  heritage and modern living, making it a top destination for
                  students and professionals seeking global exposure.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  removeWrapper
                  alt="Australian Landmarks"
                  className="rounded-lg object-cover w-full h-full shadow-md"
                  height={300}
                  src="https://res.cloudinary.com/dp2aacz0d/image/upload/v1734418025/CTS-RM-8888-A-TRRCE-FINAL-01A_ix8wrg.webp"
                />
              </div>
            </div>
          </CardBody>
        </Card>

        <Card className=" shadow-lg mb-12">
          <CardHeader className="flex gap-3 p-6">
            <Briefcase className="w-8 h-8 " />
            <h2 className="text-2xl font-semibold ">
              What is Hospitality in Australia?
            </h2>
          </CardHeader>
          <Divider />
          <CardBody className="p-6">
            <p className=" leading-relaxed">
              Hospitality in Australia emphasizes warm, friendly service and
              creating memorable experiences for guests. The industry is broad,
              encompassing sectors such as hotels, resorts, restaurants, event
              planning, and tourism. With a focus on innovation and excellence,
              hospitality professionals in Australia deliver exceptional service
              to visitors worldwide.
            </p>
          </CardBody>
        </Card>

        <h2 className="text-3xl font-semibold  text-center mb-8">
          Exploring Hospitality Careers in Australia
        </h2>

        <Accordion className="mb-12" variant="splitted">
          <AccordionItem
            key="1"
            aria-label="Job Opportunities and Scope"
            startContent={<Globe className="" />}
            title="Job Opportunities and Scope in Hospitality"
          >
            <p className=" leading-relaxed mb-4">
              Australias thriving tourism and hospitality industry offers
              diverse job opportunities and a promising career scope. Key areas
              include:
            </p>
            <ul className="list-disc list-inside ">
              <li>
                Hotel Management: Front desk agents, housekeeping supervisors,
                and hotel managers.
              </li>
              <li>
                Food & Beverage: Roles include chefs, bartenders, and restaurant
                managers.
              </li>
              <li>
                Tourism: Opportunities as tour guides, travel agents, and
                adventure coordinators.
              </li>
              <li>
                Event Management: Careers in organizing corporate events,
                weddings, and festivals.
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Benefits of Internships"
            startContent={<Award className="" />}
            title="Benefits of Hospitality Internships in Australia"
          >
            <p className=" leading-relaxed mb-4">
              Interning in Australia provides numerous benefits:
            </p>
            <ul className="list-disc list-inside ">
              <li>
                Experience world-class hospitality practices and standards.
              </li>
              <li>
                Develop skills in customer service, teamwork, and cultural
                adaptability.
              </li>
              <li>
                Network with global professionals and gain industry exposure.
              </li>
              <li>
                Enjoy Australias high-quality lifestyle and diverse culture.
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Visa Information"
            startContent={<Plane className="" />}
            title="Visa Information for Australia"
          >
            <p className=" leading-relaxed mb-4">
              To participate in hospitality internships in Australia, you
              typically need a subclass 407 (Training Visa). The 407 visa allows
              international students and young professionals to gain practical
              training in their field of expertise. Requirements include:
            </p>
            <ul className="list-disc list-inside ">
              <li>A valid passport.</li>
              <li>Sponsorship by a recognized Australian organization.</li>
              <li>Proof of relevant skills or education in hospitality.</li>
              <li>Proficiency in English (IELTS or equivalent).</li>
            </ul>
          </AccordionItem>
        </Accordion>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className=" shadow-lg">
            <CardHeader className="flex gap-3 p-6">
              <Building className="w-8 h-8 " />
              <h2 className="text-2xl font-semibold ">
                Key Departments in Hospitality
              </h2>
            </CardHeader>
            <Divider />
            <CardBody className="p-6">
              <ul className="list-disc list-inside ">
                <li>
                  Front Office: Manages reservations, check-ins, and guest
                  relations.
                </li>
                <li>
                  Housekeeping: Ensures cleanliness and comfort for guests.
                </li>
                <li>
                  Food & Beverage: Oversees restaurants, bars, and catering
                  services.
                </li>
                <li>
                  Events & Conferencing: Plans and executes large-scale events.
                </li>
                <li>
                  Sales & Marketing: Promotes the property and attracts clients.
                </li>
              </ul>
            </CardBody>
          </Card>
          <Card className=" shadow-lg">
            <CardHeader className="flex gap-3 p-6">
              <Utensils className="w-8 h-8 " />
              <h2 className="text-2xl font-semibold ">Chef Roles in Hotels</h2>
            </CardHeader>
            <Divider />
            <CardBody className="p-6">
              <ul className="list-disc list-inside ">
                <li>
                  Executive Chef: Oversees all kitchen operations and menu
                  creation.
                </li>
                <li>
                  Sous Chef: Assists the executive chef in daily operations.
                </li>
                <li>Pastry Chef: Specializes in desserts and baked goods.</li>
                <li>
                  Line Cook: Prepares dishes and manages specific kitchen
                  stations.
                </li>
                <li>
                  Banquet Chef: Focuses on catering for large events and
                  banquets.
                </li>
              </ul>
            </CardBody>
          </Card>
        </div>

        <Card className=" shadow-lg mb-12">
          <CardHeader className="flex gap-3 p-6">
            <Award className="w-8 h-8 " />
            <h2 className="text-2xl font-semibold ">
              Top Hotels Offering Opportunities
            </h2>
          </CardHeader>
          <Divider />
          <CardBody className="p-6">
            <p className=" leading-relaxed mb-4">
              Some top hotels and resorts in Australia offering internship
              opportunities include:
            </p>
            <ul className="list-disc list-inside  mb-6">
              <li>Marriott International</li>
              <li>Hilton Hotels</li>
              <li>Four Seasons Sydney</li>
              <li>InterContinental Hotels & Resorts</li>
              <li>Shangri-La Hotel, Sydney</li>
            </ul>
            <div className="flex justify-center">
              <ApplyButton />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default Australia;
