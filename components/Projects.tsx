import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import ModalWindow from "./ModalWindow";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project[]>([]);

  const filterSelectedProject = (id: any) => {
    const project: Project[] = projects?.filter(
      (project) => project._id === id
    );
    setSelectedProject({ ...project });
    openModal();
  };

  const closeModal = (): any => {
    setIsOpen(false);
  };

  const openModal = (): any => {
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col mt-48 overflow-hidden relative h-screen max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className=" top-24 uppercase tracking-[18px] text-gray-500 text-2xl">
        Proyectos
      </h3>
      <p className="text-[#0e7994] text-center mt-4">
        ¡Haz clic a cualquier imagen para ver mas información!
      </p>
      <div className="px-10 w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#0e7994]/80">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-5 md:p-35 "
          >
            <h4 className="text-2xl font-semibold text-center">
              {project?.title}
            </h4>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="cursor-pointer">
                <Image
                  width={500}
                  height={400}
                  onClick={() => filterSelectedProject(project?._id)}
                  src={urlFor(project?.projectImage).url()}
                  alt={project?.title}
                  className="rounded-lg"
                />
              </div>
              <ModalWindow
                isOpen={isOpen}
                closeModal={closeModal}
                selectedProject={selectedProject}
              />
            </motion.div>
            <div className="space-y-3 md:p-2 max-w-5xl">
              <h4 className="text-lg sm:text-2xl font-semibold text-center">
                Desarrollado con:
              </h4>
              <div className="flex items-center space-x-5 justify-center">
                {project?.technologies.map((technology) => (
                  <motion.div
                    key={technology._id}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      width={50}
                      height={50}
                      src={urlFor(technology?.skillImage).url()}
                      alt={technology?.title}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[20%] bg-[#0e7994]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}
