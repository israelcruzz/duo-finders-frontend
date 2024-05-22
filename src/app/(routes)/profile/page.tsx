import { IAd } from "@/@types/entities/ad";
import MeAd from "@/components/me-ad";
import { nextAuthOptions } from "@/lib/next-auth/next-auth-options";
import { api } from "@/services/api";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

interface fetchAdsRequest {
  data: IAd[];
}

const fetchAds = async () => {
  const ads: fetchAdsRequest = await api.get("/user/ads");

  return ads;
};

export default async function Profile() {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    redirect("/login");
  }

  const discordImage = `https://cdn.discordapp.com/avatars/${session?.user.discordProfile.id}/${session?.userApi.avatar}.png`;

  const ads = await fetchAds();

  return (
    <main className="w-full h-full px-6 py-4 xl:pl-80 xl:py-4 flex flex-col gap-6">
      <div className="w-full">
        <section className="w-full bg-[#000000]/60 rounded-t-3xl h-28"></section>
        <section className="w-full bg-[#2A2634] rounded-b-3xl h-28"></section>

        <div className="flex gap-6 -mt-44 ml-6">
          <Image
            src={discordImage}
            width={128}
            height={128}
            alt="profile-image"
            quality={100}
            className="object-cover w-32 h-32 rounded-full"
          />
          <div className="flex flex-col justify-end">
            <h1 className="text-white font-semibold text-base">
              {session.userApi.name}
            </h1>
            <h2 className="font-medium text-[#9F9F9F]/60 text-base ">
              @{session.userApi.discord}
            </h2>
          </div>
        </div>
      </div>

      <section className="mt-12 flex flex-col gap-6">
        <h1 className="text-white text-2xl font-semibold ">Meus Anúncios</h1>

        {ads.data.length === 0 ? (
          <h1 className="text-white">Você não possui anúncios.</h1>
        ) : (
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
            {ads.data.map((ad, index) => {
              return (
                <MeAd
                  id={ad.id}
                  key={index}
                  gameName={ad.name}
                  hourEnd={ad.hoursEnd}
                  hourStart={ad.hoursStart}
                  name={ad.name}
                  useVoiceChannel={ad.useVoiceChannel}
                  weekDays={ad.weekDays}
                  yearsPlaying={ad.yearPlaying}
                />
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
