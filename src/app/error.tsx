'use client';

import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  // const router = useRouter();

  return (
    <div className="grid place-content-center h-screen gap-2 text-center">
      <h1 className="text-lg font-semibold">Error</h1>
      <p className="text-sm">{error.message}</p>
      <Button onPress={reset} color="success">
        Reset
      </Button>
    </div>
  );
}
