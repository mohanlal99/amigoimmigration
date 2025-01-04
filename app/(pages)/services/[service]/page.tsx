import { notFound } from "next/navigation";
import { FC } from "react";

import Diplomas from "../../../../components/Services/our-programs";

import EmployerServices from "@/components/Services/Employers";
import JobSeekers from "@/components/Services/Job-seekers";
import LoanServices from "@/components/Services/programs/LoanServices";
import Placement from "@/components/Services/programs/Placement";
import PremiumServices from "@/components/Services/programs/premium-services";

interface ServiceProps {
  params: Promise<{
    service: string;
  }>;
}

const ServicePage: FC<ServiceProps> = async ({ params }) => {
  const { service } = await params; // Await params

  // Use a switch statement for better readability
  switch (service) {
    case "job-seekers":
      return <JobSeekers />;
    case "employers":
      return <EmployerServices />;
    case "placement-programs":
      return <Placement />;
    case "premium-career":
      return <PremiumServices />;
    case "loan-services":
      return <LoanServices />;
    case "diploma-programs":
      return <Diplomas />;
    default:
      return notFound(); // Handle unmatched cases
  }
};

export default ServicePage;
