import PostForm from "@/components/PostForm";
import { getPost,updatePost } from "@/services/api";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditPostPage({ params }: PageProps) {
  const { id } = await params;
  const post = await getPost(Number(id));

  async function handleUpdate(title: string, body: string) {
    await updatePost(Number(id), { title, body });
  }

  return (
    <main className="container">
      <h1 className="heading">Postu redakte et</h1>
      <PostForm
        initialTitle={post.title}
        initialBody={post.body}
        onSubmit={handleUpdate}
        buttonText="Yenilə"
      />
    </main>
  );
}
