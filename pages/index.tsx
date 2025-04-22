import Link from "next/link";


export default function Home() {
  return (
    <>
     <Link href="/categories">Categories Page</Link>
     <Link href="/blogs">Latest Blogs</Link>
    </>
  );
}
