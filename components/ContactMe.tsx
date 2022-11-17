import React from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { PageInfo } from "../typings";
import Link from "next/link";

type Props = {
  pageInfo: PageInfo;
};

export default function ContactMe({ pageInfo }: Props) {
  return (
    <div className="h-screen mt-40 flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-8 md:mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[18px] text-gray-500 text-2xl">
        Contacto
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-xl md:text-4xl font-semibold text-center">
          Si tienes alguna pregunta...{" "}
          <span className="decoration-[#0e7994]/50 underline">Contáctame</span>
        </h4>
        <div className="space-y-10 p-">
          <div className="cursor-pointer">
            <Link href="https://wa.me/50684360071" target="_blank">
              <div className="flex items-center space-x-5 justify-center">
                <PhoneIcon className="text-[#0e7994] h-7 w-7 animate-pulse" />
                <p className="text-xl sm:text-2xl">{pageInfo?.phoneNumber}</p>
              </div>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link href="mailto:wilmerlopezcespedes@gmail.com">
              <div className="flex items-center space-x-5 justify-center">
                <EnvelopeIcon className="text-[#0e7994] h-7 w-7 animate-pulse" />
                <p className="text-lg sm:text-2xl cursor-pointer">
                  {pageInfo?.email}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
