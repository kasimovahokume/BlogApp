"use client";

import Button from "@/shared/components/Button";
import Container from "@/shared/components/Container";
import styles from "./error.module.css";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <Container>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Xeta bas verdi</h1>
        <p className={styles.message}>
          {error.message || "Naməlum xəta baş verdi"}
        </p>
        <Button onClick={() => reset()}>Yeniden cehd et</Button>
      </div>
    </Container>
  );
}
