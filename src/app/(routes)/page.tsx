import { CreateAdPoster } from "@/components/create-ad-poster";
import { SearchInput } from "@/components/search-input";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className="w-full h-full px-6 py-4 xl:pl-80 xl:py-4 flex flex-col gap-6">
      <SearchInput />

      <CreateAdPoster />
    </main>
  );
}
