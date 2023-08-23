import React from 'react'
import Image from 'next/image';
import Button from '@/components/button/Button';
// import {Collection} from "./data"
// import {notFound} from "next/navigation"

const Collection = {
  applications: [
    {
      id: 1,
      title: "Creative Portfolio",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
      image:
        "https://fulcrum.rocks/blog/wp-content/uploads/2022/04/best-app-design-2.jpg",
    },
    {
      id: 2,
      title: "Minimal Single Product",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
      image:
        "https://legiit-service.s3.amazonaws.com/3f7d0f77b883d2cebc3acaece720e218/6edb7770d99f6b971cc67b45a4be37da.jpg",
    },
    {
      id: 3,
      title: "Strong Together Charity",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
      image:
        "https://gillde.com/wp-content/uploads/2022/07/image-1160x870.png",
    }
  ],
  Illustrations: [
    {
      id: 1,
      title: "Creative Portfolio",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
      image:
        "https://blog.depositphotos.com/wp-content/uploads/2019/04/Depositphotos_209179682_m-2015kk.jpg.webp",
    },
    {
      id: 2,
      title: "Minimal Single Product",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
      image:
        "https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg",
    },
    {
      id: 3,
      title: "Strong Together Charity",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
      image:
        "https://img.freepik.com/premium-photo/party-with-friends-they-love-christmas-group-cheerful-young-people-carrying-sparklers-champagne-flutes-dancing-new-year-party-looking-happy-concepts-about-togetherness-lifestyle_146671-8737.jpg",
    }
  ],
  Websites: [
    {
      id: 1,
      title: "Creative Portfolio",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/1*aTYOTFS4Vkr-nwHNML3GvQ.jpeg",
    },
    {
      id: 2,
      title: "Minimal Single Product",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
      image:
        "https://www.schoolsoftware.com.ng/wp-content/uploads/2022/06/young-people-engaged-web-design-website-page-development-flat-d-character-concept-web-design-young-people-engaged.jpg"
      },
    {
      id: 3,
      title: "Strong Together Charity",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
      image:
        "https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg",
    }
  ],
  "UI-UX-Design":[
      {
          id: 1,
          title: "Creative Portfolio",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
          image:
            "https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/11/top-30-illustration-websites.png",
        },
        {
          id: 2,
          title: "Minimal Single Product",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
          image:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/05/Website_illustration_jpg_6PA9rpLF.jpg?auto=format&q=60&w=1280&h=1280&fit=crop&crop=faces",
        },
        {
          id: 3,
          title: "Strong Together Charity",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
          image:
            "https://i.pinimg.com/originals/38/84/83/38848326ccebb27267cd2d307dc742bf.png",
        } 
  ],
};

const getData = (cat)=>{
  const catData = Collection[cat];
  if(catData) return catData
  else return notFound();
}

const Category = ({params}) => {

  const data = getData(params.category)
  // console.log(params);
  return (
    <div>
      <h1 className='text-center md:text-left font-bold text-2xl text-green-400 mb-6'>{params.category}</h1>
      {data.map((item)=>(
              <div key={item.id} className='flex gap-5 items-center flex-col-reverse md:flex-row md:odd:flex-row-reverse md:pb-10'>
              <div className={`left basis-1/2 ${(item.id)%2 !== 0? "mr-auto": ""}`}>
                <h1 className='text-xl md:text-3xl font-bold mb-5 text-center md:text-left'>{item.title}</h1>
                <p className='mb-5'>{item.desc}</p>
                <div className='mb-6'>
                <Button url="/" text="See More"/>
                </div>
              </div>
              <div className={`right h-[380px] w-[300px] md:h-[400px] md:w-[550px] relative ${(item.id)%2 == 0? "mr-auto": ""}`}>
                <Image src={item.image} alt='' fill={true} className='object-cover rounded-md'/>
              </div>
            </div>
      ))}

    </div>
  )
}

export default Category;