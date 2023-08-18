import React from 'react'
import Image from 'next/image'
import {FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitterSquare, FaYoutubeSquare,FaWhatsapp} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='flex gap-2 md:justify-between md:fixed bottom-2 md:w-[84%] flex-col items-center md:flex-row'>
        <div className='text-sm'>©2023 Digital Nepal. All rights reserved.</div>
        <div className="flex gap-4 cursor-pointer">
            <FaFacebookSquare size={20}/>
            <FaInstagram size={20}/>
            <FaLinkedin size={20}/>
            <FaTwitterSquare size={20}/>
            <FaYoutubeSquare size={20}/>
            <FaWhatsapp size={21}/>
        </div>
    </div>
  )
}

export default Footer