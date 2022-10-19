import React from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

export default function ContactMe({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-8 md:mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[18px] text-gray-500 text-2xl">
        Contacto
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-2xl md:text-4xl font-semibold text-center">
          Si tienes alguna pregunta.{" "}
          <span className="decoration-[#0e7994]/50 underline">Contáctame.</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#0e7994] h-7 w-7 animate-pulse" />
            <p className="text-2xl">
              +506{" "}
              <span className=" decoration-[#0e7994]/50 underline">
                8436 0071
              </span>
            </p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#0e7994] h-7 w-7 animate-pulse" />
            <p className="text-2xl">wilmerlopezcespedes@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
