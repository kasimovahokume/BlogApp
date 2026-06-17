"use client";

import styles from "./DeleteButton.module.css";
import { useRouter } from "next/navigation";
import Button from "@/shared/components/Button";
import Modal from "@/shared/components/Modal";
import { deletePost } from "@/features/posts/services/api";
import { useState } from "react";

interface DeleteButtonProps {
  id: number;
}

export default function DeleteButton({ id }: DeleteButtonProps) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function openModal() {
    setIsModalOpen(true);
    setError("");
  }

  function closeModal() {
    if (loading) return;
    setIsModalOpen(false);
  }

  async function handleConfirmDelete() {
    try {
      setLoading(true);
      setError("");
      await deletePost(id);
      router.push("/");
      router.refresh();
    } catch {
      setError("Post silinərkən xəta baş verdi. Yenidən cəhd edin.");
      setLoading(false);
    }
  }

  return (
    <div>
      <Button variant="danger" onClick={openModal}>
        Sil
      </Button>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Postu silmək istəyirsiniz?"
      >
        <p className={styles.message}>
          Bu əməliyyat geri qaytarıla bilməz. Post tamamilə silinəcək.
        </p>

        {error && <div className={styles.error}>{error}</div>}

        <div className={styles.actions}>
          <Button variant="secondary" onClick={closeModal} disabled={loading}>
            Ləğv et
          </Button>
          <Button
            variant="danger"
            onClick={handleConfirmDelete}
            disabled={loading}
          >
            {loading ? "Silinir..." : "Bəli, sil"}
          </Button>
        </div>
      </Modal>
    </div>
  );
}
