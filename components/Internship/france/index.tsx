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
  UserCheck,
} from "lucide-react";

import ApplyButton from "../../Home/ApplyButton";

const France = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center  mb-8">
          Hospitality Internships in France
        </h1>

        <Card className=" shadow-lg mb-12">
          <CardBody className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-semibold  mb-4">
                  All About France
                </h2>
                <p className=" leading-relaxed">
                  France, known for its romantic allure, world-class cuisine,
                  and rich cultural heritage, is a top destination for
                  hospitality professionals. With its iconic landmarks like the
                  Eiffel Tower and the French Riviera, the country boasts a
                  thriving tourism industry that offers unparalleled
                  opportunities for growth and learning.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  removeWrapper
                  alt="French Landmarks"
                  className="rounded-lg object-cover w-full h-full shadow-md"
                  height={300}
                  src="https://res.cloudinary.com/dp2aacz0d/image/upload/v1732098791/modern-a_ojknl8.jpg"
                />
              </div>
            </div>
          </CardBody>
        </Card>

        <Card className=" shadow-lg mb-12">
          <CardHeader className="flex gap-3 p-6">
            <Briefcase className="w-8 h-8 " />
            <h2 className="text-2xl font-semibold ">
              What is Hospitality in France?
            </h2>
          </CardHeader>
          <Divider />
          <CardBody className="p-6">
            <p className=" leading-relaxed">
              France is renowned for its hospitality sector, emphasizing
              elegance, attention to detail, and exceptional guest experiences.
              The industry includes luxury hotels, Michelin-starred restaurants,
              and unique experiences like wine tourism, making France a dream
              destination for aspiring hospitality professionals.
            </p>
          </CardBody>
        </Card>

        <h2 className="text-3xl font-semibold  text-center mb-8">
          Exploring Hospitality Careers in France
        </h2>

        <Accordion className="mb-12" variant="splitted">
          <AccordionItem
            key="1"
            aria-label="Job Opportunities and Scope"
            startContent={<Globe className="" />}
            title="Job Opportunities and Scope in Hospitality"
          >
            <p className=" leading-relaxed mb-4">
              France offers a range of exciting opportunities in the hospitality
              and tourism sector:
            </p>
            <ul className="list-disc list-inside ">
              <li>
                Luxury Hotels: Positions in front desk management, guest
                relations, and concierge services.
              </li>
              <li>
                Gastronomy: Opportunities for chefs, sommeliers, and restaurant
                managers in Michelin-starred establishments.
              </li>
              <li>
                Event Management: Organizing grand events like weddings and
                international conferences.
              </li>
              <li>
                Wine Tourism: Careers in vineyards and wineries, including tour
                guiding and wine-tasting expertise.
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Benefits of Internships"
            startContent={<Award className="" />}
            title="Benefits of Hospitality Internships in France"
          >
            <p className=" leading-relaxed mb-4">
              Interning in France provides unique benefits:
            </p>
            <ul className="list-disc list-inside ">
              <li>Experience the finest European hospitality standards.</li>
              <li>
                Work in a multicultural environment with global professionals.
              </li>
              <li>
                Develop expertise in French gastronomy and luxury hospitality.
              </li>
              <li>
                Immerse yourself in the French language, culture, and lifestyle.
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Eligibility Criteria"
            startContent={<UserCheck className="" />}
            title="Eligibility Criteria"
          >
            <p className=" leading-relaxed mb-4">
              To apply for hospitality internships in France, candidates must
              meet the following criteria:
            </p>
            <ul className="list-disc list-inside ">
              <li>Age: Between 18 and 30 years old.</li>
              <li>
                Education: Relevant qualifications or ongoing studies in
                hospitality or related fields.
              </li>
              <li>
                Language: Proficiency in English; knowledge of French is a plus.
              </li>
              <li>
                Visa: Obtain a Training Visa or a Work Permit sponsored by the
                host organization.
              </li>
              <li>Health: Medical fitness and insurance coverage.</li>
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
                  Front Office: Managing guest check-ins, reservations, and
                  concierge services.
                </li>
                <li>
                  Housekeeping: Ensuring luxury standards in cleanliness and
                  guest comfort.
                </li>
                <li>
                  Food & Beverage: Catering, dining, and beverage services.
                </li>
                <li>
                  Events & Conferences: Planning and managing exclusive events.
                </li>
                <li>
                  Sales & Marketing: Promoting French tourism and hospitality
                  experiences.
                </li>
              </ul>
            </CardBody>
          </Card>
          <Card className=" shadow-lg">
            <CardHeader className="flex gap-3 p-6">
              <Utensils className="w-8 h-8 " />
              <h2 className="text-2xl font-semibold ">Chef Roles in France</h2>
            </CardHeader>
            <Divider />
            <CardBody className="p-6">
              <ul className="list-disc list-inside ">
                <li>
                  Executive Chef: Leading kitchen operations and menu
                  innovation.
                </li>
                <li>
                  Sous Chef: Supporting the executive chef and managing kitchen
                  staff.
                </li>
                <li>
                  Pastry Chef: Specializing in desserts and traditional French
                  pastries.
                </li>
                <li>
                  Line Cook: Preparing dishes with precision and creativity.
                </li>
                <li>
                  Banquet Chef: Catering for large-scale events and functions.
                </li>
              </ul>
            </CardBody>
          </Card>
        </div>

        <Card className="shadow-lg mb-12">
          <CardHeader className="flex gap-3 p-6">
            <Award className="w-8 h-8 " />
            <h2 className="text-2xl font-semibold ">
              Top Hotels Offering Opportunities
            </h2>
          </CardHeader>
          <Divider />
          <CardBody className="p-6">
            <p className=" leading-relaxed mb-4">
              Some of Frances prestigious hotels offering internships include:
            </p>
            <ul className="list-disc list-inside  mb-6">
              <li>Le Meurice, Paris</li>
              <li>Hotel de Crillon</li>
              <li>InterContinental Marseille</li>
              <li>Four Seasons Hotel George V</li>
              <li>Sofitel Lyon Bellecour</li>
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

export default France;
