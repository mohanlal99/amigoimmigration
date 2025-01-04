import Link from "next/link";
import { Frown } from "lucide-react"; // Importing a Lucide icon

export const metadata = {
  title: "Page Not Found",
  description:
    "The page you are looking for does not exist. Return to the homepage to explore Amigo Immigration Services.",
  robots: "noindex, nofollow", // Ensures search engines don't index this page
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-16 px-6">
      <div className="text-center -pt-20">
        {/* Lucide icon for visual emphasis */}
        <Frown className="w-24 h-24 text-gray-600 mb-4" />
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Not Found</h2>
        <p className="text-lg text-gray-600 mb-6">
          Could not find the requested resource.
        </p>

        {/* Link styled as a button */}
        <Link
          className="inline-block px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
          href="/"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
