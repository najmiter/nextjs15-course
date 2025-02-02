type CustomerPageProps = {
  params: Promise<{ routes: string[] }>;
};

export default async function CustomerPage(props: CustomerPageProps) {
  const { routes } = await props.params;

  return (
    <div>
      <pre className="text-4xl">{JSON.stringify(routes, null, 2)}</pre>
    </div>
  );
}
