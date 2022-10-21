import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../public/Logo.png";

type Props = {};

export default function Footer({}: Props) {
  return (
    <Link href="#hero">
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <div className="h-10 w-10 filter grayscale hover:grayscale-0 cursor-pointer">
            <Image src={Logo} alt="Home logo" className="rounded-full" />
          </div>
        </div>
      </footer>
    </Link>
  );
}
