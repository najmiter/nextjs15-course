import Link from 'next/link';

export default function Home() {
  return (
    <main className="text-7xl">
      <h1>Home page</h1>
      <div className="grid gap-2">
        <Link href="/store">Store page</Link>
        <Link href="/store/product">Product page</Link>
      </div>
    </main>
  );
}
