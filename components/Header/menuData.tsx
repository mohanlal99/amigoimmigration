import { Menu } from "@/types";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 5,
    title: "About Us", // This corresponds to the navItems about section
    path: "/about",
    newTab: false,
    submenu: [
      { id: 51, title: "Who We Are", path: "/about/who-we-are", newTab: false },
      {
        id: 52,
        title: "Career Consultant",
        path: "/about/career-consultant",
        newTab: false,
      },
      {
        id: 54,
        title: "Our Specialization",
        path: "/about/specialization",
        newTab: false,
      },
    ],
  },
  {
    id: 6,
    title: "Our Services",
    path: "/services",
    newTab: false,
  },
  {
    id: 7,
    title: "Internship", // This corresponds to the navItems internship section
    path: "/internship",
    newTab: false,
    submenu: [
      {
        id: 71,
        title: "Hospitality Internship in the USA",
        path: "/internship/usa",
        newTab: false,
      },
      {
        id: 72,
        title: "Hospitality Internship in Australia",
        path: "/internship/australia",
        newTab: false,
      },
      {
        id: 74,
        title: "Hospitality Internship in UAE",
        path: "/internship/uae",
        newTab: false,
      },
      {
        id: 77,
        title: "Hospitality Internship in Cruise",
        path: "/internship/cruise",
        newTab: false,
      },
      {
        id: 78,
        title: "Hospitality Internship in France",
        path: "/internship/france",
        newTab: false,
      },
    ],
  },
  {
    id: 8,
    title: "Study Abroad",
    path: "/study-abroad",
    newTab: false,
  },
  {
    id: 9,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
];

export default menuData;
