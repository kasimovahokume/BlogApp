import { Post } from "@/types/post";
import { notFound } from "next/navigation";

const BASE_URL = "https://blog-api-t6u0.onrender.com/posts";

export async function getPosts(): Promise<Post[]> {
    const res = await fetch(BASE_URL)
    if(!res.ok) throw new Error("Postlar yuklenmedi")
    return res.json();
}

export async function getPost(id: number): Promise<Post> {
    const res = await fetch(`${BASE_URL}/${id}`);
    if(res.status === 404) notFound();
    if(!res.ok) throw new Error ("Post tapilmadi");
    return res.json();
}

export async function createPost(data: Omit<Post, "id">): Promise<Post> {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
    });
    if(!res.ok) throw new Error("Post yaradilmadi");
    return res.json();
}

export async function updatePost(id:number, data: Omit<Post, "id">): Promise<Post> {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data), 
    })
    if(!res.ok) throw new Error("Post yenilenmedi")
    return res.json();    
}

export async function deletePost(id: number): Promise<void> {
   const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
   })
   if(!res.ok) throw new Error ("Post silinmedi");
}