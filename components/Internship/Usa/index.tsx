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

const Usa = () => {
  return (
    <section className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center  mb-8">
          Hospitality Internships in the USA
        </h1>

        <Card className=" shadow-lg mb-12">
          <CardBody className="p-3 md:p-5">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-semibold  mb-4">
                  All About the USA
                </h2>
                <p className=" leading-relaxed">
                  The United States of America (USA), commonly referred to as
                  the U.S. or America, is a federal union of 50 states with a
                  rich cultural and geographic diversity. Known for its iconic
                  landmarks and global influence, the USA offers numerous
                  opportunities for professional and personal growth. From
                  bustling cities to serene countryside, the U.S. is a land of
                  innovation and opportunity.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  removeWrapper
                  alt="USA Landmarks"
                  className="rounded-lg w-full object-cover h-full shadow-md"
                  height={300}
                  src="https://res.cloudinary.com/dp2aacz0d/image/upload/v1732279828/top-view-green-card-passport_23-2149828123_qboj2z.avif"
                />
              </div>
            </div>
          </CardBody>
        </Card>

        <Card className=" shadow-lg mb-12">
          <CardHeader className="flex gap-3 p-6">
            <Briefcase className="w-8 h-8 " />
            <h2 className="text-2xl font-semibold ">What is Hospitality?</h2>
          </CardHeader>
          <Divider />
          <CardBody className="p-6">
            <p className=" leading-relaxed">
              Hospitality is the art of providing friendly and generous
              reception to guests and visitors. It encompasses a range of
              services designed to ensure comfort, care, and enjoyment. This
              industry includes hotels, restaurants, resorts, travel, tourism,
              and event management. Hospitality professionals strive to create
              memorable experiences for their guests.
            </p>
          </CardBody>
        </Card>

        <h2 className="text-3xl font-semibold  text-center mb-8">
          Exploring Hospitality Careers
        </h2>

        <Accordion className="mb-12" variant="splitted">
          <AccordionItem
            key="1"
            aria-label="Job Opportunities and Scope"
            startContent={<Globe className="" />}
            title="Job Opportunities and Scope in Hospitality"
          >
            <p className=" leading-relaxed mb-4">
              The hospitality industry provides a diverse range of job
              opportunities and has vast career growth potential. Key areas
              include hotel management, food and beverage, travel and tourism,
              and event management. Working in hospitality offers global
              exposure, skill development, and numerous career advancement
              opportunities.
            </p>
            <ul className="list-disc list-inside ">
              <li>
                Hotel Management: Front desk agents, housekeeping staff, hotel
                managers.
              </li>
              <li>
                Food & Beverage: Chefs, kitchen managers, restaurant managers.
              </li>
              <li>
                Travel & Tourism: Travel agents, tour guides, event planners.
              </li>
              <li>
                Event Management: Wedding planners, conference coordinators.
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Benefits of Internships"
            startContent={<Award className="" />}
            title="Benefits of Hospitality Internships in the USA"
          >
            <p className=" leading-relaxed mb-4">
              Hospitality internships in the USA offer numerous advantages:
            </p>
            <ul className="list-disc list-inside ">
              <li>Global exposure and cultural awareness.</li>
              <li>
                Skill development in customer service, teamwork, and
                communication.
              </li>
              <li>Opportunities for career growth and management roles.</li>
              <li>Interaction with people from diverse backgrounds.</li>
            </ul>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="J-1 Visa Information"
            startContent={<Plane className="" />}
            title="J-1 Visa: Your Gateway to U.S. Internships"
          >
            <p className=" leading-relaxed">
              The J-1 visa is a non-immigrant visa that enables individuals to
              participate in cultural exchange programs in the USA. It allows
              students and professionals to gain practical training and exposure
              to American culture while contributing to mutual understanding and
              learning.
            </p>
            <p className=" leading-relaxed pt-2">
              Individuals eligible for a J-1 visa include students, scholars,
              researchers, interns, and trainees participating in exchange
              programs approved by the U.S. Department of State
            </p>
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
                <li>Front Office: Guest services, reservations, concierge.</li>
                <li>Housekeeping: Cleanliness and hygiene management.</li>
                <li>
                  Food & Beverage: Restaurants, bars, and room service
                  operations.
                </li>
                <li>Engineering: Maintenance and facilities management.</li>
                <li>
                  Sales & Marketing: Promotions, events, and client management.
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
                <li>Executive Chef: Oversees all kitchen operations.</li>
                <li>
                  Sous Chef: Assists the executive chef and manages daily
                  operations.
                </li>
                <li>Pastry Chef: Specializes in baking and desserts.</li>
                <li>
                  Commis Chef: They prepare food and maintain cleanliness.
                </li>
                <li>Line Cook: Prepares ingredients and cooks dishes.</li>
                <li>
                  Banquet Chef: Handles food preparation for events and
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
              Here are some prestigious 5-star hotels offering internships and
              job opportunities:
            </p>
            <ul className="list-disc list-inside  mb-6">
              <li>The Ritz-Carlton</li>
              <li>Marriott Hotels</li>
              <li>Hilton Hotels</li>
              <li>Four Seasons Hotels and Resorts</li>
              <li>Waldorf Astoria</li>
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

export default Usa;
