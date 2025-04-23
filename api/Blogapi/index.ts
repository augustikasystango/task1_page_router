import {Blogs} from '../../types';
import { API_URLS } from '@/constants/url';



export const fetchCategories=async():Promise<Blogs[]>=>{
    try{
        const res = await fetch(API_URLS.FETCH_API_URL);
        const data:Blogs[] = await res.json();
        return data;
    }catch(error){
        console.error((error as Error).message );
        return [];

    }
}

