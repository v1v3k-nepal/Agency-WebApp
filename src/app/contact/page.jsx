import React from "react";
import Image from "next/image";
import ContactImg from "../../../public/contact.png"

const Contact = () => {
  return (
    <div className="mb-5">
      <h1 className="font-bold text-2xl md:text-4xl mb-5 text-center">Let&apos;s Keep in Touch</h1>
      <div className="flex flex-col md:flex-row justify-around items-center gap-5">
        <div className="img-container relative w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[500px] md:h-[500px]">
          <Image fill={true} src={ContactImg} alt="Contact image" className="object-cover"/>
        </div>
        <div className="form flex flex-col space-y-4 basis-full md:basis-1/2">
          <input className="p-2 rounded-md" type="text" placeholder="Enter Your Name" />
          <input className="p-2 rounded-md" type="email" placeholder="Enter Your Email" />
          <textarea className="p-2 rounded-md" name="message" cols="30" rows="10" placeholder="Enter Your Message"></textarea>
        </div>
      </div>
    </div>
  );
};

export default Contact;
