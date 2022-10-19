import Link from "next/link";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <Link href="#hero">
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          Hola
          <img
            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
            src=""
            alt=""
          />
        </div>
      </footer>
    </Link>
  );
}
