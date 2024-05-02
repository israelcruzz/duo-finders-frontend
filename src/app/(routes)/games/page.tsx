import { GameCard } from "@/components/game-card";
import { SearchInput } from "@/components/search-input";

export default function Games() {
  return (
    <main className="w-full h-full px-6 py-4 xl:pl-80 xl:py-4 flex flex-col gap-6">
      <SearchInput />

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
        {Array.from({ length: 24 }).map((_, index) => {
          return (
            <GameCard
              key={index}
              title="League of Legends"
              countAds={index * 2}
              imageUri="/league-of-legends-image.svg"
              id={index.toString()}
            />
          );
        })}
      </div>
    </main>
  );
}
