import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import CateogoriesPage from '../pages/categories'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
     <Link href="/categories">Categories Page</Link>
    </>
  );
}
