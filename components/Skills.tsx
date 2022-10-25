import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";
import { Skill as SkillType } from "../typings";

type Props = {
  skills: SkillType[];
};

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[18px] text-gray-500 text-2xl">
        Habilidades
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Algunas tecnologías y herramientas que he empleado{" "}
      </h3>

      <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
        {skills?.map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}
