'use client';

import { useRouter } from 'next/navigation';
import { HeroUIProvider } from '@heroui/react';
import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren, useEffect, useState } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Session } from 'next-auth';

export default function MainProvider({
  session,
  children,
}: PropsWithChildren<{ session: Session | null }>) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider
        attribute="class"
        forcedTheme="light"
        defaultTheme="light"
      >
        <SessionProvider session={session}>{children}</SessionProvider>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
