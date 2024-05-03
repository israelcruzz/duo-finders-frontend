import Ad from "@/components/ad";
import Image from "next/image";

interface ViewAdsForGameParams {
  params: {
    id: string;
  };
}

export default async function ViewAdsForGame({ params }: ViewAdsForGameParams) {
  return (
    <main className="w-full h-full px-6 py-4 xl:pl-80 xl:py-4 flex flex-col gap-6">
      <div className="flex gap-6">
        <Image
          src="/league-of-legends-image.svg"
          width={128}
          height={128}
          alt="game"
          className="w-32 h-32 rounded-full object-cover"
          quality={100}
        />

        <div className="flex flex-col justify-center">
          <h1 className="text-white font-semibold text-base">
            League Of Legends
          </h1>
          <h2 className="font-medium text-[#9F9F9F]/60 text-base ">MMORPG</h2>
        </div>
      </div>

      <h1 className="text-white text-2xl font-semibold">Anúncios</h1>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
        {Array.from({ length: 24 }).map((_, index) => {
          return (
            <Ad
              key={index}
              hourStart={2}
              hourEnd={4}
              id={index.toString()}
              name="Israel"
              useVoiceChannel
              weekDays="seg"
              yearsPlaying={4}
            />
          );
        })}
      </div>
    </main>
  );
}
