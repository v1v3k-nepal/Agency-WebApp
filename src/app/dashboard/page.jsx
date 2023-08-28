"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";
import useSWR from "swr";
import { useState } from "react";

const Dashboard = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isEditing, setIsEditing] = useState(false);
  const [postId, setPostId] = useState("")

  const initialFormData = {
    title: "",
    desc: "",
    img: "",
    content: "",
    userpic: "",
    // _id: ""
  };

  const [formdata, setFormdata] = useState(initialFormData);


  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading, mutate } = useSWR(`/api/posts/userPosts?username=${session?.user.name}`, fetcher);
  // console.log(data);

  if (status === "loading") return <p>Loading</p>;
  if (status === "unauthenticated") router?.push("/dashboard/login");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/posts/userPosts", {
        method: "POST",
        body: JSON.stringify({
          ...formdata,
          username: session?.user.name,
        }),
      });
      mutate();
      setFormdata(initialFormData);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setFormdata((prevData)=>({...prevData, [name]:value}));
  }

  const handleEdit = (post) => {
    setIsEditing(true);
    setFormdata({
      title: post.title, 
      desc: post.desc, 
      img: post.img, 
      userpic: post.userpic, 
      content: post.content,
    })
    setPostId(post._id)
  };

  const handleUpdate = async (e)=>{
    e.preventDefault();
    try { 
      await fetch("/api/posts/userPosts", {
        method: "PUT",
        body: JSON.stringify({
          ...formdata,
          _id: postId,
          username: session?.user.name,
        }),
      });
      mutate();
      setFormdata(initialFormData);
      setIsEditing(false)
    } catch (err) {
      console.log(err);
    }

  }

  if (status == "authenticated") {
    return (
      <div className="flex flex-col lg:flex-row">
        <div className="max-h-[80vh] overflow-scroll basis-[45%]">
          <h1 className="mx-auto font-bold text-2xl mb-5">Post Details</h1>
          {data ? (
            data?.map((post) => (
              <div className="flex items-center gap-8 mb-5 flex-col lg:flex-row" key={post._id}>
                <div className="relative w-[80vw] h-[50vw] md:max-w-[15vw] md:h-[11vw]">
                  <Image src={post.img} alt="post image" fill={true} className="rounded-md object-cover"></Image>
                </div>
                <div className="md:pr-8 max-w-[80vw] lg:max-w-[20vw]">
                  <h1 className="font-bold text-2xl mb-2 whitespace-nowrap overflow-hidden text-ellipsis">{post.title}</h1>
                  <p className="max-h-[50px] overflow-hidden text-ellipsis">{post.desc}</p>
                  <div className="flex gap-5">
                    <button
                      onClick={() => handleEdit(post)}
                      className="py-2 px-4 bg-green-600 cursor-pointer rounded-md border-none w-fit text-white font-semibold mt-5">
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="py-2 px-4 bg-red-600 cursor-pointer rounded-md border-none w-fit text-white font-semibold mt-5">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="mx-auto my-5">Fetching Post Details...</div>
          )}
        </div>
        <div className="lg:ml-auto lg:basis-[45%] mb-8">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <h1 className="mx-auto font-bold text-2xl">{isEditing? "Edit Your Post" : "Add New Post"}</h1>

            <input type="text" placeholder="Title" 
            name="title"
            value={formdata.title} 
            onChange={handleInputChange}
            className="p-2 rounded-md text-black bg-[#eeeaf3]" />

            <input type="text" placeholder="Description" 
            name="desc"
            value={formdata.desc} 
            onChange={handleInputChange}
            className="p-2 rounded-md text-black bg-[#eeeaf3]" />

            <input type="text" placeholder="Blog Image Url" 
            name="img"
            value={formdata.img} 
            onChange={handleInputChange}
            className="p-2 rounded-md text-black bg-[#eeeaf3]" />

            <input type="text" placeholder="Author Image Url" 
            name="userpic"
            value={formdata.userpic} 
            onChange={handleInputChange}
            className="p-2 rounded-md text-black bg-[#eeeaf3]" />

            <textarea
              id="content"
              cols="30"
              rows="8"
              placeholder="Blog Content"
              name="content"
              value={formdata.content}
              onChange={handleInputChange}
              className="rounded-md p-2 text-black bg-[#eeeaf3]"></textarea>
              {isEditing ? (<button className="px-5 py-3 bg-[#6d4bd1] cursor-pointer rounded-md border-none w-full text-white font-semibold" onClick={(e)=>handleUpdate(e)}>
              Update Post
            </button>): (<button className="px-5 py-3 bg-[#6d4bd1] cursor-pointer rounded-md border-none w-full text-white font-semibold" type="submit">
              Create Post
            </button>)}
          </form>
        </div>
      </div>
    );
  }
};

export default Dashboard;
