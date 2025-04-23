import { fetchCategories } from "../../../api/BlogApi";

import { Blogs } from '@/types';
import IndividualCategory from "@/components/IndividualCategory";

import type {
 
  GetStaticProps,
  GetStaticPropsContext
} from 'next'


export async function getStaticPaths() {
  const result = await fetchCategories();
  const paths = result.map((item) => ({
    params: { categorySlug: item.id },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}

export const getStaticProps = (async (context: GetStaticPropsContext) => {
  const { categorySlug } = context.params as { categorySlug: string };
  const allItems = await fetchCategories();
  const item = allItems.find((item) => item.id === categorySlug);
  if (!item) {
    return {
      notFound: true,
    };
  }
  return {
    props: { item },
    revalidate: 30,
  };
}) satisfies GetStaticProps<{ item: Blogs }>;

const IndividualCategories: React.FC<{item:Blogs}> = ({ item })=>{

  return <IndividualCategory item={item} />;
}


export default IndividualCategories;
