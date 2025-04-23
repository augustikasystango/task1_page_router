import { GetStaticProps } from 'next';
import { fetchCategories } from "../../api/Blogapi";
import Link from "next/link";
import { Blogs } from '@/types/Blogs';

interface CategoriesPageProps {
    products:Blogs[]
}

const CategoriesPage: React.FC<CategoriesPageProps> = ({ products }) =>{
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
}

export const getStaticProps: GetStaticProps<CategoriesPageProps> = async () => {
    const data:Blogs[] = await fetchCategories();
    return {
      props: {
        products: data,
      },
    };
  };

export default CategoriesPage;
