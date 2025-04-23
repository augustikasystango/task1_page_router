import { Blogs } from "@/types";
import Link from "next/link";

interface Props {
  products: Blogs[];
}

const CategoryList: React.FC<Props> = ({ products }) => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Blog Categories
        </h1>
        <ul className="space-y-4">
          {products.map((category) => (
            <li
              key={category.id}
              className="bg-white rounded-xl shadow-md transition-shadow p-4 hover:shadow-blue-300"
            >
              <Link href={`/categories/${category.id}`}>
                <span className="text-lg font-semibold rounded-md p-3 text-blue-600 ">
                  {category.blogs}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryList;
