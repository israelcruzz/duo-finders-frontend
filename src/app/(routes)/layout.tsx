"use client";

import { LogoutButton } from "@/components/logout-button";

import { nextAuthOptions } from "@/lib/next-auth/next-auth-options";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineLogout } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { RxDragHandleHorizontal } from "react-icons/rx";

type pagesInAplication = "home" | "games";

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuActive, setMenuActive] = useState<boolean>(true);
  const [pageActive, setPageActive] = useState<pagesInAplication>("home");
  7;

  return (
    <main className={`flex mr-6  justify-between`}>
      <div className="relative flex items-start z-40">
        <button
          className={`ml-6 xl:ml-0 text-white py-6`}
          onClick={() => setMenuActive(true)}
        >
          <RxDragHandleHorizontal size={32} />
        </button>

        <div
          className={`fixed h-full min-w-72 bg-[#121212] flex flex-col p-6 justify-between border-r border-r-[#EFEFEF]/10 ${
            menuActive ? "" : "hidden"
          }`}
        >
          <section className="flex flex-col gap-6 flex-1">
            <div className="flex gap-2 items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src={"/logo.svg"}
                  width={40}
                  height={40}
                  alt="logo duofinders"
                />
                <h1 className="text-white text-base font-semibold">
                  DuoFinders
                </h1>
              </div>

              <button
                className="xl:hidden text-white"
                onClick={() => setMenuActive(false)}
              >
                <IoCloseOutline size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <Link href="/" onClick={() => setPageActive("home")}>
                <nav
                  className={`p-4 text-white flex gap-2 font-medium rounded-lg ${
                    pageActive === "home"
                      ? "bg-[#650C71] hover:bg-[#650C71]/90"
                      : "bg-transparent hover:bg-black/20"
                  }`}
                >
                  Home
                </nav>
              </Link>

              <Link href="/games" onClick={() => setPageActive("games")}>
                <nav
                  className={`p-4 text-white flex gap-2 font-medium rounded-lg ${
                    pageActive === "games"
                      ? "bg-[#650C71] hover:bg-[#650C71]/90"
                      : "bg-transparent hover:bg-black/20"
                  }`}
                >
                  Games
                </nav>
              </Link>
            </div>
          </section>
          <section>
            <LogoutButton />
          </section>
        </div>
      </div>

      {children}

      <section className="h-full min-w-24 flex justify-center py-4 xl:py-4">
        <Link href="/profile">
          <Image
            src="/avatar.svg"
            width={56}
            height={56}
            alt="profile image"
            className="rounded-full"
          />
        </Link>
      </section>
    </main>
  );
}
