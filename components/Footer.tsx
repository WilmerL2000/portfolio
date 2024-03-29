import React from 'react';

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bottom-8">
      <div className="flex justify-center">
        <h3 className=" uppercase tracking-[3px] sm:tracking-[14px] text-gray-500 text-sm md:text-sm mb-7 text-justify">
          Developed by Wilmer Lopez
        </h3>
      </div>
    </footer>
  );
}
