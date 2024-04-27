import Image from "next/image";
import Link from "next/link";

export function RecentAdsCard() {
  return (
    <div className="w-full flex justify-between">
      <div className="flex gap-2">
        <Image
          src="/league-of-legends-image.svg"
          width={46}
          height={46}
          alt="game card"
          className="w-[46px] h-[46px] rounded-md"
          style={{ objectFit: "cover" }}
        />

        <div className="flex flex-col">
          <h1 className="font-medium text-xs xl:text-base text-white">
            League of Legends
          </h1>
          <span className="text-[#FAFAFA]/40 text-[8px] xl:text-sm">
            MMORPG
          </span>
        </div>
      </div>
      <div>
        <Link
          href="/ad"
          className="rounded-lg border border-white/10 text-white font-medium text-xs p-1 xl:p-2.5"
        >
          Ver Anúncios
        </Link>
      </div>
    </div>
  );
}
