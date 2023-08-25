"use client";
import { signIn, useSession } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Login = () => {
  const { data: session, status } = useSession();
  const params = useSearchParams();
  const router = useRouter();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);

  if (status == "loading") return <p>Loading</p>;

  if (status == "authenticated") router?.push("/dashboard");

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials", { email, password });
  };

  return (
    <div className="md:h-[calc(100vh-150px)] flex flex-col justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 mx-auto border-2 border-[#9f90d8] p-2 rounded-xl w-full lg:w-[40%]">
        <h1 className="font-bold text-3xl mx-auto">Login/ Register</h1>
        <hr className="text-red-200" />
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
          <button type="submit" className="text-white font-bold bg-green-600 px-4 py-2 md:py-3 rounded-md w-full mb-2 ">
            Login
          </button>
        </div>
        {error && <p>Something went wrong!!</p>}
      </form>
      <div className="w-full lg:w-[40%] mx-auto mt-5">
        <Link href="/dashboard/register">
          <button className="font-bold border-2 border-[#9f90d8] px-4 py-2 md:py-3 rounded-md w-full mx-auto">Create New Account</button>
        </Link>
        <button className="text-white font-bold bg-teal-500 px-4 py-2 md:py-3 rounded-md w-full mb-2 mt-5" onClick={() => signIn("google")}>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
