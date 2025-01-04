"use client";

import { Button, Link } from "@nextui-org/react";
import { Linkedin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useRouter } from "next/navigation";

import { siteConfig } from "@/config/site";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      link: siteConfig.links.facebook,
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      link: siteConfig.links.instagram,
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      link: siteConfig.links.twitter,
    },
    {
      name: "YouTube",
      icon: <Youtube className="h-5 w-5" />,
      link: siteConfig.links.youtube,
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      link: siteConfig.links.linkedin,
    },
  ];

  const servicesLinks = [
    { name: "Job Seekers", href: "/services/job-seekers" },
    { name: "Employers", href: "/services/employers" },
    { name: "Guaranteed Placement", href: "/services/placement-programs" },
    { name: "Premium Career Services", href: "/services/career-services" },
    { name: "Loan Services", href: "/services/loan-services" },
    { name: "Diploma Programs", href: "/services/diploma-programs" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-conditions" },
    { name: "Contact Us", href: "/contact" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <footer className="bg-[#0f172a] text-gray-300 py-8">
      <div className="container mx-auto px-4">
        {/* Brand */}
        <div className="flex gap-2 mb-8">
          <span className="px-3 py-1 border border-white text-white">
            Amigo
          </span>
          <span className="px-3 py-1 bg-white text-black">
            Immigration Services
          </span>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-2 md:gap-4">
          {/* Follow Us Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[1px] flex-1 bg-gray-700" />
              <h3 className="text-blue-500 font-semibold">FOLLOW US</h3>
              <div className="h-[1px] flex-1 bg-gray-700" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {servicesLinks.map((link) => (
                <Link
                  key={link.name}
                  className="text-blue-200 hover:text-blue-600 transition-colors"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[1px] flex-1 bg-gray-700" />
              <h3 className="text-blue-500 font-semibold">LEGAL</h3>
              <div className="h-[1px] flex-1 bg-gray-700" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  className="text-blue-200 hover:text-blue-600 transition-colors"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media & Subscribe */}
        <div className="mt-8 flex flex-col items-center gap-6">
          <div className="flex justify-start md:justify-end space-x-4">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                isIconOnly
                aria-label={social.name}
                className="text-white"
                size="sm"
                variant="ghost"
                onClick={() => router.push(social.link)}
              >
                {social.icon}
              </Button>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/20 text-center text-sm">
          <p>
            © {currentYear} Amigo Immigration Services | All Rights Reserved
          </p>
          <p className="mt-2 text-xs">
            Student Life | Non-discrimination Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
