"use client";

import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, ChevronRight, Menu, X } from "lucide-react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";

import Logo from "../Logo/logo";
import { ThemeSwitch } from "../theme-switch";

import menuData from "./menuData";

const Navbar = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [navbarMenu, setNavbarMenu] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <NextUINavbar className="flex w-full" maxWidth="2xl" position="sticky">
      <NavbarContent justify="start">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex" justify="end">
        {menuData.map((menuItem, index) => (
          <NavbarItem
            key={menuItem.id}
            className="relative p-2 rounded-md transition-all duration-200"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {/* Main Menu Link */}
            <Link className="flex items-center" href={menuItem.path}>
              <p
                className={`text-sm font-medium ${
                  pathname === menuItem.path
                    ? "text-primary-600 dark:text-white"
                    : "text-secondary-600 dark:text-white/70"
                } hover:text-primary transition-colors`}
              >
                {menuItem.title}
              </p>
            </Link>

            {/* Submenu (Dropdown) */}
            {menuItem.submenu && hoverIndex === index && (
              <ul className="absolute left-0 top-full  w-64 bg-background dark:bg-gray-800 shadow-lg rounded-md">
                {menuItem.submenu.map((submenuItem) => (
                  <li key={submenuItem.id}>
                    <Link
                      className="block px-4 py-2 text-sm text-foreground dark:text-gray-300 hover:text-primary hover:bg-accent rounded-md transition-colors"
                      href={submenuItem.path}
                    >
                      {submenuItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <ThemeSwitch />
        <NavbarItem className="lg:hidden">
          <NavbarMenuToggle />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="/apply">
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 group"
              size="md"
            >
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuData.map((menuItem) => (
          <NavbarMenuItem key={menuItem.id}>
            <div className="w-full">
              {/* Main Menu Item */}
              <Link
                className="flex items-center justify-between w-full text-foreground hover:text-primary transition-colors"
                href={menuItem.path}
              >
                {menuItem.title}
                {menuItem.submenu && <ChevronRight className="h-4 w-4" />}
              </Link>

              {/* Submenu Dropdown */}
              {menuItem.submenu && (
                <ul className="pl-4 mt-2 space-y-1 border-l-2 border-primary">
                  {menuItem.submenu.map((submenuItem) => (
                    <li key={submenuItem.id}>
                      <Link
                        className="block py-1 text-sm text-foreground-500 hover:text-primary transition-colors"
                        href={submenuItem.path}
                      >
                        {submenuItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
};

export default Navbar;
