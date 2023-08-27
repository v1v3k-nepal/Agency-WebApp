"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";
import useSWR from "swr";

const Dashboard = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const fetcher = (...args)=> fetch(...args).then((res)=> res.json());
  const {data, error, isLoading, mutate} = useSWR(`/api/posts/userPosts`, fetcher)
  console.log(data)

  if (status === "loading") return <p>Loading</p>;
  if (status === "unauthenticated") router?.push("/dashboard/login");



  if (status == "authenticated") {
    return (
      <div className="flex flex-col lg:flex-row">
        <div className="max-h-[80vh] overflow-scroll basis-[45%]">
          <h1 className="mx-auto font-bold text-2xl mb-5">Post Details</h1>
          {data? data?.map((post)=>(
                      <div className="flex items-center gap-8 mb-5 flex-col lg:flex-row" key={post._id}>
                      <div className="relative w-[80vw] h-[50vw] md:w-[20vw] md:h-[11vw]">
                        <Image
                          src={post.img}
                          alt="post image"
                          fill={true}
                          className="rounded-md object-cover"></Image>
                      </div>
                      <div className="md:pr-8 max-w-[80vw] lg:max-w-[20vw]">
                        <h1 className="font-bold text-2xl mb-2 whitespace-nowrap overflow-hidden text-ellipsis">{post.title}</h1>
                        <p className="max-h-[50px] overflow-hidden text-ellipsis">{post.desc}</p>
                        <button className="py-2 px-4 bg-red-600 cursor-pointer rounded-md border-none w-fit text-white font-semibold mt-5">Delete</button>
                      </div>
                    </div>
          )): (<div className="mx-auto my-5">Fetching Post Details...</div>)}
        </div>
        <div className="lg:ml-auto lg:basis-[45%] mb-8">
          <form className="flex flex-col gap-5">
            <h1 className="mx-auto font-bold text-2xl">Add New Post</h1>
            <input type="text" placeholder="Title" className="p-2 rounded-md text-black bg-[#eeeaf3]" />
            <input type="text" placeholder="Description" className="p-2 rounded-md text-black bg-[#eeeaf3]" />
            <input type="text" placeholder="Image Url" className="p-2 rounded-md text-black bg-[#eeeaf3]" />
            <textarea
              name="content"
              id="content"
              cols="30"
              rows="10"
              placeholder="Blog Content"
              className="rounded-md p-2 text-black bg-[#eeeaf3]"></textarea>
            <button className="px-5 py-3 bg-[#6d4bd1] cursor-pointer rounded-md border-none w-full text-white font-semibold">Submit</button>
          </form>
        </div>
      </div>
    );
  }
};

export default Dashboard;
