import React from "react";
import { SocialIcon } from "react-social-icons";
import { Social } from "../typings";
import { motion } from "framer-motion";

type Props = {
  socials: Social[];
};

export default function Sidebar({ socials }: Props) {
  return (
    <div className="flex md:flex-col justify-center">
      {socials?.map((social) => (
        <motion.div
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.3 }}
          key={social._id}
        >
          <SocialIcon
            url={social.url}
            target="_blank"
            fgColor="gray"
            bgColor="transparent"
            className="hover:text-white"
          />
        </motion.div>
      ))}
    </div>
  );
}
