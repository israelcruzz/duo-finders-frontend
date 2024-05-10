import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/global.css";
import NextAuthSessionProvider from "@/providers/session";
import { ReactNode } from "react";
import { AuthProvider } from "@/context/auth-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | DuoFinders",
    default: "DuoFinders",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#121212]`}>
        <AuthProvider>
          <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
