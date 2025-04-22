const baseUrl = `https://67eb8191aa794fb3222a78fb.mockapi.io/blogs/event`;

export const fetchCategories=async()=>{
    try{
        const res = await fetch(baseUrl);
        const data = await res.json();
        return data;
    }catch(error){
        console.error(error.message );

    }
}

export const fetchCategoriesById=async(id)=>{
    try{
        const items = await fetchCategories(`https://67eb8191aa794fb3222a78fb.mockapi.io/blogs/event/${id}`);
        const paths = items.map((item)=>({
            params : {id : item.id}
        }))
        return paths;

        
    }catch(error){
        console.error(error.message);
    }
}