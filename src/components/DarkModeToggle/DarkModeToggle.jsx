import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext } from 'react'

const DarkModeToggle = () => {
    const {mode, toggle} = useContext(ThemeContext)
  return (
    <div className='flex gap-1 border-2 border-purple-700 rounded-full px-1 cursor-pointer w-fit relative transition duration-[2000]' onClick={toggle}>
      <div>🌙</div>
      <div>🔆</div>
      <div className={`bg-green-600 absolute top-[2px] w-5 h-5 rounded-full ${mode == "dark" ? "right-1" : "left-1" }`}></div>
    </div>
  )
}

export default DarkModeToggle