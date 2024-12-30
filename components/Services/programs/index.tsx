"use client";

import React from "react";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import {
  Divider,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { motion } from "framer-motion";

import { Diploma as DiplomaType } from "@/types/diploma";

interface DiplomaProps {
  diplomas: DiplomaType[];
}

const Diploma: React.FC<DiplomaProps> = ({ diplomas }) => {
  return (
    <div className="bg-gradient-to-b from-purple-900 to-indigo-900 bg-blue-900 bg-cover bg-fixed min-h-screen text-white">
      <div className="relative h-[20vh] lg:h-[50vh] flex items-center justify-center bg-opacity-50 bg-[url('https://res.cloudinary.com/dp2aacz0d/image/upload/v1734772428/graduation-diploma-certificate-copy-space_23-2148769717_pboazi.jpg')] bg-cover bg-center">
        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl w-full flex items-center justify-center h-full bg-gray-900 bg-opacity-40 lg:text-7xl font-bold text-center"
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
        >
          Explore Our Diploma Programs
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto md:px-6 py-16 relative">
        {/* Course Summary Section */}
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-gray-900 bg-opacity-10 backdrop-blur-lg p-8 rounded-xl mb-16 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-blue-300">
            Course Summary
          </h2>
          <p className="mb-8 text-lg leading-relaxed">
            Amigo Immigration Services offers a range of job-oriented Diploma
            and Certificate courses in the Hospitality Industry. Our programs
            are meticulously designed to equip you with the skills and knowledge
            essential for excelling in the global hospitality sector.
          </p>
          <Table
            aria-label="Course Summary Table"
            className="mb-8"
            shadow="none"
          >
            <TableHeader>
              <TableColumn className="text-blue-300">S.No</TableColumn>
              <TableColumn className="text-blue-300">Title</TableColumn>
              <TableColumn className="text-blue-300">Duration</TableColumn>
              <TableColumn className="text-blue-300">Eligibility</TableColumn>
            </TableHeader>
            <TableBody>
              {diplomas.map((diploma, index) => (
                <TableRow
                  key={diploma.slug}
                  className="hover:bg-white hover:bg-opacity-10 text-black dark:text-white transition-colors"
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{diploma.title}</TableCell>
                  <TableCell>{diploma.duration}</TableCell>
                  <TableCell>{diploma.eligibility}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <motion.div
            className="relative overflow-hidden rounded-lg h-64"
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              removeWrapper
              alt="Worker inspecting production"
              className="h-full w-full object-cover"
              src="https://res.cloudinary.com/dp2aacz0d/image/upload/v1734602451/male-technologist-white-protective-suit-controlling-production-food-beverage-factory_660230-121689_jqjq28.avif"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
              <p className="text-white text-lg font-semibold">
                Quality Control
              </p>
            </div>
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-lg h-64"
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              removeWrapper
              alt="Factory workers processing food"
              className="h-full w-full object-cover"
              src="https://res.cloudinary.com/dp2aacz0d/image/upload/v1734602719/gettyimages-1359339859-612x612_lzrczk.jpg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
              <p className="text-white text-lg font-semibold">
                Food Processing
              </p>
            </div>
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-lg h-64"
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              removeWrapper
              alt="Students in cooking class"
              className="h-full w-full object-cover"
              src="https://res.cloudinary.com/dp2aacz0d/image/upload/v1734602766/GettyImages-2048177034-1024x627_sicu13.jpg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
              <p className="text-white text-lg font-semibold">Culinary Arts</p>
            </div>
          </motion.div>
        </div>

        {/* Diploma Cards */}
        <div className="space-y-16">
          {diplomas.map((diploma, index) => (
            <motion.div
              key={diploma.slug}
              animate={{ opacity: 1, y: 0 }}
              id={`${diploma.slug}`}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="bg-white text-white bg-opacity-10 backdrop-blur-lg hover:shadow-xl transition-all duration-300"
                radius="sm"
              >
                <CardHeader className="bg-blue-600 text-white p-6">
                  <h3 className="text-3xl font-semibold">{diploma.title}</h3>
                </CardHeader>
                <CardBody className="space-y-8 p-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white text-white bg-opacity-10 p-4 rounded-lg">
                      <p className="font-semibold text-blue-300">Duration:</p>
                      <p>{diploma.duration}</p>
                    </div>
                    <div className="bg-white text-white bg-opacity-10 p-4 rounded-lg">
                      <p className="font-semibold text-blue-300">
                        Eligibility:
                      </p>
                      <p>{diploma.eligibility}</p>
                    </div>
                    <div className="bg-white text-white bg-opacity-10 p-4 rounded-lg">
                      <p className="font-semibold text-blue-300">
                        Paid Interships:
                      </p>
                      <p>6 Months</p>
                    </div>
                    <div className="bg-white text-white bg-opacity-10 p-4 rounded-lg">
                      <p className="font-semibold text-blue-300">
                        Seats Available:
                      </p>
                      <p>{diploma.seats}</p>
                    </div>
                  </div>
                  <Divider className="opacity-50" />
                  <div>
                    <h4 className="text-2xl font-semibold mb-4 text-blue-300">
                      Description:
                    </h4>
                    <div className="bg-white text-white bg-opacity-5 border-l-1 border-blue-500 rounded-lg p-2">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: diploma.description.html,
                        }}
                        className="space-y-4 text-lg"
                      />
                    </div>
                  </div>
                  <Divider className="opacity-50" />
                  <div>
                    <h4 className="text-2xl font-semibold mb-4 text-blue-300">
                      Course Contents:
                    </h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: diploma.courseContents.html,
                      }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg"
                    />
                  </div>
                </CardBody>
                <CardFooter className="justify-end p-6">
                  <Button
                    as="a"
                    className="font-semibold text-lg px-8 py-2"
                    color="primary"
                    href={`/apply?course=${diploma.slug}`}
                    size="lg"
                  >
                    Apply Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          <motion.div
            className="relative overflow-hidden rounded-lg h-64"
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              removeWrapper
              alt="Agriculture career"
              className="h-full w-full object-cover"
              src="https://res.cloudinary.com/dp2aacz0d/image/upload/v1734603062/Success-mantra-for-a-bright-career-in-Agriculture_fvfzlb.jpg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
              <p className="text-white text-lg font-semibold">
                Agriculture Careers
              </p>
            </div>
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-lg h-64"
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              removeWrapper
              alt="Worker at a dairy factory"
              className="h-full w-full object-cover"
              src="https://media.gettyimages.com/id/624745726/photo/worker-at-a-dairy-factory.jpg?s=612x612&w=0&k=20&c=jaumc-eDIl59_FIMS-eBybPeUjhaTkk08Mjy_M8V6bQ="
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
              <p className="text-white text-lg font-semibold">
                Dairy Production
              </p>
            </div>
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-lg h-64"
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              removeWrapper
              alt="Food industry worker"
              className="h-full w-full object-cover"
              src="https://res.cloudinary.com/dp2aacz0d/image/upload/v1734602894/0a83282a-d724-433a-aa14-e9827d122d0f.__CR0_0_970_600_PT0_SX970_V1____qy4e3k.jpg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
              <p className="text-white text-lg font-semibold">Food Industry</p>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Hero Section */}
    </div>
  );
};

export default Diploma;
