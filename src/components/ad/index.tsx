"use client";

import { IoGameController } from "react-icons/io5";
import * as Dialog from "@radix-ui/react-dialog";
import ViewDiscordModal from "../view-discord-modal";

interface AdProps {
  id: string;
  name: string;
  yearsPlaying: number;
  weekDays: string;
  hourStart: number;
  hourEnd: number;
  useVoiceChannel: boolean;
}

export default function Ad({
  id,
  name,
  yearsPlaying,
  weekDays,
  hourStart,
  hourEnd,
  useVoiceChannel,
}: AdProps) {
  return (
    <main className="bg-[#2A2634] px-4 py-6 rounded-lg flex flex-col gap-3">
      <div className="flex flex-col">
        <h2 className="font-medium text-sm text-[#C4C4C6]">Nome</h2>
        <h1 className="font-bold text-sm text-white">{name}</h1>
      </div>

      <div className="flex flex-col">
        <h2 className="font-medium text-sm text-[#C4C4C6]">Tempo de Jogo</h2>
        <h1 className="font-bold text-sm text-white">{yearsPlaying} anos</h1>
      </div>

      <div className="flex flex-col">
        <h2 className="font-medium text-sm text-[#C4C4C6]">Disponibilidade</h2>
        <h1 className="font-bold text-sm text-white">
          {weekDays} | {hourStart}h - {hourEnd}h
        </h1>
      </div>

      <div className="flex flex-col">
        <h2 className="font-medium text-sm text-[#C4C4C6]">
          Chamada de áudio?
        </h2>
        <h1
          className={`font-bold text-sm text-white ${
            useVoiceChannel ? "text-emerald-500" : "text-red-700"
          }`}
        >
          {useVoiceChannel ? "Sim" : "Não"}
        </h1>
      </div>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="bg-[#B7ABFF] w-full py-3 text-white flex items-center justify-center font-semibold rounded-lg gap-3">
            <IoGameController size={24} />
            Conectar
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="inset-0 fixed bg-black/60 z-40" />
          <ViewDiscordModal id={id} />
        </Dialog.Portal>
      </Dialog.Root>
    </main>
  );
}
