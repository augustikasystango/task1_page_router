import {Blogs} from '../../types'
const baseUrl = `https://67eb8191aa794fb3222a78fb.mockapi.io/blogs/event`;


export const fetchCategories=async():Promise<Blogs[]>=>{
    try{
        const res = await fetch(baseUrl);
        const data:Blogs[] = await res.json();
        return data;
    }catch(error){
        console.error((error as Error).message );
        return [];

    }
}

