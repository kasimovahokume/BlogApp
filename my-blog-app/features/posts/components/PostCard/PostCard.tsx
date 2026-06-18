import { Post } from "@/features/posts/types/post";
import styles from "./PostCard.module.css";
import Link from "next/link";
import Button from "@/shared/components/Button";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const body = post.body ?? "";
  const truncatedBody = body.length > 100 ? body.substring(0, 100) + "..." : body;

  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <h2 className={styles.title}>{post.title || "Başlıqsız"}</h2>
        <p className={styles.body}>{truncatedBody}</p>
      </div>
      <Link href={`/posts/${post.id}`} className={styles.linkWrapper}>
        <Button size="small">Ətraflı</Button>
      </Link>
    </article>
  );
}