'use client';

import { Skeleton } from '@heroui/react';

export default function Loading() {
  return (
    <div className="grid gap-2 p-10">
      <div className="flex gap-2 items-center">
        <Skeleton className="w-14 h-14 rounded-full" />
        <div className="grid gap-1">
          <Skeleton className="w-28 h-5 rounded-xl" />
          <Skeleton className="w-36 h-4 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
