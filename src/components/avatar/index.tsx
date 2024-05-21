import { nextAuthOptions } from "@/lib/next-auth/next-auth-options";
import { getServerSession } from "next-auth";
import Image from "next/image";

export function Avatar() {
  return (
    <Image
      src={"/logo.svg"}
      width={40}
      height={40}
      alt="logo duofinders"
      className="rounded-full"
    />
  );
}
