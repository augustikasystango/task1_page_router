import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { fetchCategories } from "../../api/Blogapi";
import{ Blogs} from  '../../types'
import BlogList from '@/components/BlogList';


export const getServerSideProps: GetServerSideProps<{ blogs: Blogs[] }> = async () => {
  const blogs = await fetchCategories();
  return {
    props: { blogs },
  };
};

function BlogPage({ blogs }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
   
    <BlogList blogs={blogs}/>
  );
}



export default BlogPage;
