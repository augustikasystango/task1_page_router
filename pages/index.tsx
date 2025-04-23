// import Link from "next/link";


// export default function Home() {
//   return (
//     <>
//      <Link href="/categories">Categories Page</Link>
//      <Link href="/blogs">Latest Blogs</Link>
//     </>
//   );
// }

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to the Blog Hub</h1>
        <p className="text-gray-600 mb-8 text-lg">Explore categories and discover the latest blogs</p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/categories">
            <span className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-500 hover:shadow-blue-400 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
              Browse Categories
            </span>
          </Link>

          <Link href="/blogs">
            <span className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-500 hover:shadow-blue-400 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
              View Latest Blogs
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
