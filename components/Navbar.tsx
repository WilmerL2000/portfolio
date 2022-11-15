import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../typings";
import Link from "next/link";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  BellAlertIcon,
} from "@heroicons/react/24/outline";
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
        {/* <Link href="#hero" className="cursor-pointer"> */}
        <Image src={Logo} alt="" width={50} height={40} />
        {/* </Link> */}
      </motion.div>
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute right-8 py-1 cursor-pointer sm:hidden"
      >
        {open ? (
          <XMarkIcon className="h-8 w-8 text-white hover:text-[#0e7994]" />
        ) : (
          <Bars3Icon className="h-8 w-8 text-white hover:text-[#0e7994]" />
        )}
      </div>
      <ul
        className={`md:flex h-screen sm:h-0 md:items-center md:pb-0 my-8 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 backdrop-blur-md backdrop-brightness-75 ${
          open ? "top-14 transition-all delay-150" : "top-[-490px]"
        } motion-safe:animate-pulse`}
      >
        <li className="md:ml-4 text-xl md:my-0 relative flex flex-col md:flex-row md:w-auto sm:w-32 gap-4 space-y-8 sm:space-y-0">
          {links.map(({ href, label }) => (
            <Link href={href} key={label}>
              <button
                className="heroButton transform hover:-translate-y-3 sm:hover:-translate-y-0 text-white"
                onClick={() => setOpen(!open)}
              >
                {label}
              </button>
            </Link>
          ))}
          <div className="cursor-pointer" onClick={() => setOpen(!open)}>
            <Link href="#contact">
              <p className=" heroButton transform hover:-translate-y-3 sm:hover:-translate-y-0 text-center text-sm text-white">
                Contactarme
              </p>
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
