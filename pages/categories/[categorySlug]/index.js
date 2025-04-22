
import { fetchCategories ,fetchCategoriesById } from "../../../Apis/Blogapi";
import Link from "next/link";
import Image from "next/image"

 function IndividualCategories({ item }) {
    
    return (
      <ul>
        <li key={item.id}>{item.category_details} </li>
        <Image src={item.image} width="120" height="200"/>
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
        fallback: true
    }
}


export async function getStaticProps(context) {
    const { categorySlug } = context.params;
    const allItems = await fetchCategories();
    const item = allItems.find(item => item.id === categorySlug);
  
    return {
      props: { item },
    };
  }
  export default IndividualCategories;
