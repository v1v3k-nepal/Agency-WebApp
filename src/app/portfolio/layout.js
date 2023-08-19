import React, { Children } from 'react'

const Layout = ({children}) => {
  return (
    <div>
        <h1 className="font-bold text-4xl text-center mb-5">Our Services</h1>
        {children}
    </div>
  )
}

export default Layout