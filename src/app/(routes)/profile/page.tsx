import Image from "next/image";

export default function Profile() {
  return (
    <main className="w-full h-full px-6 py-4 xl:pl-80 xl:py-4 flex flex-col gap-6">
      <div className="w-full">
        <section className="w-full bg-[#B7ABFF]/60 rounded-t-3xl h-28"></section>
        <section className="w-full bg-[#2A2634] rounded-b-3xl h-28"></section>

        <div className="flex gap-6 -mt-44 ml-6">
          <Image
            src="/profile-image.svg"
            width={128}
            height={128}
            alt="profile-image"
            quality={100}
            className="object-cover w-32 h-32 rounded-full"
          />
          <div className="flex flex-col justify-end">
            <h1 className="text-white font-semibold text-base">Israel</h1>
            <h2 className="font-medium text-[#9F9F9F]/60 text-base ">
              Israel#1412
            </h2>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h1 className="text-white text-2xl font-semibold ">Meus Anúncios</h1>
        
      </section>
    </main>
  );
}
