import DeleteButton from "@/components/DeleteButton";
import { getPost } from "@/services/api";
import Link from "next/link";

interface PageProps {
    params: Promise<{id: string}>
}

export default async function PostDetailPage({params}: PageProps) {
    const {id} = await params;
    const post = await getPost(Number(id));

    return (
        <main className="container">
            <h1 className="heading">{post.title}</h1>
            <p>{post.body}</p>

            <div className="actions">
                <Link href={`/posts/${post.id}/edit`}>Redaktə et</Link>
                <DeleteButton id={post.id}/>
            </div>
        </main>
    )
}