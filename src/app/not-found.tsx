import Link from 'next/link';
import { FcHighPriority } from 'react-icons/fc';

export default function NotFound() {
  return (
    <div className="h-screen grid place-content-center">
      <div className="space-y-4">
        <FcHighPriority size={100} className="mx-auto" />
        <h1 className="text-xl text-foreground-600 font-bold">404 Not Found</h1>
        <Link href="/" className="mx-auto w-fit cursor-pointer block">
          Go Home
        </Link>
      </div>
    </div>
  );
}
