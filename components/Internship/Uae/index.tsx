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

const UAE = () => {
  return (
    <section className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center  mb-8">
          Hospitality Internships in the UAE
        </h1>

        <Card className=" shadow-lg mb-12">
          <CardBody className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-semibold  mb-4">
                  All About the UAE
                </h2>
                <p className=" leading-relaxed">
                  The United Arab Emirates (UAE) is a dynamic and rapidly
                  growing country known for its iconic skylines, luxury
                  lifestyle, and vibrant culture. Cities like Dubai and Abu
                  Dhabi are global hubs for tourism, hospitality, and
                  innovation, attracting millions of visitors annually.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  removeWrapper
                  alt="UAE Landmarks"
                  className="rounded-lg object-cover w-full h-full shadow-md"
                  height={250}
                  src="https://res.cloudinary.com/dp2aacz0d/image/upload/v1732098794/3full-shot-arab-people-spending_cjh1ny.jpg"
                />
              </div>
            </div>
          </CardBody>
        </Card>

        <Card className=" shadow-lg mb-12">
          <CardHeader className="flex gap-3 p-6">
            <Briefcase className="w-8 h-8 " />
            <h2 className="text-2xl font-semibold ">
              What is Hospitality in the UAE?
            </h2>
          </CardHeader>
          <Divider />
          <CardBody className="p-6">
            <p className=" leading-relaxed">
              Hospitality in the UAE reflects the country’s emphasis on luxury,
              innovation, and cultural richness. The industry spans world-class
              hotels, resorts, fine dining restaurants, and unique tourist
              experiences, catering to a diverse and international clients.
            </p>
          </CardBody>
        </Card>

        <h2 className="text-3xl font-semibold  text-center mb-8">
          Exploring Hospitality Careers in the UAE
        </h2>

        <Accordion className="mb-12" variant="splitted">
          <AccordionItem
            key="1"
            aria-label="Job Opportunities and Scope"
            startContent={<Globe className="" />}
            title="Job Opportunities and Scope in Hospitality"
          >
            <p className=" leading-relaxed mb-4">
              The UAE is a global hub for the hospitality industry, offering a
              variety of career opportunities:
            </p>
            <ul className="list-disc list-inside ">
              <li>
                Luxury Hotels: Roles in guest relations, management, and
                concierge services.
              </li>
              <li>
                Fine Dining: Opportunities for chefs, sommeliers, and restaurant
                managers.
              </li>
              <li>
                Event Management: Organizing large-scale events, exhibitions,
                and conferences.
              </li>
              <li>
                Tourism: Careers as tour guides, travel consultants, and
                adventure planners.
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Benefits of Internships"
            startContent={<Award className="" />}
            title="Benefits of Hospitality Internships in the UAE"
          >
            <p className=" leading-relaxed mb-4">
              Interning in the UAE provides numerous benefits:
            </p>
            <ul className="list-disc list-inside ">
              <li>Learn from global leaders in luxury and innovation.</li>
              <li>
                Gain experience in a multicultural and high-demand environment.
              </li>
              <li>Build connections with international professionals.</li>
              <li>Experience a unique blend of modernity and tradition.</li>
            </ul>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Visa Information"
            startContent={<Plane className="" />}
            title="Visa Information for UAE"
          >
            <p className=" leading-relaxed mb-4">
              To work or intern in the UAE, you will typically need a work or
              intern visa.
            </p>
            <p className=" leading-relaxed mb-4">Requirements include:</p>
            <ul className="list-disc list-inside ">
              <li>A valid passport with at least six months’ validity.</li>
              <li>An official offer letter from a recognized organization.</li>
              <li>Proof of qualifications or skills in hospitality.</li>
              <li>Medical fitness tests and insurance coverage.</li>
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
                  Front Office: Guest services, reservations, and concierge
                  roles.
                </li>
                <li>
                  Housekeeping: Maintaining luxury standards in cleanliness and
                  comfort.
                </li>
                <li>
                  Food & Beverage: Fine dining, catering, and beverage services.
                </li>
                <li>
                  Events & Conferences: Large-scale event planning and
                  management.
                </li>
                <li>
                  Sales & Marketing: Promoting the UAE as a global hospitality
                  destination.
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
                <li>Executive Chef: Innovating and managing luxury menus.</li>
                <li>Sous Chef: Supporting operations and ensuring quality.</li>
                <li>
                  Pastry Chef: Creating premium desserts and confectioneries.
                </li>
                <li>Line Cook: Preparing international and local cuisines.</li>
                <li>Banquet Chef: Catering to elite events and ceremonies.</li>
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
              Leading luxury hotels in the UAE offering exciting opportunities
              include:
            </p>
            <ul className="list-disc list-inside  mb-6">
              <li>Burj Al Arab</li>
              <li>Atlantis The Palm</li>
              <li>Jumeirah Beach Hotel</li>
              <li>The Ritz-Carlton Dubai</li>
              <li>Four Seasons Hotel Abu Dhabi</li>
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

export default UAE;
