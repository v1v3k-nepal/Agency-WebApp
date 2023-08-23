import React from "react";
import Link from "next/link";
import Image from "next/image";
import Illustration from "../../../public/illustration.png";
import Websites from "../../../public/websites.jpg";
import Apps from "../../../public/apps.jpg";
import UI from "../../../public/UI.png";
import Footer from "@/components/footer/Footer";

const Portfolio = () => {
  const works = [
    {
      id: 1,
      image: Apps,
      title: "Applications",
      url: "/portfolio/applications",
    },
    {
      id: 2,
      image: Illustration,
      title: "Illustrations",
      url: "/portfolio/Illustrations",
    },
    {
      id: 3,
      image: Websites,
      title: "Websites",
      url: "/portfolio/Websites",
    },
    {
      id: 4,
      image: UI,
      title: "UI/UX Design",
      url: "/portfolio/UI-UX-Design",
    },
  ];

  return (
    <div>
      {/* <h1 className="font-bold text-4xl text-center mb-5">Our Services</h1> */}
      <h1 className="font-bold text-2xl md:text-3xl text-center md:text-left">Choose A Gallery</h1>
      <div className="flex flex-col md:flex-row gap-5 my-5">
        {works.map((item) => (
          <Link href={item.url} key={item.id}>
            <div className=" group relative cursor-pointer flex-grow">
              <div className="w-[300px] h-[400px] relative">
                <Image src={item.image} alt="" fill={true} className="object-cover rounded-md border-4 border-gray-200" />
              </div>
              <span className="absolute bottom-5 left-5 text-2xl text-white font-bold group-hover:text-green-400">{item.title}</span>
            </div>
          </Link>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Portfolio;
