import { NextResponse } from "next/server";

export async function GET() {
  const jobData = [
    {
      id: 1,
      title: "Culinary Interns & Trainees",
      location: "USA Hotels",
      description: "Great opportunity for Culinary Interns & Trainees.",
      image:
        "https://res.cloudinary.com/dp2aacz0d/image/upload/v1734429405/lifestyle-people-learning-make-sushi_23-2149865312_f9kadc.jpg",
      link: "/apply",
    },
    {
      id: 2,
      title: "Vacancy for Chefs and Cooks",
      location: "USA Hotels",
      description: "Job openings for chefs and cooks in USA hotels.",
      image:
        "https://res.cloudinary.com/dp2aacz0d/image/upload/v1734429490/chef-working-together-professional-kitchen_23-2149727956_msv7xd.jpg",
      link: "/apply",
    },
    {
      id: 3,
      title: "Vacancy for Room Attendants",
      location: "UAE Hotels",
      description: "Job openings for room attendants in UAE hotels.",
      image:
        "https://res.cloudinary.com/dp2aacz0d/image/upload/v1734429550/chambermaid-hotel-room_23-2148095264_icnq0u.avif",
      link: "/apply",
    },
    {
      id: 4,
      title: "Vacancy for Kitchens and Front Office",
      location: "USA Hotels",
      description: "Openings for kitchen and front office roles.",
      image:
        "https://res.cloudinary.com/dp2aacz0d/image/upload/v1734429598/front-view-young-beautiful-lady-white-shirt-dark-jacket-black-trousers-along-with-young-man-discussing-work-daytime-building-job-activity_140725-15223_eiclp0.jpg",
      link: "/apply",
    },
    {
      id: 5,
      title: "Vacancy for Waiter and Waitress",
      location: "USA Hotels",
      description: "Exciting opportunities for waiter and waitress roles.",
      image:
        "https://res.cloudinary.com/dp2aacz0d/image/upload/v1734429627/young-confident-male-waiter-uniform-with-butterfly-neck-holding-tray-towel-red-background_140725-146776_z5zqng.avif",
      link: "/apply",
    },
    {
      id: 6,
      title: "Culinary Internship in USA",
      location: "Hilton Hotels, USA",
      description: "Chef de Partie & Demi Chef de Partie roles available.",
      image:
        "https://res.cloudinary.com/dp2aacz0d/image/upload/v1734429839/maxresdefault_ca233z.jpg",
      link: "/apply",
    },
  ];

  return NextResponse.json(jobData);
}
