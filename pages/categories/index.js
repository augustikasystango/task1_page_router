
import { fetchCategories } from "../../Apis/Blogapi";
import Link from "next/link";
import { useRouter } from "next/router";
function CateogoriesPage({ products }) {
    
    return (
        <ul>
            {
                products.map((category) => (
                    <ul key={category.id}>
                        <Link href={`/categories/${category.id}`}>{category.blogs}</Link>
                    </ul>
                ))
            }
        </ul>
    )
}


export async function getStaticProps() {
    const data = await fetchCategories();
    console.log(data);
    return {
        props: {
            products: data
        }
    }
}

export default CateogoriesPage;
