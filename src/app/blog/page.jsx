import React from "react";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const response = await fetch(`${process.env.PROD_URL}/api/posts`, { cache: "no-store" });
  if (!response.ok){
    throw new Error("Failed to fetch Data")
  }
  return response.json();
};

const Blog = async () => {

  const data = await getData();

  return (
    <div>
      {data.map((item) => (
        <Link href={`/blog/${item._id}`} key={item.id}>
          <div className="flex items-center pb-10 flex-col lg:flex-row gap-10">
            <div className="relative w-[85vw] h-[65vw] md:h-[330px] md:w-[500px]">
              <Image src={item.img} alt="blog image" fill={true} className="object-cover rounded-md"></Image>
            </div>
            <div className="md:basis-[55%] ml-auto">
              <h1 className="font-bold text-2xl max-w-[540px] mb-5">{item.title}</h1>
              <p>{item.desc}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
