import React from 'react'
import Image from 'next/image'
import { NextResponse } from 'next/server'
import { notFound } from 'next/navigation'

const getData = async (id)=>{
  const response = await fetch(`${process.env.PROD_URL}/api/posts/${id}`, {cache: 'no-store'})
  if(!response.ok) return notFound();
  return response.json();
}

const BlogPost = async({params}) => {

  const data = await getData(params.id);
  return (
    <div>
      <div className="top flex pb-5 md:pb-8 items-center flex-col-reverse md:flex-row gap-5">
      <div className=" left md:basis-[50%] mr-auto">
              <h1 className="font-bold text-2xl mb-5">{data.title}</h1>
              <p>{data.desc}</p>
              <div className='flex items-center gap-4 mt-6'>
                <div className='relative w-10 h-10'>
                  <Image src={data.userpic} alt="author image"  fill={true} className='object-cover rounded-full'></Image>
                </div>
                <h1 className='font-bold text-2xl'>{data.username}</h1>
              </div>
            </div>
        <div className="right relative w-[80vw] h-[50vw] md:w-[35vw] md:h-[18vw]">
          <Image src={data.img} alt="blog image" fill={true} className='object-cover rounded-lg'></Image>
        </div>
      </div>
      <div className="bottom pb-6">
        <p>{data.content}</p>
      </div>
    </div>
  )
}

export default BlogPost