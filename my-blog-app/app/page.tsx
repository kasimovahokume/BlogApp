import PostCard from "@/features/posts/components/PostCard";
import { getPosts } from "@/features/posts/services/api";
import { Post } from "@/features/posts/types/post";
import Container from "@/shared/components/Container";
import Header from "@/shared/components/Header";
import styles from "./page.module.css";

export default async function Home() {
  const posts = await getPosts();
  return (
    <Container>
      <Header 
      title="Blog" 
      actionLabel="+ Post Yarat"
      actionHref="/create" 
      />
      {posts.length === 0 ? (
        <p className={styles.empty}>Heç bir post yoxdur.</p>
      ) : (
        <div className={styles.list}>
          {posts.map((post: Post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </Container>
  );
}
