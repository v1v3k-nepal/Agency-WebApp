import React from 'react'
import Image from 'next/image'

const BlogPosts = () => {
  return (
    <div>
      <div className="top flex mb-5 md:mb-8 items-center flex-col-reverse md:flex-row gap-5">
      <div className=" left md:basis-[50%] mr-auto">
              <h1 className="font-bold text-2xl mb-5">Lorem ipsum dolor sit amet, consectetur sicing elit. Assumenda, ullam.</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reiciendis ex possimus iste voluptates maiores, blanditiis dolore explicabo modi illum?</p>
              <div className='flex items-center gap-4 mt-6'>
                <div className='relative w-10 h-10'>
                  <Image src="https://qph.cf2.quoracdn.net/main-thumb-476545653-200-ighncyrfszzlrqwwutvhuzvzisfwltpr.jpeg" alt="author image"  fill={true} className='object-cover rounded-full'></Image>
                </div>
                <h1 className='font-bold text-2xl'>Vivek Nepal</h1>
              </div>
            </div>
        <div className="right relative w-[80vw] h-[50vw] md:w-[35vw] md:h-[18vw]">
          <Image src="https://images.template.net/78260/Free-Business-Website-Illustration-JPEG-1.jpg" alt="blog image" fill={true} className='object-cover rounded-lg'></Image>
        </div>
      </div>
      <div className="bottom">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem atque expedita cupiditate, quod accusamus exercitationem necessitatibus. Veniam, iure omnis quaerat odit voluptate molestiae consequatur culpa aut minima suscipit eaque iste soluta ducimus saepe, maiores quidem, cum earum mollitia velit! Accusantium amet tempora at dignissimos, saepe necessitatibus voluptate omnis fugit nostrum perferendis rerum laudantium obcaecati? Labore quasi, maxime nemo voluptates dignissimos inventore blanditiis voluptas quae assumenda porro adipisci nisi omnis, ea qui expedita repudiandae neque dolore accusamus? Ipsum ipsa earum rerum minus officiis possimus veniam fugit ea</p>
        <p className='my-5'>voluptas distinctio, corrupti, id eius quos quas iure molestiae? Fugit rerum minus numquam molestias nostrum, voluptatem eum nesciunt, necessitatibus natus ad expedita explicabo, voluptatum itaque soluta, cupiditate animi recusandae. Fugiat commodi vitae exercitationem? Incidunt repellendus ab eum! Alias consequatur recusandae culpa minima non accusamus, dicta voluptates qui error! Sapiente, eaque magni? Nam eius excepturi, adipisci esse corporis veniam, nisi magni incidunt totam obcaecati aperiam atque vitae distinctio cum nemo asperiores, <br />cupiditate reiciendis culpa quos ipsum deserunt aut laborum eos? Eius explicabo perferendis, voluptate totam dolore vero iure numquam, minus veritatis eveniet at? Cupiditate perferendis, repellendus similique totam vero accusantium aliquid et, sequi, maiores culpa dignissimos ullam molestias?</p>
      </div>
    </div>
  )
}

export default BlogPosts