import React from "react";
import { Typewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Me from "../img/me2.jpg";

import Link from "next/link";
type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full mx-auto object-cover"
        width={195}
        height={195}
        src={Me}
        alt="Logotipo"
      />
      <div className="z-20">
        <h2 className="text-sm md:text-2xl uppercase text-gray-500 pb-2 tracking-[15px]">
          Desrrollador Web
        </h2>
        <h1 className="text-2xl md:text-4xl font-semibold px-10">
          <Typewriter
            loop={true}
            cursor
            cursorStyle="|"
            cursorColor="#139dc0"
            delaySpeed={3000}
            words={[
              "Hola, soy Wilmer Lopez Cespedes",
              "Guy-who-loves-videogames.tsx",
              "<ButLovesToCodeMore/>",
            ]}
          />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">Sobre mi</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Habilidades</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Proyectos</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contacto</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
