import DeleteButton from "@/features/posts/components/DeleteButton";
import { getPost } from "@/features/posts/services/api";
import Link from "next/link";
import Container from "@/shared/components/Container";
import Button from "@/shared/components/Button";
import styles from "./page.module.css";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PostDetailPage({ params }: PageProps) {
  const { id } = await params;
  const post = await getPost(Number(id));

  return (
    <Container>
       <article className={styles.article}>
        <h1 className={styles.heading}>{post.title}</h1>
        <p className={styles.body}>{post.body}</p>

        <div className={styles.actions}>
          <Link href={`/posts/${post.id}/edit`}>
            <Button>Redaktə et</Button>
          </Link>
          <DeleteButton id={post.id} />
        </div>
      </article>
    </Container>
  );
}
