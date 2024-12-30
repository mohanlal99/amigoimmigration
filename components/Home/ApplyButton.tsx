"use client";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import React from "react";

const ApplyButton = () => {
  const router = useRouter();

  return (
    <Button color="primary" size="lg" onClick={() => router.push("/apply")}>
      Apply for Internships
    </Button>
  );
};

export default ApplyButton;
