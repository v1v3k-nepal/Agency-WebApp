import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='flex gap-2 md:justify-between md:fixed bottom-2 w-[84%] flex-col items-center md:flex-row'>
        <div className='text-xs'>©2023 Digital Nepal. All rights reserved.</div>
        <div className="flex gap-4 cursor-pointer">
            <Image src="./1.png" alt='facebook-icon' height={15} width={18}></Image>
            <Image src="./2.png" alt='insta-icon' height={15} width={18}></Image>
            <Image src="./3.png" alt='twitter-icon' height={15} width={18}></Image>
            <Image src="./4.png" alt='youtube-icon' height={15} width={18}></Image>
        </div>
    </div>
  )
}

export default Footer