import PostForm from "@/features/posts/components/PostForm";
import { getPost } from "@/features/posts/services/api";
import Container from "@/shared/components/Container";
import styles from "./page.module.css";

export const dynamic = "force-dynamic";  

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditPostPage({ params }: PageProps) {
  const { id } = await params;
  const post = await getPost(Number(id));

  return (
    <Container>
      <h1 className={styles.heading}>Postu redakte et</h1>
      <PostForm
        mode="edit"
        postId={post.id}
        initialTitle={post.title}
        initialBody={post.body}
        buttonText="Yenilə"
      />
    </Container>
  );
}
