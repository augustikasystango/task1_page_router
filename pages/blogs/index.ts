import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { fetchCategories } from "../../api/Blogapi";
import{ Blogs} from  '../../types/Blogs'


export const getServerSideProps: GetServerSideProps<{ blogs: Blogs[] }> = async () => {
  const blogs = await fetchCategories();
  return {
    props: { blogs },
  };
};

function BlogPage({ blogs }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Latest Blogs
        </h1>
        
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <li
              key={blog.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-blue-300 hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <p className="text-lg font-semibold text-gray-800">{blog.blogs}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}



export default BlogPage;
