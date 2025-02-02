// type ProductPageProps = {
//   params: Promise<{ id: string }>;
// };

// export default async function ProductPage(props: ProductPageProps) {
//   const { id } = await props.params;

//   return <div>Product with id {id}</div>;
// }

'use client';

import { use } from 'react';
import { useParams } from 'next/navigation';

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default function ProductPage(props: ProductPageProps) {
  const { id } = use(props.params);
  // const { id } = useParams();

  return <div>Product with id {id}</div>;
}
