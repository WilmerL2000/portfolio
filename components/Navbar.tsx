import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Logo from "../public/Logo2.png";

type Props = {};
type Links = { href: string; label: string };

export default function Header({}: Props) {
  const links: Links[] = [
    { href: "#about", label: "Sobre mi" },
    { href: "#skills", label: "Habilidades" },
    { href: "#projects", label: "Proyectos" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 p-3 flex items-start justify-between pr-9 mx-auto z-20 xl:items-center ${
        open && "h-screen"
      }  backdrop-blur-md backdrop-brightness-75`}
    >
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <Image src={Logo} alt="" width={50} height={40} />
      </motion.div>
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute right-8 py-1 cursor-pointer sm:hidden"
      >
        {open ? (
          <XMarkIcon className="h-8 w-8 text-white rounded-full hover:text-[#0e7994]" />
        ) : (
          <Bars3Icon className="h-8 w-8 text-white rounded-full hover:text-[#0e7994]" />
        )}
      </div>
      <ul
        className={`sm:flex h-screen sm:h-0 sm:items-center md:pb-0 my-8 absolute sm:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 backdrop-blur-md backdrop-brightness-75 ${
          open ? "top-14 transition-all delay-150" : "top-[-490px]"
        } motion-safe:animate-pulse`}
      >
        <li className="sm:ml-12 md:ml-4 text-xl sm:my-0 relative sm:flex sm:flex-row hidden sm:w-auto gap-4 sm:space-y-0">
          {links.map(({ href, label }) => (
            <Link href={href} key={label}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.1 }}
                className="heroButton text-white"
              >
                {label}
              </motion.button>
            </Link>
          ))}
        </li>
        <li className="md:ml-4 text-xl sm:hidden md:my-0 relative flex flex-col md:w-auto sm:w-32 gap-4 space-y-8 sm:space-y-0">
          {links.map(({ href, label }) => (
            <Link href={href} key={label}>
              <motion.button
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 0.1 }}
                className="heroButton text-white"
                onClick={() => setOpen(!open)}
              >
                {label}
              </motion.button>
            </Link>
          ))}
          <div className="cursor-pointer" onClick={() => setOpen(!open)}>
            <Link href="#contact">
              <motion.p
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 0.3 }}
                className=" heroButton text-center text-sm text-white"
              >
                Contactarme
              </motion.p>
            </Link>
          </div>
        </li>
      </ul>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="sm:flex sm:flex-row hidden items-center text-gray-300 cursor-pointer"
      >
        <Link href="#contact">
          <div>
            <SocialIcon
              className="cursor-pointer"
              network="email"
              fgColor="gray"
              bgColor="transparent"
            />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
              Contactarme
            </p>
          </div>
        </Link>
      </motion.div>
    </header>
  );
}
