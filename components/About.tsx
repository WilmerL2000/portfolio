import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Me from "../img/alsome.jpg";
import { PageInfo } from "../typings";
import { sanityClient } from "../sanity";
import { useNextSanityImage } from "next-sanity-image";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  const imageProps = useNextSanityImage(sanityClient, pageInfo?.profilePic);

  return (
    <div className="flex flex-col h-screen relative text-center md:text-left md:flex-row max-w-7xl px-1 space-y-6 justify-evenly mx-auto items-center ">
      <h3 className="md:absolute top-24 uppercase tracking-[18px] text-gray-500 text-2xl">
        Sobre mi
      </h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-48 h-36 md:w-56 md:h-56 object-cover xl:w-[300px] xl:h-[330px]"
      >
        <Image
          {...imageProps}
          alt="Foto sobre mi"
          className="rounded-full md:rounded-lg"
        />
      </motion.div>
      <div className="px-4 md:px-10 py-3">
        <p className="text-xs md:text-xl text-justify">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </div>
  );
}
