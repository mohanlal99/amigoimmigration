"use client";

import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/react";
import {
  ArrowRight,
  Award,
  Briefcase,
  ChefHat,
  ForkKnife,
  Globe,
  LucideHousePlus,
  MapPin,
} from "lucide-react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  const services = [
    {
      name: "Explore Cruise Ship Internships",
      href: "/internship/cruise",
      icon: "ship",
    },
    {
      name: "Hospitality Careers in the USA",
      href: "/internship/usa",
      icon: "flag",
    },
    {
      name: "Opportunities in Australia",
      href: "/internship/australia",
      icon: "flag",
    },
    { name: "Work in the UAE", href: "/internship/uae", icon: "flag" },
    {
      name: "Internship Programs in France",
      href: "/internship/france",
      icon: "flag",
    },
  ];

  const diplomas = [
    {
      name: "Diploma in Food Production",
      icon: ChefHat,
      href: "/services/diploma-programs#food-production",
    },
    {
      name: "Diploma in Food & Beverage Service",
      icon: ForkKnife,
      href: "/services/diploma-programs#food-beverage-service",
    },
    {
      name: "Diploma in Front Office",
      icon: Briefcase,
      href: "/services/diploma-programs#front-office",
    },
    {
      name: "Diploma in Housekeeping",
      icon: LucideHousePlus,
      href: "/services/diploma-programs#housekeeping",
    },
  ];
  const destinations = [
    { name: "USA", color: "text-blue-600" },
    { name: "UAE", color: "text-green-600" },
    { name: "France", color: "text-red-600" },
    { name: "Australia", color: "text-yellow-600" },
  ];

  return (
    <div className="container mx-auto relative ">
      <div className="px-4 sm:px-6 lg:px-8 py-2 pb-6 md:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-600 font-medium text-sm mb-6">
              <Globe className="w-4 h-4 mr-2" />
              Global Opportunities Await
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                Amigo Immigration Services
              </span>
            </h1>

            <p className="  sm:text-xl text-gray-600 leading-relaxed mb-8">
              Your gateway to exceptional career opportunities in luxury hotels,
              cruise ships, and top global destinations. Experience guaranteed
              placements and comprehensive support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                fullWidth
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-xl hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
                size="lg"
                onClick={() => router.push("/services")}
              >
                Explore Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                fullWidth
                className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 font-medium rounded-xl hover:bg-purple-50 transition-all"
                size="lg"
                onClick={() => router.push("/apply")}
              >
                Apply Now
              </Button>
            </div>
          </div>

          <div className="relative lg:ml-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                removeWrapper
                alt="Luxury hotel concierge"
                className="w-full z-0  h-[300px] lg:h-[500px] z object-cover"
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80"
              />
              <div className="absolute  inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Floating achievement cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <p className="font-bold text-2xl text-gray-900">100+</p>
                  <p className="text-gray-600">Successful Placements</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-purple-600" />
                <p className="font-semibold text-gray-900">
                  50+ Global Destinations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
