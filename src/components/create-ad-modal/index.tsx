"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { IoGameController } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { useState } from "react";

export default function CreateAdModal() {
  const [useVoiceChannel, setUseVoiceChannel] = useState<boolean>(false);
  const [weekDays, setWeekDays] = useState<string[]>([])

  const handleUseVoiceChannel = () => {
    setUseVoiceChannel((prev) => {
      if (prev === true) {
        return false;
      }

      return true;
    });
  };

  const handleWeekDays = (day: string) => {
    if(weekDays.includes(day)){
      const filteredWeekDays = weekDays.filter((days) => days !== day)
      return setWeekDays(filteredWeekDays)
    }

    setWeekDays((prev) => [...prev, day])
  }  

  return (
    <Dialog.Content className="bg-[#2A2634] px-[40px] py-8 rounded-lg fixed inset-0 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] md:w-full md:h-[95vh] md:rounded-md flex flex-col overflow-hidden z-50">
      <Dialog.Title className="font-black text-white text-3xl mb-4">
        Publique um anúncio
      </Dialog.Title>
      <label
        htmlFor="game-options"
        className="font-semibold text-base text-white mb-2"
      >
        Qual o game?
      </label>

      <select
        id="game-options"
        className="px-6 py-3 rounded bg-[#282B30] text-zinc-500 outline-none"
      >
        <option defaultValue="Selecione" unselectable="off">
          Selecione o game que deseja jogar
        </option>
        <option value="Fortnite">Fortnite</option>
      </select>

      <label
        htmlFor="nickname"
        className="font-semibold text-base text-white mb-2 mt-6"
      >
        Seu nome (ou nickname)
      </label>

      <input
        type="text"
        id="nickname"
        placeholder="Como te chamam dentro do game?"
        className="px-6 py-3 rounded bg-[#282B30] text-zinc-500 outline-none placeholder:text-zinc-500"
      />

      <div className="w-full flex justify-between mt-6 items-center gap-3">
        <div className="flex flex-col">
          <label
            htmlFor="yearsPlaying"
            className="font-semibold text-base text-white mb-2"
          >
            Joga há quantos anos?
          </label>

          <input
            type="text"
            id="yearsPlaying"
            placeholder="Tudo bem ser ZERO"
            className="px-6 py-3 rounded bg-[#282B30] text-zinc-500 outline-none placeholder:text-zinc-500"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="discord-id"
            className="font-semibold text-base text-white mb-2"
          >
            Qual seu Discord?
          </label>

          <input
            type="text"
            id="discord-id"
            placeholder="Usuario#0000"
            className="px-6 py-3 rounded bg-[#282B30] text-zinc-500 outline-none placeholder:text-zinc-500"
          />
        </div>
      </div>

      <div className="w-full flex mt-6 gap-6">
        <div className="flex flex-col">
          <span className="font-semibold text-base text-white mb-2">
            Quando costuma jogar?
          </span>

          <div className="w-full flex gap-1">
            <label
              htmlFor="seg"
              className={`w-10 h-[50px] ${weekDays.includes('seg') ? 'bg-[#650C71]' : 'bg-[#282B30]'} flex items-center justify-center rounded font-semibold text-white cursor-pointer`}
              onChange={() => handleWeekDays('seg')}
              title="Segunda-Feira"
            >
              S
              <input type="checkbox" id="seg" hidden />
            </label>

            <label
              htmlFor="ter"
              className={`w-10 h-[50px] ${weekDays.includes('ter') ? 'bg-[#650C71]' : 'bg-[#282B30]'} flex items-center justify-center rounded font-semibold text-white cursor-pointer`}
              onChange={() => handleWeekDays('ter')}
              title="Terça-Feira"
            >
              T
              <input type="checkbox" id="ter" hidden />
            </label>

            <label
              htmlFor="qua"
              className={`w-10 h-[50px] ${weekDays.includes('qua') ? 'bg-[#650C71]' : 'bg-[#282B30]'} flex items-center justify-center rounded font-semibold text-white cursor-pointer`}
              onChange={() => handleWeekDays('qua')}
              title="Quarta-Feira"
            >
              Q
              <input type="checkbox" id="qua" hidden />
            </label>

            <label
              htmlFor="qui"
              className={`w-10 h-[50px] ${weekDays.includes('qui') ? 'bg-[#650C71]' : 'bg-[#282B30]'} flex items-center justify-center rounded font-semibold text-white cursor-pointer`}
              onChange={() => handleWeekDays('qui')}
              title="Quinta-Feira"
            >
              Q
              <input type="checkbox" id="qui" hidden />
            </label>

            <label
              htmlFor="sex"
              className={`w-10 h-[50px] ${weekDays.includes('sex') ? 'bg-[#650C71]' : 'bg-[#282B30]'} flex items-center justify-center rounded font-semibold text-white cursor-pointer`}
              onChange={() => handleWeekDays('sex')}
              title="Sexta-Feira"
            >
              S
              <input type="checkbox" id="sex" hidden />
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-base text-white mb-2">
            Qual horário do dia?
          </span>

          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              id=""
              placeholder="De"
              className="px-2 py-3 rounded bg-[#282B30] text-zinc-500 outline-none placeholder:text-zinc-500"
            />
            <input
              type="text"
              id=""
              placeholder="Até"
              className="px-2 py-3 rounded bg-[#282B30] text-zinc-500 outline-none placeholder:text-zinc-500"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-2 items-center mt-1.5">
        <label
          htmlFor="voice-chat"
          className="w-6 h-6 bg-[#282B30] rounded mt-1 text-white flex items-center justify-center"
          onChange={handleUseVoiceChannel}
        >
          <input type="checkbox" name="" id="voice-chat" hidden />
          <FaCheck
            size={16}
            className={`text-emerald-500 ${useVoiceChannel ? "" : "hidden"}`}
          />
        </label>
        <span className="text-xs text-white">
          Costumo me conectar ao chat de voz
        </span>
      </div>

      <div className="flex gap-3 self-end mt-6">
        <Dialog.Close className="px-5 py-3 bg-white rounded font-bold">
          Cancelar
        </Dialog.Close>

        <button
          type="submit"
          className="px-5 py-3 flex gap-3 text-white bg-[#650C71] rounded font-bold"
        >
          <IoGameController size={24} />
          Encontrar duo
        </button>
      </div>
    </Dialog.Content>
  );
}
