"use client";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { motion } from "framer-motion";
import { Star, StarHalf, Verified } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { reviews } from "./reviews";

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>
          {star <= rating ? (
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
          ) : star - 0.5 <= rating ? (
            <StarHalf className="w-5 h-5 text-yellow-400 fill-current" />
          ) : (
            <Star className="w-5 h-5 " />
          )}
        </span>
      ))}
    </div>
  );
};

const Review = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section ref={sectionRef} className="py-8 container mx-auto ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12  dark:">
          What Our Customers Say
        </h2>
        <motion.div
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          variants={containerVariants}
        >
          {reviews.map((review, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className=" shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardBody>
                  <div className="flex items-center mb-4">
                    <Avatar
                      className="mr-3 bg-primary-500 text-white "
                      name={review.name}
                      size="lg"
                    />
                    <div>
                      <h3 className="font-semibold text-lg  dark:">
                        {review.name}
                      </h3>
                      <StarRating rating={review.rating} />
                    </div>
                  </div>
                  <p className=" dark: italic">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </CardBody>
                <CardFooter className="border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm  dark: flex items-center gap-2">
                    Verified Customer <Verified size={16} />
                  </p>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Review;
