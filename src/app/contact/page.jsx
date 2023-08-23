import React from "react";
import Image from "next/image";
import Button from "@/components/button/Button";
import ContactImg from "../../../public/contact-v2.webp"
import Footer from "@/components/footer/Footer";

const Contact = () => {
  return (
    <div className="pb-5">
      <h1 className="font-bold text-2xl md:text-4xl mb-5 text-center">Let&apos;s Keep in Touch</h1>
      <div className="flex flex-col md:flex-row justify-around items-center gap-5 mb-5">
        <div className="img-container relative w-[90vw] h-[90vw] md:w-[32vw] md:h-[33vw]">
          <Image fill={true} src={ContactImg} alt="Contact image" className="object-cover animate-move"/>
        </div>
        <div className="form flex flex-col space-y-4 md:basis-1/2 px-3">
          <input className="p-2 rounded-md bg-[#eeeaf3]" type="text" placeholder="Enter Your Name"/>
          <input className="p-2 rounded-md bg-[#eeeaf3]" type="email" placeholder="Enter Your Email" />
          <textarea className="p-2 rounded-md bg-[#eeeaf3]" name="message" cols="30" rows="9" placeholder="Enter Your Message"></textarea>
          <div>
            <Button url="/" text="Submit"></Button>
          </div>          
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
