import React from "react";
import { Image } from "@nextui-org/image";

import Apply from "@/components/Apply";

const ApplyPage = () => {
  return (
    <div className="min-h-screen  bg-[url('https://res.cloudinary.com/dp2aacz0d/image/upload/v1733227120/apply-backgroud_foztbf.avif')] bg-cover bg-center bg-no-repeat flex items- justify-center py-6 px- sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full space-y-8  bg-opacity-90 rounded-xl ">
        <div className="flex flex-col  lg:flex-row gap-8">
          {/* Left side with image and SVGs */}
          <div className=" bg-white flex items-center justify-center flex-col dark:bg-black dark:bg-opacity-50 bg-opacity-50 lg:w-1/2 space-y-6 p-3 rounded-xl">
            <Image
              removeWrapper
              alt="Hospitality internship"
              className="rounded-lg hidden lg:block  w-full h-64 object-cover"
              height={300}
              src="https://res.cloudinary.com/dp2aacz0d/image/upload/v1733227104/apply-Intership-Image_oj4hyz.jpg"
            />
            <div className="flex  justify-center space-x-8">
              <svg
                className="w-16 h-16 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
              <svg
                className="w-16 h-16 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </div>
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold ">
                Start Your Global Career Journey
              </h2>
              <p className="">
                Join our international internship program and gain valuable
                experience in the hospitality industry worldwide.
              </p>
              <ul className="text-left  space-y-2">
                <li className="flex items-center">
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
                  Hands-on experience in top hotels
                </li>
                <li className="flex items-center">
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
                  Cultural immersion opportunities
                </li>
                <li className="flex items-center">
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
                  Professional networking
                </li>
                <li className="flex items-center">
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
                  Career development workshops
                </li>
              </ul>
            </div>
          </div>

          {/* Right side with the Apply component */}
          <div className="lg:w-1/2">
            <Apply />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;
