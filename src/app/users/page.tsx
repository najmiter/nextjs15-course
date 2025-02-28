export default async function UsersPage() {
  await new Promise((resolve) => setTimeout(resolve, 50000));
  const users = await fetch('https://jsonplaceholder.typicode.com/users/10')
    .then((response) => response.json())
    .then((json) => json);

  return (
    <div>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}
