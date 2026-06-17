
import styles from "./LoadingSpinner.module.css";

interface LoadingSpinnerProps {
  message?: string;
}

export default function LoadingSpinner({ message = "Yüklənir..." }: LoadingSpinnerProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner}></div>
      <p className={styles.text}>{message}</p>
    </div>
  );
}