
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { fetchCategories } from "../../api/BlogApi";

import { Blogs } from '@/types';
import CategoryList from '@/components/CategoryList';


interface CategoriesPageProps {
    products:Blogs[]
}
const CategoriesPage = ({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <CategoryList products={products} />;
};

export const getServerSideProps: GetServerSideProps<CategoriesPageProps> = async () => {
    const data:Blogs[] = await fetchCategories();
    return {
      props: {
        products: data,
      },
    };
  };

export default CategoriesPage;
