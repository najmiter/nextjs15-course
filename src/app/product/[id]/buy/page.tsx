type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function page(props: ProductPageProps) {
  const { id } = await props.params;
  return <>Buy product page {id}</>;
}
