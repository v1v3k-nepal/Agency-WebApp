"use client"
import React, {createContext, useState } from 'react'

export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {

    const [mode, setMode] = useState("dark")

    const toggle = ()=>{
        setMode((prev)=> prev=="dark"? "light": "dark");
    }

    const getMode = ()=>{ return mode};
  return (
    <ThemeContext.Provider value={{mode, toggle}}>
        <div className={`theme-mobile md:transition md:duration-1000 ${mode} padding-x min-height`}>{children}</div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;