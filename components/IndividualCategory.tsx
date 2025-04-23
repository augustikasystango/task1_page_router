// components/IndividualCategory.tsx
import { Blogs } from '@/types/index';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  item: Blogs;
}

const IndividualCategory: React.FC<Props> = ({ item }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="text-center mt-10 text-gray-600 text-xl">Loading...</div>;
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
};

export default IndividualCategory;
