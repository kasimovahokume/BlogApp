import { useState } from "react";
import { useRouter } from "next/navigation";

export function usePostForm(
  onSubmit: (title: string, body: string) => Promise<void>,
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
      await onSubmit(title, body);
      router.push("/");
    } catch {
      setError("Xəta baş verdi. Yenidən cəhd edin.");
    } finally {
      setLoading(false);
    }
  }

  return { title, setTitle, body, setBody, loading, error, handleSubmit, router };
}