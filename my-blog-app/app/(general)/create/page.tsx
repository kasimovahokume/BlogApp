import PostForm from "@/components/PostForm";
import { createPost } from "@/services/api";


export default function CreatePage() {
    async function handleCreate(title:string,body:string) {
        await createPost({title,body});
    }

    return (
        <main className="container">
            <h1 className="heading">Yeni post yarat</h1>
            <PostForm 
            onSubmit={handleCreate}
            buttonText="Yarat"
            />
        </main>
    )
}