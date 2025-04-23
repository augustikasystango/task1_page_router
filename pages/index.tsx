import {MESSAGES} from "@/constants/messages"
import { ROUTES } from "@/constants/routes";


import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">{MESSAGES.WELCOME_TEXT}</h1>
        <p className="text-gray-600 mb-8 text-lg">{MESSAGES.HERO_TEXT}</p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href={ROUTES.CATEGORIES}>
            <span className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-500 hover:shadow-blue-400 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
             {MESSAGES.BROWSE_LIST}
            </span>
          </Link>

          {/* <Link href="/blogs">
            <span className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-500 hover:shadow-blue-400 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
              View Latest Blogs
            </span>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
