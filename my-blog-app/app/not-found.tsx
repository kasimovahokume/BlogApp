import Button from "@/shared/components/Button";
import Container from "@/shared/components/Container";
import Link from "next/link";
import styles from "./not-found.module.css"
export default function NotFound() {
  return (
    <Container>
      <div className={styles.wrapper}>
        <h1 className={styles.code}>404</h1>
        <h2 className={styles.heading}>Səhifə tapılmadı</h2>
        <p className={styles.message}>
          Axtardığınız səhifə mövcud deyil və ya silinib.
        </p>
        <Link href="/">
          <Button>Ana səhifəyə qayıt</Button>
        </Link>
      </div>
    </Container>
  );
}
