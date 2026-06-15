"use client";

import styles from "./PostForm.module.css";
import { usePostForm } from "@/hooks/usePostForm";

interface PostFormProps {
  initialTitle?: string;
  initialBody?: string;
  onSubmit: (title: string, body: string) => Promise<void>;
  buttonText: string;
}

export default function PostForm({
  initialTitle = "",
  initialBody = "",
  onSubmit,
  buttonText,
}: PostFormProps) {
  const { title, setTitle, body, setBody, loading, error, handleSubmit, router } =
    usePostForm(onSubmit, initialTitle, initialBody);

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.field}>
        <label className={styles.label}>Başlıq</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.input}
          placeholder="Başlıq daxil edin"
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Mətn</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className={styles.textarea}
          placeholder="Mətn daxil edin"
          rows={5}
        />
      </div>

      <div className={styles.buttons}>
        <button
          type="button"
          onClick={() => router.back()}
          className={styles.cancelButton}
        >
          Geri
        </button>
        <button
          type="submit"
          disabled={loading}
          className={styles.submitButton}
        >
          {loading ? "Gözləyin..." : buttonText}
        </button>
      </div>
    </form>
  );
}