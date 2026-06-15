import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container">
      <h1>404- Sehife tapilmadi</h1>
      <p>Axtardiqiniz sehife movcud deyil.</p>
      <Link
      href="/"
      className="actions"
      >
      Ana sehifeye qayit
      </Link>
    </main>
  );
}
