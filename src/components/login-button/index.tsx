"use client";

import { IoLogoDiscord } from "react-icons/io5";

import { useAuth } from "@/context/auth-provider";
import { signIn } from "next-auth/react";

export function LoginButton() {
  const { auth } = useAuth();

  return (
    <button
      className="w-full bg-[#282B30] p-3 text-base flex items-center justify-center text-white font-bold gap-3 rounded hover:bg-[#282B30]/90"
      onClick={() => auth()}
    >
      <IoLogoDiscord size={24} />
      Continuar com o Discord
    </button>
  );
}
