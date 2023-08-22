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
        <div className={`theme ${mode} marginx`}>{children}</div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;