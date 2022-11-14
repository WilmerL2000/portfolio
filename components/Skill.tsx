import React from "react";
import { motion } from "framer-motion";
import { Skill as SkillType } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: SkillType;
};

export default function Skill({ skill }: Props) {
  return (
    <div className="group relative flex cursor-grab">
      <motion.img
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.skillImage).url()}
        className="rounded-3xl boder border-gray-500 object-cover h-16 w-16 md:w-20 md:h-20 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-20 md:h-20 xl:w-28 xl:h-28 rounded-3xl">
        <div className="flex items-center justify-center h-full">
          <p className="text-sm md:text-xl font-bold text-black opacity-100 text-center">
            {skill?.title}
          </p>
        </div>
      </div>
    </div>
  );
}
