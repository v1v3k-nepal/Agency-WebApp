import React from "react";
import Link from "next/link";
import Image from "next/image";
import Illustration from "../../../public/illustration.png";
import Websites from "../../../public/websites.jpg";
import Apps from "../../../public/apps.jpg";
import UI from "../../../public/UI.png";

const Portfolio = () => {
  const works = [
    {
      id: 1,
      image: Illustration,
      title: "Illustrations",
    },
    {
      id: 2,
      image: Websites,
      title: "Websites",
    },
    {
      id: 3,
      image: Apps,
      title: "Applications",
    },
    {
      id: 4,
      image: UI,
      title: "UI/UX Design",
    },
  ];

  return (
    <div>
      <h1 className="font-bold text-4xl text-center mb-5">Our Services</h1>
      <h1 className="font-bold text-2xl md:text-3xl text-center md:text-left">Choose A Gallery</h1>
      <div className="flex flex-col md:flex-row gap-5 my-5">
        {works.map((item) => (
          <div key={item.id} className="relative cursor-pointer flex-grow">
            <div className="w-[300px] h-[400px] relative">
              <Image src={item.image} alt="" fill={true} className="object-cover rounded-md border-4 border-gray-200" />
            </div>
            <Link href="/">
              <span className="absolute bottom-5 left-5 text-2xl font-bold">{item.title}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
