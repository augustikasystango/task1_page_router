
import { fetchCategories} from "../../../api/Blogapi";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image"

 function IndividualCategories({ item }) {
    const router = useRouter();

    if (router.isFallback) {
      return <div>Loading...</div>;
    }
  
    if (!item) {
      return <div>Category not found</div>;
    }
    
    return (
      <ul>
        <li key={item.id}>{item.category_details} </li>
        <Image src={item.image} width="120" height="200" alt="Category Image"/>
        <Link href="/categories">Back</Link>
      </ul>
    );
}

export async function getStaticPaths() {

    const result = await fetchCategories();
    const paths = result.map((item)=>({
        params : {categorySlug : item.id}
    }))
    return {
        paths,
        fallback:"blocking"
        // fallback: true
    }
}


export async function getStaticProps(context) {
    const { categorySlug } = context.params;
    const allItems = await fetchCategories();
    const item = allItems.find(item => item.id === categorySlug);
  
    return {
      props: { item },
      revalidate : 5
    };
  }
  export default IndividualCategories;
