// components/IndividualCategory.tsx
import { Blogs } from '@/types/index';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { MESSAGES} from '@/constants/messages';
import {ROUTES} from '@/constants/routes'


const IndividualCategory: React.FC<{item:Blogs}> = ({ item }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="text-center mt-10 text-gray-600 text-xl">{MESSAGES.LOADING}</div>;
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
        <div className="text-lg text-justify text-gray-700 mt-6 px-4 leading-relaxed">
          {MESSAGES.BLOG_CONTENT}
        </div>
       

        <Link href={ROUTES.CATEGORIES}>
          <span className="inline-block mt-4  p-2 rounded-md text-blue-600 text-lg font-semibold hover:text-blue-500 hover:shadow-md hover:shadow-blue-400 transition duration-300 ease-in-out transform hover:scale-105">
            {MESSAGES.GO_BACK}
          </span>
        </Link>
        <Link href={ROUTES.HOME}>
          <span className="inline-block mt-4 p-2 rounded-md text-blue-600 text-lg font-semibold hover:text-blue-500 hover:shadow-md hover:shadow-blue-400 transition duration-300 ease-in-out transform hover:scale-105">
            {MESSAGES.HOME}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default IndividualCategory;
