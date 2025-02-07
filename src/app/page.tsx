'use client';

// import { auth } from '@/utils/auth';
import { Button } from '@heroui/react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default /* async */ function Home() {
  // const session =await auth();
  const { data, update } = useSession();

  // useEffect(() => {
  //   update({ productCount: 10 });
  // }, []);

  return (
    <main className="text-2xl">
      <h1>Home page</h1>

      <div className="grid gap-2">
        {!data?.user && (
          <Button onPress={() => signIn('google')}>Sign in with google</Button>
        )}
        {!!data?.user && <Button onPress={() => signOut()}>Sign out</Button>}
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </main>
  );
}
