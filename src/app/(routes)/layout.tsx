"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineLogout } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { RxDragHandleHorizontal } from "react-icons/rx";

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuActive, setMenuActive] = useState<boolean>(true);

  return (
    <main
      className={`flex ${menuActive ? "mr-6" : "px-6 py-6"} justify-between`}
    >
      <div className="relative flex">
        <button
          className={`xl:hidden text-white ${menuActive && "hidden"}`}
          onClick={() => setMenuActive(true)}
        >
          <RxDragHandleHorizontal size={32} />
        </button>

        <div
          className={`absolute h-[100vh] min-w-72 bg-[#121212] flex flex-col p-6 justify-between border-r border-r-[#EFEFEF]/10 ${
            menuActive ? "" : "hidden"
          }`}
        >
          <section className="flex flex-col gap-6 flex-1">
            <div className="flex gap-2 items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.svg"
                  width={40}
                  height={40}
                  alt="logo duofinders"
                />
                <h1 className="text-white text-base font-semibold">
                  Duofinders
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
              <Link href="/">
                <nav className="p-4 text-white flex gap-2 font-medium bg-[#650C71] rounded-lg hover:bg-[#650C71]/90">
                  Home
                </nav>
              </Link>

              <Link href="/games">
                <nav className="p-4 text-white flex gap-2 font-medium rounded-lg hover:bg-black/20">
                  Games
                </nav>
              </Link>
            </div>
          </section>
          <section>
            <button className="text-white flex gap-3">
              <HiOutlineLogout size={24} />
              <h1 className="text-base">Logout</h1>
            </button>
          </section>
        </div>
      </div>

      {children}

      <section className="min-w-24 flex items-center justify-center py-4 xl:py-4">
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
