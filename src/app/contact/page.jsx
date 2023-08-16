import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="font-bold text-4xl mb-16 mx-auto">Let&apos;s Keep in Touch</h1>
      <div className="flex flex-col md:flex-row gap-28 basis-1/2">
        <div className="img-container">
          <Image width="500" height="500" src="/contact.png" alt="Contact image" />
        </div>
        <div className="form flex flex-col space-y-4 basis-1/2">
          <input className="p-2 rounded-md" type="text" placeholder="Enter Your Name" />
          <input className="p-2 rounded-md" type="email" placeholder="Enter Your Email" />
          <textarea className="p-2 rounded-md" name="message" cols="30" rows="10" placeholder="Enter Your Message"></textarea>
        </div>
      </div>
    </div>
  );
};

export default Contact;
