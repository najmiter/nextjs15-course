import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-1 left-0 w-full h-20 bg-slate-200">
      <div className="max-w-screen-2xl mx-auto">
        <Link href="/">Home</Link>
      </div>
    </nav>
  );
}
