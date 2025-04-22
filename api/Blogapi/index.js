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

