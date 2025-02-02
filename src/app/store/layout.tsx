import { PropsWithChildren } from 'react';

export default function StoreLayout({ children }: PropsWithChildren) {
  return (
    <main>
      <aside></aside>
      <section>{children}</section>
    </main>
  );
}
