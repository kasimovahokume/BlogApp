import Link from "next/link";
import Button from "@/shared/components/Button";
import styles from "./Header.module.css";

interface HeaderProps {
  title: string;
  actionLabel?: string;
  actionHref?: string;
}

export default function Header({ title, actionLabel, actionHref }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      {actionLabel && actionHref && (
        <Link href={actionHref}>
          <Button>{actionLabel}</Button>
        </Link>
      )}
    </header>
  );
}