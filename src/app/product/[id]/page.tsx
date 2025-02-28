import { notFound } from 'next/navigation';

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage(props: ProductPageProps) {
  const { id } = await props.params;

  if (id == '11') notFound();
  const r = Math.random();
  if (r < 0.5)
    throw new Error('Product not found. This is coming from our fake error: ');

  return <div>Product with id {id}</div>;
}
