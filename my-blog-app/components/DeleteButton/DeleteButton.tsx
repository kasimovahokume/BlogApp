"use client";

import styles from "./DeleteButton.module.css"
import { deletePost } from "@/services/api";
import { useRouter } from "next/router";
import { useState } from "react";


interface DeleteButtonProps {
  id: number;
}

export default function DeleteButton({id}: DeleteButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    const confirmed = confirm("bu postu silirsen?")
    if (!confirmed) return;

    try {
      setLoading(true)
      await deletePost(id);
      router.push("/");
    } catch {
      alert("Post silinerken xeta oldu")
      setLoading(false)
    }
  }

  return (
    <button
    onClick={handleDelete}
    disabled={loading}
    className={styles.button}
    >
      {loading ? "Silinir..." : "sil"}
    </button>
  )
}