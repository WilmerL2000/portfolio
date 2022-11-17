import React from "react";
import { motion } from "framer-motion";
import { Skill as SkillType } from "../typings";
import Skill from "./Skill";

type Props = {
  skills: SkillType[];
};

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col h-screen mt-20 text-center md:text-left md:flex-row max-w-[2000px] justify-center xl:space-y-0 mx-auto items-center"
    >
      <div className="pl-2 sm:ml-0">
        <div className="mb-12 text-center">
          <h3 className=" top-24 uppercase tracking-[18px] text-gray-500 text-2xl mb-4">
            Habilidades
          </h3>
          <h3 className=" top-36 uppercase tracking-[3px] text-gray-500 text-sm">
            Algunas tecnologías y herramientas que he empleado
          </h3>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-7 gap-3 md:gap-8 ml-4 sm:ml-0">
          {skills?.map((skill) => (
            <Skill key={skill._id} skill={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
