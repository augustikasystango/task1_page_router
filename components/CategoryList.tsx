import { Blogs } from "@/types";
import Link from "next/link";
import {ROUTES} from "@/constants/routes"
import { MESSAGES } from "@/constants/messages";


const CategoryList: React.FC<{ products: Blogs[] }> = ({ products })=> {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto">

      <div className="mb-6 ">
          <Link href={ROUTES.HOME}>
            <span className="text-blue-600 font-semibold  hover:text-blue-500">
              {MESSAGES.HOME}
            </span>
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          {MESSAGES.BLOG_CATEGORY}
        </h1>
        <ul className="space-y-4">
          {products.map((category) => (
            <li
              key={category.id}
              className="bg-white rounded-xl shadow-md transition-shadow p-4 hover:shadow-blue-300"
            >
              <Link href={`${ROUTES.CATEGORIES}/${category.id}`}>
                <span className="text-lg font-semibold rounded-md p-3 text-blue-600 ">
                  {category.blogs}
                </span>
                <div className="text-sm text-gray-500 mt-2 italic">
                  By <span className="font-semibold text-blue-600">{category.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryList;
