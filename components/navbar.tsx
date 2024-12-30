// "use client";

// import { Button } from "@nextui-org/button";
// import { Link } from "@nextui-org/link";
// import {
//     NavbarBrand,
//     NavbarContent,
//     NavbarItem,
//     NavbarMenu,
//     NavbarMenuToggle,
//     Navbar as NextUINavbar,
// } from "@nextui-org/navbar";
// import { ArrowRight } from "lucide-react";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import menuData from "./Header/menuData";
// import { Logo } from "./icons";
// import { ThemeSwitch } from "./theme-switch";

// const Navbar = () => {
//   const [hoverIndex, setHoverIndex] = useState<number | null>(null);
//   const pathname = usePathname();

//   return (
//     <NextUINavbar
//       className={`flex w-full`}
//       height={85}
//       maxWidth="2xl"
//       position="sticky"
//     >
//       <NavbarContent justify="start">
//         <NavbarBrand>
//           <Logo />
//         </NavbarBrand>
//       </NavbarContent>

//       <NavbarContent className="hidden lg:flex" justify="end">
//         {menuData.map((menuItem, index) => (
//           <NavbarItem
//             key={menuItem.id}
//             className="relative bg--500 p-1 px-2 rounded-md border-2"
//             onMouseEnter={() => setHoverIndex(index)}
//             onMouseLeave={() => setHoverIndex(null)}
//           >
//             <Link href={menuItem.path}>
//               <p
//                 className={`${
//                   pathname === menuItem.path
//                     ? "text-primary-600 dark:text-white"
//                     : "text-secondary-600 dark:text-white/70"
//                 }`}
//               >
//                 {menuItem.title}
//               </p>
//             </Link>
//             {menuItem.submenu && hoverIndex === index && (
//               <ul className="absolute mt-1 top-full bg-white dark:bg-gray-900 rounded hover:shadow-lg">
//                 {menuItem.submenu.map((submenuItem) => (
//                   <li key={submenuItem.id}>
//                     <Link
//                       className="block px-4 py-2 text-sm dark:text-gray-200 text-gray-800 hover:text-white font-bold hover:bg-gray-900 dark:hover:bg-primary-500"
//                       href={submenuItem.path}
//                     >
//                       {submenuItem.title}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </NavbarItem>
//         ))}
//       </NavbarContent>

//       <NavbarMenu className="pb-16">
//         <ul>
//           {menuData.map((menuItem) => (
//             <li key={menuItem.id}>
//               <Link href={menuItem.path}>{menuItem.title}</Link>
//               {menuItem.submenu && (
//                 <ul className="mt-2">
//                   {menuItem.submenu.map((submenuItem) => (
//                     <li key={submenuItem.id}>
//                       <Link
//                         className="block px-4 py-2 text-sm text-primary-600 hover:bg-gray-100 dark:hover:bg-gray-800"
//                         href={submenuItem.path}
//                       >
//                         {submenuItem.title}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </NavbarMenu>

//       <NavbarContent justify="end">
//         <ThemeSwitch />
//         <NavbarItem className="lg:hidden">
//           <NavbarMenuToggle />
//         </NavbarItem>
//         <NavbarItem className="hidden lg:flex">
//           <Link href="/apply">
//             <Button
//               className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 group"
//               size="md"
//             >
//               Apply Now
//               <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
//             </Button>
//           </Link>
//         </NavbarItem>
//       </NavbarContent>
//     </NextUINavbar>
//   );
// };

// export default Navbar;
