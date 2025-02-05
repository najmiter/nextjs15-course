import { db } from '@/utils/db';
import Link from 'next/link';

export default async function Home() {
  const products = await db.product.createManyAndReturn({
    data: [
      { name: 'Product 1', price: 100 },
      { name: 'Product 2', price: 200 },
    ],
  });

  const res = await fetch('http://localhost:3000/api/get-user', {
    method: 'POST',
    body: JSON.stringify({
      id: Date.now(),
      data: 'DEFAULT DATA',
    }),
  });

  const data = await res.json();

  return (
    <main className="text-2xl">
      <h1>Home page</h1>
      <div className="grid gap-2">
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <pre>{JSON.stringify(products, null, 2)}</pre>
      </div>
    </main>
  );
}
