import NextAuth, { NextAuthConfig } from 'next-auth';
import Google from 'next-auth/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter';

import { db } from '@/utils/db';

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  trustHost: true,
  secret: process.env.NEXT_AUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      token.role = 'admin';
      if (trigger === 'update') {
        token.productCount = session.productCount;
      }
      if (user) {
        token.productCount = await db.product.count();

        token.id = user.id;
      }
      return token;
    },
    async session({ session, user, token, trigger, newSession }) {
      if (trigger === 'update') {
        session.user.productCount = newSession.productCount;
      }
      if (token?.productCount !== undefined) {
        session.user.productCount = token.productCount as number;
      }
      session.user.role = token.role as 'admin';
      if (user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
} satisfies NextAuthConfig);
