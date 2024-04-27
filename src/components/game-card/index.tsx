import Image from "next/image";

export function GameCard() {
  return (
    <div className="w-[148px] h-[141px] xl:w-[167px] flex flex-col">
      <Image
        src="/league-of-legends-image.svg"
        quality={100}
        width={167}
        height={94}
        alt="game card"
        className="rounded-lg"
      />
      <h1 className="font-medium text-white mt-2">League of Legends</h1>
      <span className="font-normal text-[#C4C4C4]">5 Anúncios</span>
    </div>
  );
}
