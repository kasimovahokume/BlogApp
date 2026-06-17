import { useState } from "react";
import { useRouter } from "next/navigation";
import { createPost, updatePost } from "@/features/posts/services/api";

export function usePostForm(
  mode: "create" | "edit",
  postId: number | undefined,
  initialTitle = "",
  initialBody = ""
) {
  const router = useRouter();
  const [title, setTitle] = useState(initialTitle);
  const [body, setBody] = useState(initialBody);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!title.trim() || !body.trim()) {
      setError("Başlıq və mətn boş ola bilməz!");
      return;
    }

    try {
      setLoading(true);
      setError("");

      if (mode === "create") {
        await createPost({title, body});
      } else {
        await updatePost(postId!, {title,body});
      }
      router.push("/");
    } catch {
      setError("Xəta baş verdi. Yenidən cəhd edin.");
    } finally {
      setLoading(false);
    }
  }

  return { title, setTitle, body, setBody, loading, error, handleSubmit, router };
}