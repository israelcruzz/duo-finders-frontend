import { IoLogoDiscord } from "react-icons/io5";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <div className="w-full h-full xl:h-[100vh] flex flex-col p-12 xl:flex-row gap-6">
      <section className="w-full h-full flex items-center justify-center">
        <Image
          src="/login-image.svg"
          width={500}
          height={500}
          alt="login image"
          quality={100}
        />
      </section>
      <section className="w-full h-full flex flex-col xl:justify-center xl:p-8">
        <span className="font-medium text-sm text-white mb-8">DuoFinders</span>

        <h1 className="font-bold text-white text-xl mb-6">
          Connect to our platform
        </h1>

        <p className="text-[#AAAAAA] text-base mb-12">
          Nivo offers a comprehensive video solution tailored for online content
          creators, emphasizing seamless developer integration, transparent
          pricing, and exceptional user experience.
        </p>

        <button className="w-full bg-[#282B30] p-3 text-base flex items-center justify-center text-white font-bold gap-3 rounded hover:bg-[#282B30]/90">
          <IoLogoDiscord size={24} />
          Continuar com o Discord
        </button>
      </section>
    </div>
  );
}
