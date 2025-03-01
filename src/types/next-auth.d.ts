import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      productCount: number;
      role: 'admin' | 'user';
    } & DefaultSession['user'];
  }
}
