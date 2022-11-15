import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col mt-40 overflow-hidden relative h-screen max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className=" top-24 uppercase tracking-[18px] text-gray-500 text-2xl">
        Proyectos
      </h3>
      <div className="px-10 w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#0e7994]/80">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-5 md:p-35 "
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                width={500}
                height={420}
                src={urlFor(project?.projectImage).url()}
                alt={project?.title}
              />
            </motion.div>
            <div className="space-y-3 md:p-6 max-w-5xl">
              <h4 className="text-2xl font-semibold text-center">
                {project?.title}
              </h4>
              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology) => (
                  <div key={technology._id}>
                    <Image
                      width={50}
                      height={50}
                      src={urlFor(technology?.skillImage).url()}
                      alt={technology?.title}
                    />
                  </div>
                ))}
              </div>
              <p className=" text-sm sm:text-lg text-center md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[20%] bg-[#0e7994]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}
