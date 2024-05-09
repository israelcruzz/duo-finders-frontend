import NextAuth, { NextAuthOptions } from "next-auth";
import Discord from "next-auth/providers/discord";

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    Discord({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_SECRET_KEY as string,
    }),
  ],
};

export const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
