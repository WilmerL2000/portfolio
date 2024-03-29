import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import Link from 'next/link';
import { PageInfo } from '../typings';
import { sanityClient } from '../sanity';

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const imageProps = useNextSanityImage(sanityClient, pageInfo?.heroImage);

  return (
    <div className="flex h-screen md:mt-7 flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full mx-auto object-cover"
        {...imageProps}
        width={195}
        height={195}
        alt="Logotipo"
      />
      <div className="z-10 relative">
        <h2 className="text-sm md:text-2xl uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-xl sm:text-3xl font-semibold px-10">
          <Typewriter
            loop={true}
            cursor
            cursorStyle="|"
            cursorColor="#139dc0"
            delaySpeed={3000}
            words={[
              `Hi, I'm ${pageInfo?.name}`,
              'Guy-who-loves-videogames.tsx',
              '<ButLovesToCodeMore/>',
            ]}
          />
        </h1>
      </div>
    </div>
  );
}
