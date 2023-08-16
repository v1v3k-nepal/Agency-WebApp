import Link from 'next/link'
import React from 'react'

const Button = ({url, text}) => {
  return (
    <Link href={url}>
        <button className='px-5 py-3 bg-[#53c28b] cursor-pointer rounded-md border-none w-max'>
            {text}
        </button>
    </Link>
  )
}

export default Button