// featuresData.ts
import { Briefcase, Plane, Clock } from "lucide-react";

import { Service, ServicesType } from "./types";

export const featuresData: ServicesType[] = [
  {
    id: 1,
    icon: <Clock />,
    title: "Quick Service",
    paragraph:
      "Efficient placement solutions, with a commitment to delivering results in record time.",
    href: "/services",
  },
  {
    id: 2,
    icon: <Plane />,
    title: "Work & Travel Visa",
    paragraph:
      "Explore new cultures while working abroad through our specialized work and travel programs.",
    href: "/about",
  },
  {
    id: 3,
    icon: <Briefcase />,
    title: "Career Consulting",
    paragraph:
      "Guidance and expertise to help you establish a successful career both locally and internationally.",
    href: "/about/career-consultant",
  },
];

export const services: Service[] = [
  {
    title: " Career Guidance for Job Seekers",
    description:
      "Explore tailored career guidance, resume building, and skill development services designed to help you land your dream job.",
    image:
      "https://res.cloudinary.com/dp2aacz0d/image/upload/v1732098795/woman_chef_qwvypw_hc33yf.jpg",
    href: "/services/job-seekers", // Updated path
  },
  {
    title: " Recruitment Solutions for Employer",
    description:
      "Find qualified candidates effortlessly with our recruitment solutions, designed to match top talent with employer needs.",
    image:
      "https://res.cloudinary.com/dp2aacz0d/image/upload/v1732098793/2intership_image_w5a5jv.avif",
    href: "/services/employers", // Updated path
  },
  {
    title: "Guaranteed Job Placement Programs",
    description:
      "Join our industry-recognized programs to secure guaranteed job placements in leading companies worldwide.",
    image:
      "https://res.cloudinary.com/dp2aacz0d/image/upload/v1732098795/3Recruitment_iwgbrf_k0uqzj.avif",
    href: "/services/placement-programs", // Updated path
  },
];
