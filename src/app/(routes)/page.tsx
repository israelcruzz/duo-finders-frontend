import { CreateAdPoster } from "@/components/create-ad-poster";
import { GameCard } from "@/components/game-card";
import { RecentAdsCard } from "@/components/recent-ads-card";
import { SearchInput } from "@/components/search-input";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";


export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {
  return (
    <main className="w-full h-full px-6 py-4 xl:pl-80 xl:py-4 flex flex-col gap-6">
      <SearchInput />

      <CreateAdPoster />

      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-white font-bold text-base xl:text-2xl">
            Games Populares
          </h1>
          <Link href="/games" className="text-[#650C71] text-sm">
            Ver Mais
          </Link>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-5 2xl:grid-cols-8 gap-8">
          {Array.from({ length: 5 }).map((_, index) => {
            return (
              <GameCard
                key={index}
                id={index.toString()}
                title="League of Legends"
                imageUri="/league-of-legends-image.svg"
                countAds={index}
              />
            );
          })}
        </div>
      </div>

      <div className="w-full flex flex-col gap-6 xl:flex-row">
        <div className="w-full xl:w-[290px] p-6 bg-[#2A2634] rounded-3xl">
          <h1 className="text-[#B8B8B8] font-medium text-base">
            Encontre seu duo
          </h1>

          <div className="flex gap-2 text-white">
            <span className="font-bold">AGORA</span>
            <Image src="/arrow-ad.svg" width={56.5} height={0} alt="arrow" />
          </div>

          <Image
            src="/recent-ads-image.svg"
            width={251}
            height={138}
            quality={100}
            alt="recent ads image"
          />
        </div>

        <div className="w-full p-6 bg-[#2A2634] rounded-3xl flex-1">
          <h1 className="font-semibold text-white text-base mb-6">
            Anúncios Recentes
          </h1>
          <div className="flex flex-col gap-3">
            {Array.from({ length: 3 }).map((_, index) => {
              return (
                <RecentAdsCard
                  key={index}
                  category="MMORPG"
                  gameId={index.toString()}
                  imageUri="/league-of-legends-image.svg"
                  title="League of Legends"
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
