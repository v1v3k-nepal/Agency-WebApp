"use client"
import React, { useState } from 'react'
// import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import Link from 'next/link';
import {CgMenu} from "react-icons/cg"
import {AiFillCloseCircle} from "react-icons/ai"

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = ()=>{
        toggleMenu();
        const sideMenu = document.getElementById("sidemenu");
        sideMenu.style.right="0px";
        sideMenu.style.width="200px"
        sideMenu.style.padding="40px 20px"
        sideMenu.style.height="100%"
    }

    const closeMenu = ()=> {
        toggleMenu();
        const sideMenu = document.getElementById("sidemenu");
        sideMenu.style.right="-250px";
        sideMenu.style.width="fit-content"
        sideMenu.style.height="fit-content"
    }

    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    }
    const links = [
        {
            id: 1,
            title: "Home",
            url: "/"
        },

        {
            id: 2,
            title: "Portfolio",
            url: "/portfolio"
        },

        {
            id: 3,
            title: "Blog",
            url: "/blog"
        },

        {
            id: 4,
            title: "About",
            url: "/about"
        },

        {
            id: 5,
            title: "Contact",
            url: "/contact"
        },

        {
            id: 6,
            title: "DashBoard",
            url: "/dashboard"
        },
    ]

  return (
    <div className="flex justify-between h-24 items-center">
        <div className='cursor-pointer font-bold text-2xl'>
            <Link href="/">Digital Nepal</Link> 
        </div>
        <CgMenu size={20} className='md:hidden cursor-pointer' onClick={()=>openMenu()}/>
        <div className={`flex gap-5 flex-col md:flex-row fixed md:static top-0 -right-[350px] z-10 transition-all bg-gray-900 md:bg-transparent`} id='sidemenu'>
            {links.map((link)=>(
            <Link href={link.url} key={link.id} className='text-white'>{link.title}</Link>
            ))}
            <button className='bg-[#6d4bd1] px-2 rounded-full'>Logout</button>
            <AiFillCloseCircle size={25} className={`md:hidden cursor-pointer text-white absolute top-10 right-5 ${isMenuOpen? "block":"hidden"}`} onClick={()=>closeMenu()}/>
        </div>
    </div>
  )
}

export default Navbar