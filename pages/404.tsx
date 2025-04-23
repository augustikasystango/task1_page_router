import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
      <h1 className="text-5xl font-bold text-red-500 mb-4">404</h1>
      
      <p className="text-xl text-gray-700 mb-6">{"Oops! We can't find what you're looking for."}</p>

      
      <Link href="/categories">
        <span className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-500 rounded-md shadow-md transition transform hover:scale-105">
          Go Back to Categories
        </span>
      </Link>
    </div>
  );
}
