import { fetchCategories } from "../../../api/Blogapi";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { Blogs } from '@/types/Blogs';

import type {
 
  GetStaticProps,
  GetStaticPropsContext
} from 'next'

interface IndividualPageProps{
  item : Blogs
}


export async function getStaticPaths() {
  const result = await fetchCategories();
  const paths = result.map((item) => ({
    params: { categorySlug: item.id },
  }));
  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps = (async (context: GetStaticPropsContext) => {
  const { categorySlug } = context.params as { categorySlug: string };
  const allItems = await fetchCategories();
  const item = allItems.find((item) => item.id === categorySlug);
  if (!item) {
    return {
      notFound: true,
    };
  }
  return {
    props: { item },
    //revalidate: 5,
  };
}) satisfies GetStaticProps<{ item: Blogs }>;

const IndividualCategories: React.FC<IndividualPageProps> = ({ item })=>{
  const router = useRouter();

  if (router.isFallback) {
    return <div className="text-center mt-10 text-gray-600 text-xl">Loading...</div>;
  }

  if (!item) {
    return <div className="text-center mt-10 text-red-600 text-xl">Category not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-6 max-w-xl w-full text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{item.category_details}</h2>
        
        <div className="flex justify-center mb-4">
          <Image
            src={item.image}
            width={200}
            height={300}
            alt="Category Image"
            className="rounded-md shadow-md"
          />
        </div>

        <Link href="/categories">
          <span className="inline-block mt-4 p-2 rounded-md text-blue-600 text-lg font-semibold hover:text-blue-500 hover:shadow-md hover:shadow-blue-400 transition duration-300 ease-in-out transform hover:scale-105">
          Back 
          </span>
        </Link>
      </div>
    </div>
  );
}


export default IndividualCategories;
