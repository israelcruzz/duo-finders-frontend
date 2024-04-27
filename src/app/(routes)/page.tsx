import { SearchInput } from "@/components/search-input";
import { Metadata } from "next";
import { FiSearch } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className="w-full h-full px-6 py-4 xl:pl-80 xl:py-4">
      <SearchInput />
    </main>
  );
}
