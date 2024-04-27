import { FiSearch } from "react-icons/fi";

export function SearchInput() {
  return (
    <div className="w-full h-[52px] p-6 bg-black text-[#7B7B7B] flex rounded-lg justify-between items-center gap-2 cursor-pointer">
      <input
        type="text"
        placeholder="Search Games..."
        className="bg-transparent outline-none flex-1"
      />
      <FiSearch size={24} />
    </div>
  );
}
