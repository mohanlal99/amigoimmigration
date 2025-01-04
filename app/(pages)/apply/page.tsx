import React from "react";
import { Image } from "@nextui-org/image";

import Apply from "@/components/Apply";

const ApplyPage = () => {
  return (
    <div className="min-h-screen bg-[url('https://res.cloudinary.com/dp2aacz0d/image/upload/v1733227120/apply-backgroud_foztbf.avif')] bg-cover bg-center bg-no-repeat flex items-center justify-center py-12 px-1 sm:px-2 lg:px-8">
      <div className="max-w-7xl w-full space-y-8 bg-white bg-opacity-95 dark:bg-gray-900 dark:bg-opacity-95 rounded-xl shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left side with the Apply component */}
          <div className="lg:w-1/2 p-2">
            <Apply />
          </div>

          {/* Right side with enhanced content */}
          <div className="lg:w-1/2 bg-gray-100 dark:bg-gray-800 p-3 flex flex-col justify-between">
            <div className="space-y-6">
              <Image
                alt="Hospitality internship"
                className="rounded-lg w-full h-64 object-cover"
                height={300}
                src="https://res.cloudinary.com/dp2aacz0d/image/upload/v1733227104/apply-Intership-Image_oj4hyz.jpg"
                width={600}
              />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Embark on Your Global Career Journey
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Our international internship program offers unparalleled
                opportunities in the hospitality industry. Gain valuable
                experience, immerse yourself in diverse cultures, and build a
                global network that will propel your career forward.
              </p>
              <ul className="space-y-3">
                {[
                  "Hands-on experience in world-class hotels",
                  "Cultural immersion opportunities",
                  "Extensive professional networking",
                  "Career development workshops",
                  "Mentorship from industry leaders",
                  "International certification opportunities",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-700 dark:text-gray-200"
                  >
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;
