"use client";

import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);
  const router = useRouter();

  return (
    <section className="relative z-10  py-[80px] sm:py-[100px] md:py-[120px] h-screen">
      <div className="container mx-auto h-full">
        <div className="-mx-4 flex h-full flex-col justify-center items-center">
          <div className="w-full px-4 text-center">
            <h2 className="mb-2 text-[40px] font-bold leading-none  sm:text-[60px] md:text-[80px] lg:text-[100px]">
              404
            </h2>
            <h2 className="mb-3 text-[18px] font-semibold leading-tight  sm:text-[20px] md:text-[22px] lg:text-[24px]">
              Something went wrong!
            </h2>
            <p className="mb-8 text-lg  sm:text-[16px] md:text-[18px] lg:text-[20px]">
              The page you are looking for may have been deleted.
            </p>
            <Button
              className="px-6 py-2 mr-3 hover:bg-primary    rounded-full hover:-dark transition duration-300"
              onClick={() => reset()}
            >
              Try again
            </Button>
            <Button
              className="px-6 py-2 hover:bg-primary    rounded-full hover:-dark transition duration-300"
              onClick={() => router.push("/")}
            >
              Go to Home
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-between space-x-3 sm:space-x-5 md:space-x-8 lg:space-x-14">
        <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]" />
        <div className="flex h-full w-1/3">
          <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]" />
          <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]" />
        </div>
        <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]" />
      </div>
    </section>
  );
}
