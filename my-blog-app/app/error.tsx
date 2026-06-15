"use client";
interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="container">
      <h1 className="heading">Xeta bas verdi</h1>
      <p>{error.message || "Namelum xeta bas verdi"}</p>
      <button onClick={() => reset()} className="actions">
        yeniden cehd et
      </button>
    </main>
  );
}
