import Link from 'next/link';

export default function Home() {
  return (
    <main className="text-7xl">
      <h1>Home page</h1>
      <div className="grid gap-2">
        <Link href="/product/1">Product 1</Link>
        <Link href="/product/2">Product 2</Link>
        <Link href="/product/3">Product 3</Link>
      </div>
    </main>
  );
}
