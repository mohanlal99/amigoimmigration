import { Link } from "@nextui-org/link";
import { Earth, Plane } from "lucide-react";
import React from "react";

const Logo = () => {
  return (
    <Link
      className={`group relative flex items-center scale-80 gap-3 transition-all duration-300 `}
      href="/"
    >
      <div className="relative">
        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 opacity-75 blur transition duration-300 group-hover:opacity-100" />
        <div className="relative rounded-full  p-2 dark:bg-gray-800">
          <Earth className="h-10 w-10 text-primary transition-all duration-300 group-hover:rotate-180" />
          <Plane className="absolute -right-1 -top-1 h-5 w-5 text-yellow-500 transform -rotate-45 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-3xl font-extrabold leading-none tracking-tight bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Amigo
        </span>
        <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Immigration
        </span>
      </div>
      <div className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-yellow-400 to-orange-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
    </Link>
  );
};

export default Logo;
