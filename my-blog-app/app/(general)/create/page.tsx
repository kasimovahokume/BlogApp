import PostForm from "@/features/posts/components/PostForm";
import Container from "@/shared/components/Container";
import styles from "./page.module.css";
export default function CreatePage() {
  return (
    <Container>
     <h1 className={styles.heading}>Yeni post yarat</h1>
      <PostForm mode="create" buttonText="Yarat" />
    </Container>
  );
}