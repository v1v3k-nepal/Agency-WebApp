import React from 'react'
import Image from 'next/image'

const BlogPosts = () => {
  return (
    <div>
      <div className="top flex pb-5 md:pb-8 items-center flex-col-reverse md:flex-row gap-5">
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
        <p className='py-5'>voluptas distinctio, corrupti, id eius quos quas iure molestiae? Fugit rerum minus numquam molestias nostrum, voluptatem eum nesciunt, necessitatibus natus ad expedita explicabo, voluptatum itaque soluta, cupiditate animi recusandae. Fugiat commodi vitae exercitationem? Incidunt repellendus ab eum! Alias consequatur recusandae culpa minima non accusamus, dicta voluptates qui error! Sapiente, eaque magni? Nam eius excepturi, adipisci esse corporis veniam, nisi magni incidunt totam obcaecati aperiam atque vitae distinctio cum nemo asperiores</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam corporis impedit nam facere quod consequuntur exercitationem! Et provident ipsam sed incidunt atque. Itaque dicta temporibus placeat, officia quisquam id rem harum accusantium qui vero! Et neque, beatae similique iure modi officiis voluptatum enim minima repellendus odit, maiores vero blanditiis. Eaque asperiores provident cumque veniam fuga expedita! Nesciunt nobis iure voluptas fugit neque impedit eveniet soluta numquam delectus maxime itaque similique, maiores aut amet, perspiciatis libero facere laborum officiis earum facilis quaerat nisi excepturi atque. Aliquid nihil ipsum voluptates ab animi. Quae eum eveniet explicabo! Officia expedita iure quasi earum omnis dolor ullam eligendi, harum soluta nam labore quis explicabo corporis illum nulla cum aliquam provident commodi quas, ipsa eos qui nostrum? Optio eaque fugiat error temporibus aperiam maiores laborum quo laudantium reprehenderit iusto, repellat, dicta dignissimos accusantium molestiae harum quam sapiente, tempore atque qui magni maxime exercitationem voluptatem. Fugiat illum sequi explicabo itaque rem, dolores, at labore soluta veritatis pariatur obcaecati excepturi sunt maiores neque ipsum eius molestiae sit ipsa. Iusto velit, minima excepturi aut similique animi sapiente, sequi cum accusantium ipsa explicabo. A natus itaque sit. Maxime ipsum dolor numquam quam sint, dicta voluptate, ullam nulla soluta, cupiditate quidem.</p>
      </div>
    </div>
  )
}

export default BlogPosts