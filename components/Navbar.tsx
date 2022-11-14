import React from "react";
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

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-3 flex items-start justify-between pr-9 mx-auto z-20 xl:items-center backdrop-blur-md backdrop-brightness-75">
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
      <div className="">
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
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
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
