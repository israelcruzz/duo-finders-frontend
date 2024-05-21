import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/global.css";
import { ReactNode } from "react";
// import { AuthProvider } from "@/context/auth-provider";
import { SessionProvider } from "next-auth/react";

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
        {/* <AuthProvider> */}
        {children}
        {/* </AuthProvider> */}
      </body>
    </html>
  );
}
