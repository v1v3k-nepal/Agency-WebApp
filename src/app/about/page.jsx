"use client"
import React, { Component } from "react";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div>
      <div className="img-container h-[200px] md:h-[300px] w-full relative">
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          className="grayscale object-cover rounded-sm"
          alt="About Image"
        />
        <div className="bg-[#6d4bd1] absolute left-2 md:left-5  bottom-1 md:bottom-5  p-1 md:p-2 rounded-md">
        <h1 className="text-[14px]">Digital StoryTellers</h1>
        <h2 className="text-[12px]">Handcrafting Award winning digital experiences</h2>
        </div>
      </div>
      <div className="flex gap-10 md:gap-28 mt-5 flex-col md:flex-row">
        <div className="left basis-1/2 md:basis-full">
          <h1 className="font-bold text-2xl mb-6">Who We Are?</h1>
          <p className="text-justify mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugiat ullam commodi molestiae odit aliquam aut eligendi laudantium
            fuga nemo. Voluptate, perferendis aliquid, nobis earum beatae delectus voluptas iusto porro illum, Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Voluptas itaque eos, esse explicabo magnam dolor praesentium error asperiores? Maxime, blanditiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minus praesentium reiciendis quisquam tenetur unde nostrum quasi
            blanditiis autem
          </p>
        </div>
        <div className="right basis-1/2 md:basis-full">
          <h1 className="font-bold text-2xl mb-6">What We Do ?</h1>
          <p className="text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, vitae sunt. Quisquam optio ea voluptates impedit laboriosam. Dicta eum ea
            aut tenetur, dolorem ducimus quasi quisquam
          </p>
          <div className="space-y-2 my-4">
            <p>- Dynamic Websites</p>
            <p>- Fast And Handy</p>
            <p>- Mobile Apps</p>
          </div>
          <div className="mb-5">
          <Button url="/contact" text="Contact"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
