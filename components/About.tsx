import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Me from "../img/alsome.jpg";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-1 space-y-6 justify-evenly mx-auto items-center ">
      <h3 className="absolute top-24 uppercase tracking-[18px] text-gray-500 text-2xl">
        Sobre mi
      </h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-48 h-36 md:w-64 md:h-96 object-cover xl:w-[400px] xl:h-[500px]"
      >
        <Image
          src={Me}
          alt="Foto sobre mi"
          className="rounded-full md:rounded-lg"
        />
      </motion.div>
      <div className="space-y-10 px-2 md:px-10 py-3">
        <h4 className=" text-xl md:text-4xl text-semibold">
          Aqui hay un{" "}
          <span className="underline decoration-[#0e7994]">poco</span> sobre mi
        </h4>
        <p className="text-xs md:text-xl text-justify">
          ¡Hola de nuevo! Como lo mencioné antes mi nombre es Wilmer.
          Actualmente estoy estudiando informática empresarial en la Universidad
          de Costa Rica. También me gradué de 4Geeks Academy como desarrollador
          de software full stack. Me he enfocado en prepararme para trabajar
          principalmente en el frontend pero también en el backend con algunas
          de las tecnologías y herramientas más utilizadas en la actualidad. Me
          encanta seguir aprendiendo, por lo tanto, intento mantenerme
          actualizado o al menos pendiente de las tendencias tecnológicas.
          Aparte de programar, en mi tiempo libre realizo actividades como
          realizar ejercicio, jugar video juegos, escuchar música.
        </p>
      </div>
    </div>
  );
}
