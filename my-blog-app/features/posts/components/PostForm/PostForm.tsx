"use client";

import Input from "@/shared/components/Input";
import styles from "./PostForm.module.css";
import { usePostForm } from "@/features/posts/hooks/usePostForm";
import Textarea from "@/shared/components/Textarea";
import Button from "@/shared/components/Button";

interface PostFormProps {
  mode: "create" | "edit";
  postId?: number;
  initialTitle?: string;
  initialBody?: string;
  buttonText: string;
}

export default function PostForm({
  mode,
  postId,
  initialTitle = "",
  initialBody = "",
  buttonText,
}: PostFormProps) {
  const { title, setTitle, body, setBody, loading, error, handleSubmit, router } =
    usePostForm(mode,postId,initialTitle, initialBody);

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {error && <p className={styles.errorBanner}>{error}</p>}

      <Input
      label="Başlıq"
      name="title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Başlıq daxil edin"
      />

      <Textarea
      label="Mətn"
      name="body"
      value={body}
      onChange={(e) => setBody(e.target.value)}
      placeholder="Mətn daxil edin"
      rows={6}
      />
      <div className={styles.buttons}>
         <Button
          type="button"
          variant="secondary"
          onClick={() => router.back()}
          disabled={loading}
        >
          Geri
        </Button>
        <Button type="submit" disabled={loading}>
          {loading ? "Gözləyin..." : buttonText}
        </Button>
        </div>
    </form>
  );
}