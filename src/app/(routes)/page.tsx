import { CreateAdPoster } from "@/components/create-ad-poster";
import { GameCard } from "@/components/game-card";
import { SearchInput } from "@/components/search-input";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className="w-full h-full px-6 py-4 xl:pl-80 xl:py-4 flex flex-col gap-6">
      <SearchInput />

      <CreateAdPoster />

      <div className="w-full flex flex-col">
        <h1>Games Populares</h1>

        <div className="grid grid-cols-2 xl:grid-cols-5 gap-4">
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
      
        </div>
      </div>
    </main>
  );
}
