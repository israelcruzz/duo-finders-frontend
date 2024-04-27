import Image from "next/image";

export function CreateAdPoster() {
  return (
    <div className="w-full relative">
      <Image
        src="/create-ad-image.svg"
        width={856}
        height={269}
        alt="create you ad"
        className="w-full"
      />

      <h1 className="absolute top-0 m-4 text-xs xl:m-12 text-white xl:text-4xl font-medium flex flex-col">
        <span>JOGUE COM</span>
        <span>SEU DUO </span>
        <span>AGORA</span>
      </h1>

      <button className="absolute top-12 m-4 text-white text-[8px] bg-[#650C71] px-2 py-1 rounded-lg font-semibold xl:top-40 xl:m-12 xl:px-6 xl:py-2 xl:text-xs">
        CRIAR ANUNCIO
      </button>
    </div>
  );
}
