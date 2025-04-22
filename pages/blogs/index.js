import { fetchCategories } from "../../api/Blogapi";

function BlogPage({blogs}){
   return (
    <>
        {
            blogs.map((blog)=><li key={blog.id}>{blog.blogs}</li>)
        }
    </>
   )
}

export async function getServerSideProps(){
    const blogs = await fetchCategories();
    return {
        props : { blogs }
    }
}


export default BlogPage;