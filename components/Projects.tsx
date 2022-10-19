import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex overflow-hidden flex-col relative h-screen text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[18px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative px-16 w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0e7994]/80">
        {projects.map((project, i) => (
          <div
            key={project}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src=""
              alt=""
            />

            <div className="space-y-4 px-0 md:p-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#139dc0]/40 ">
                  Caso de estudio {i + 1}
                </span>
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sit amet vestibulum magna, et pharetra arcu. Vivamus non massa
                magna. Nam vitae dignissim ante, sit amet aliquam nulla. Nam sed
                odio odio. Cras elementum venenatis lacinia. Donec interdum
                ligula a porttitor gravida. Vestibulum fermentum, sem eget{" "}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[20%] bg-[#0e7994]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}
