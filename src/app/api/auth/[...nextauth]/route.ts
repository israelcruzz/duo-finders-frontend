import NextAuth, { NextAuthOptions } from "next-auth";
import Discord from "next-auth/providers/discord";

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    Discord({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_SECRET_KEY as string,
      authorization: process.env.NEXT_PUBLIC_AUTH_LINK as string,
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl + "/";
    },
    async signIn({ account }){
      const discordToken = account?.access_token;

      const discordUser = await fetch(`https://discord.com/api/users/@me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${discordToken}`
        }
      }).then((res) => res.json())

      return true
    }
  },

};

export const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
