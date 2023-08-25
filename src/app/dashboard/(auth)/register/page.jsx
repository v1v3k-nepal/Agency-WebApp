"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";

const Register = () => {
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const response = await fetch("http:localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      response.status === 201 && router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };
  return (
    <div className="md:h-[calc(100vh-150px)] flex flex-col justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 mx-auto border-2 border-[#9f90d8] p-2 rounded-xl w-full lg:w-[40%]">
        <h1 className="font-bold text-3xl mx-auto">Login/ Register</h1>
        <hr className="text-red-200" />
        <div className="flex flex-col">
          <label htmlFor="name" className="font-semibold text-xl mb-2 ml-1">
            Your Name
          </label>
          <input type="text" placeholder="Enter Your Full Name" required className="rounded-md p-2 bg-stone-200 text-black" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className="font-semibold text-xl mb-2 ml-1">
            Email Address
          </label>
          <input type="email" placeholder="Enter Your Email" required className="rounded-md p-2  bg-stone-200 text-black" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className="font-semibold text-xl mb-2 ml-1">
            Password
          </label>
          <input type="password" placeholder="Enter Your Password" required className="rounded-md p-2 bg-stone-200 text-black" />
        </div>
        <div>
          <button className="text-white font-bold bg-green-600 px-4 py-2 md:py-3 rounded-md w-full mb-2 ">Register</button>
        </div>
        {error && <p>Something went wrong!!</p>}
      </form>
      <Link href="/dashboard/login" className="w-full md:w-[40%] mx-auto mt-5">
        <button className="font-bold border-2 border-[#9f90d8] px-4 py-2 md:py-3 rounded-md w-full">Login with Existing Account</button>
      </Link>
    </div>
  );
};

export default Register;
