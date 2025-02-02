import Link from 'next/link';
import { PropsWithChildren } from 'react';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex items-start gap-3 p-4 h-screen overflow-hidden">
      <aside className="flex-1 bg-slate-100 space-y-10 p-4 rounded-xl h-full">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <nav>
          <ul className="grid gap-4">
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/dashboard/orders">Orders</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <section className="flex-[6]">{children}</section>
    </div>
  );
}
