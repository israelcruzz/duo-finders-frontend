import NextAuth, { NextAuthOptions, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import Discord from "next-auth/providers/discord";
import { DiscordProfile } from "next-auth/providers/discord";

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    Discord({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_SECRET_KEY as string,
      authorization: process.env.NEXT_PUBLIC_AUTH_LINK as string,
      profile(profile: DiscordProfile) {
        return {
          id: profile.id.toString(),
          username: profile.username,
          email: profile.email,
          avatar: profile.avatar,
          discordProfile: profile,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ account }) {
      const discordToken = account?.access_token;

      const discordUser = await fetch(`https://discord.com/api/users/@me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${discordToken}`,
        },
      }).then((res) => res.json());

      return discordUser;
    },
    
    async jwt({ account, token, profile }) {
      if (account) {
        token.discordProfile = profile as DiscordProfile;
      }

      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      session.user.discordProfile = token.discordProfile as DiscordProfile;

      return session;
    },

    async redirect({ url, baseUrl }) {
      return baseUrl + "/";
    },
  },
};

