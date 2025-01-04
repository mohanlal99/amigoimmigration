"use client";

import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Facebook, Instagram, Phone, Twitter } from "lucide-react";

import { siteConfig } from "@/config/site";

const SocialMedia = () => {
  return (
    <div className="flex space-x-4">
      {/* Phone Button */}
      <Button isIconOnly className="p-0">
        <Link
          className="w-full h-full flex items-center justify-center"
          href="tel:+919887699703"
          rel="noopener noreferrer"
        >
          <Phone className="h-5 w-5" />
        </Link>
      </Button>

      {/* Facebook Button */}
      <Button isIconOnly className="p-0">
        <Link
          isExternal
          className="w-full h-full flex items-center justify-center"
          href={siteConfig.links.facebook}
        >
          <Facebook className="h-5 w-5" />
          <span className="sr-only">Facebook</span>
        </Link>
      </Button>

      {/* Twitter Button */}
      <Button isIconOnly className="p-0">
        <Link
          isExternal
          className="w-full h-full flex items-center justify-center"
          href={siteConfig.links.twitter}
        >
          <Twitter className="h-5 w-5" />
          <span className="sr-only">Twitter</span>
        </Link>
      </Button>

      {/* Skype Button */}

      {/* Instagram Button */}
      <Button isIconOnly className="p-0">
        <Link
          isExternal
          className="w-full h-full flex items-center justify-center"
          href={siteConfig.links.instagram}
        >
          <Instagram className="h-5 w-5" />
          <span className="sr-only">Instagram</span>
        </Link>
      </Button>
    </div>
  );
};

export default SocialMedia;
