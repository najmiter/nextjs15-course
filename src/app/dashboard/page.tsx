import { auth } from '@/utils/auth';
import { forbidden, unauthorized } from 'next/navigation';

export default async function Dashbaord() {
  const session = await auth();

  if (!session) {
    unauthorized();
  }

  if ((session?.user as any)?.role !== 'admin') {
    forbidden();
  }

  return <div>Dashboard page</div>;
}
