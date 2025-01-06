"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { motion, AnimatePresence } from "framer-motion";
import { Image } from "@nextui-org/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import { getJobData, Job } from "./getJobs";

const LatestJobsPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data: Job[] = await getJobData();

        setJobs(data);
      } catch {
        setError("Error fetching jobs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % jobs.length);
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + jobs.length) % jobs.length);
  };

  if (loading) {
    return (
      <section className="py-20 ">
        <div className="container mx-auto text-center">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-6xl font-semibold mb-4">Loading Jobs...</h2>
            <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin mx-auto" />
          </motion.div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 ">
        <div className="container mx-auto text-center">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-red-600">Error</h2>
            <p className="text-xl">{error}</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 group relative w-full">
      <svg
        className="absolute inset-0 w-full h-full"
        fill="none"
        height="100%"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            height="20"
            id="dotPattern"
            patternUnits="userSpaceOnUse"
            width="20"
            x="0"
            y="0"
          >
            <circle
              className="opacity-15 group-hover:opacity-30 group-hover:animate-pulse"
              cx="2"
              cy="2"
              fill="currentColor"
              r="1"
            />
          </pattern>
        </defs>
        <rect fill="url(#dotPattern)" height="100%" width="100%" />
      </svg>
      <div className="container mx-auto px-4">
        <motion.h2
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-blue-800 dark:text-blue-200"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Latest Jobs and Events
        </motion.h2>

        {jobs.length === 0 ? (
          <div className="flex justify-center items-center w-full">
            <p className="text-xl text-gray-600">
              No jobs available at the moment. Check back later!
            </p>
          </div>
        ) : (
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                animate={{ opacity: 1, x: 0 }}
                className="flex justify-center items-center gap-6 flex-wrap"
                exit={{ opacity: 0, x: direction === "right" ? -100 : 100 }}
                initial={{ opacity: 0, x: direction === "right" ? 100 : -100 }}
                transition={{ duration: 0.5 }}
              >
                {[0, 1, 2].map((offset) => {
                  const job = jobs[(currentIndex + offset) % jobs.length];

                  return (
                    <Card
                      key={job.id}
                      isHoverable
                      className="w-full sm:w-72 md:w-80 lg:w-3/12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                      <CardBody className="p-0">
                        <Image
                          removeWrapper
                          alt={job.title}
                          className="w-full h-52 object-cover"
                          src={job.image}
                        />
                        <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-full text-sm font-semibold">
                          {job.location}
                        </div>
                      </CardBody>
                      <CardFooter className="flex flex-col items-start p-6">
                        <h3 className="text-xl font-bold mb-2 text-blue-800 dark:text-blue-200">
                          {job.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          {job.description}
                        </p>
                        <Button
                          as="a"
                          className="w-full"
                          color="primary"
                          endContent={<ArrowRight className="ml-2" />}
                          href={job.link}
                          variant="shadow"
                        >
                          Apply Now
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex justify-center mt-8 gap-4">
              <Button
                isIconOnly
                className="w-12 h-12 rounded-full"
                color="primary"
                variant="flat"
                onClick={prevSlide}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                isIconOnly
                className="w-12 h-12 rounded-full"
                color="primary"
                variant="flat"
                onClick={nextSlide}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestJobsPage;
