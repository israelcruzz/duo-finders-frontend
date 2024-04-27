import { Metadata } from "next";
import { FiSearch } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className="w-full h-full px-6 py-4 xl:pl-80 xl:py-4">
      <div className="w-full h-[52px] p-6 bg-black text-[#7B7B7B] flex rounded-lg justify-between items-center gap-2">
        <input
          type="text"
          placeholder="Search Games..."
          className="bg-transparent outline-none flex-1"
        />
        <FiSearch size={24} />
      </div>
    </main>
  );
}
