"use client";
import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import { Ship, Briefcase, Award, Globe } from "lucide-react";

import ApplyButton from "../../Home/ApplyButton";

const Cruise = () => {
  return (
    <section className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center  mb-8">
          Cruise Ship Careers and Internships
        </h1>

        <Card className=" shadow-lg mb-12">
          <CardBody className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-semibold  mb-4">
                  Explore the World with Cruise Careers
                </h2>
                <p className=" leading-relaxed">
                  Cruise ships offer a unique and adventurous way to build your
                  career in the hospitality and tourism industry. From working
                  with a multicultural team to traveling across exotic
                  destinations, a career on a cruise ship is both exciting and
                  rewarding.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  removeWrapper
                  alt="Cruise Ship"
                  className="rounded-lg shadow-md object-cover w-full h-full"
                  height={300}
                  src="https://res.cloudinary.com/dp2aacz0d/image/upload/v1732098795/4Internship_in_Cruise_jmqma4.jpg"
                />
              </div>
            </div>
          </CardBody>
        </Card>

        <Card className=" shadow-lg mb-12">
          <CardHeader className="flex gap-3 p-6">
            <Ship className="w-8 h-8 " />
            <h2 className="text-2xl font-semibold ">
              Why Choose a Career on a Cruise?
            </h2>
          </CardHeader>
          <Divider />
          <CardBody className="p-6">
            <p className=" leading-relaxed">
              Cruise ship careers provide a dynamic work environment with
              unparalleled opportunities for personal and professional growth.
              You can:
            </p>
            <ul className="list-disc list-inside ">
              <li>Travel to breathtaking destinations worldwide.</li>
              <li>
                Gain cross-cultural experience by working with diverse teams.
              </li>
              <li>
                Enjoy excellent perks, including free accommodation and meals.
              </li>
              <li>
                Build expertise in hospitality, entertainment, and guest
                relations.
              </li>
            </ul>
          </CardBody>
        </Card>

        <h2 className="text-3xl font-semibold  text-center mb-8">
          Cruise Ship Departments and Roles
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className=" shadow-lg">
            <CardHeader className="flex gap-3 p-6">
              <Briefcase className="w-8 h-8 " />
              <h2 className="text-xl font-semibold ">Guest Services</h2>
            </CardHeader>
            <Divider />
            <CardBody className="p-6">
              <Image
                removeWrapper
                alt="gueset services "
                className="object-cover w-full h-full"
                height={200}
                src="https://res.cloudinary.com/dp2aacz0d/image/upload/v1732796074/two-mans-one-redhead-woman-table-beach_613910-2328_ees7p6.jpg"
              />

              <p className=" leading-relaxed">
                Includes front desk agents, guest relations officers, and
                concierge staff who ensure a seamless guest experience.
              </p>
            </CardBody>
          </Card>
          <Card className=" shadow-lg">
            <CardHeader className="flex gap-3 p-6">
              <Award className="w-8 h-8 " />
              <h2 className="text-xl font-semibold ">Food & Beverage</h2>
            </CardHeader>
            <Divider />
            <CardBody className="p-6">
              <Image
                removeWrapper
                alt="gueset services "
                className="object-cover w-full h-full"
                height={200}
                src="https://res.cloudinary.com/dp2aacz0d/image/upload/v1732796118/friends-having-conversation-party_23-2148232024_rdt0pe.jpg"
              />
              <p className=" leading-relaxed">
                Includes chefs, bartenders, and waitstaff who deliver
                exceptional dining experiences onboard.
              </p>
            </CardBody>
          </Card>
          <Card className=" shadow-lg">
            <CardHeader className="flex gap-3 p-6">
              <Globe className="w-8 h-8 " />
              <h2 className="text-xl font-semibold ">Entertainment</h2>
            </CardHeader>
            <Divider />
            <CardBody className="p-6">
              <Image
                removeWrapper
                alt="gueset services "
                className="object-cover w-full h-full"
                height={200}
                src="https://res.cloudinary.com/dp2aacz0d/image/upload/v1732796208/young-people-having-fun-white-party_23-2149429854_x6r8il.jpg"
              />
              <p className=" leading-relaxed">
                Includes performers, DJs, activity coordinators, and technical
                staff who keep guests entertained during their voyage.
              </p>
            </CardBody>
          </Card>
        </div>

        <Accordion className="mb-12" variant="splitted">
          <AccordionItem
            key="1"
            aria-label="Eligibility Criteria"
            startContent={<Briefcase className="" />}
            title="Eligibility Criteria"
          >
            <p className=" leading-relaxed mb-4">
              To apply for cruise ship jobs or internships, you typically need:
            </p>
            <ul className="list-disc list-inside ">
              <li>Age: Minimum 18 years.</li>
              <li>
                Language: Proficiency in English; additional languages are an
                advantage.
              </li>
              <li>
                Health: Medical fitness and ability to handle extended time at
                sea.
              </li>
              <li>
                Experience: Relevant skills or training in hospitality, tourism,
                or customer service.
              </li>
              <li>
                Passport: A valid passport and necessary visas for international
                travel.
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Benefits of Internships"
            startContent={<Award className="" />}
            title="Benefits of Cruise Internships"
          >
            <p className=" leading-relaxed mb-4">
              Interning on a cruise ship offers numerous benefits, such as:
            </p>
            <ul className="list-disc list-inside ">
              <li>
                Hands-on experience in a fast-paced, high-standard environment.
              </li>
              <li>Exposure to global cultures and cuisines.</li>
              <li>Opportunities for networking and career advancement.</li>
              <li>Travel perks, including visits to multiple destinations.</li>
            </ul>
          </AccordionItem>
        </Accordion>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Image
            alt="Cruise Destination 1"
            className="rounded-lg shadow-lg"
            src="/images/hotel.jpg"
          />
          <Image
            alt="Cruise Destination 2"
            className="rounded-lg shadow-lg"
            src="/images/hotel.jpg"
          />
          <Image
            alt="Cruise Destination 3"
            className="rounded-lg shadow-lg"
            src="/images/hotel.jpg"
          />
        </div>

        <Card className=" shadow-lg">
          <CardBody className="p-6">
            <div className="text-center">
              <h2 className="text-2xl font-semibold  mb-4">
                Ready to Set Sail on Your Cruise Career?
              </h2>
              <p className=" leading-relaxed mb-6">
                Join a cruise ship today and embark on a journey of exploration,
                learning, and success. Apply now to take your first step toward
                an exciting career at sea.
              </p>
              <ApplyButton />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default Cruise;
