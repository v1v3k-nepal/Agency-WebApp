"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Dashboard = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  if(status === "loading") return(<p>Loading</p>)
  if(status === "unauthenticated") router?.push("/dashboard/login")
  console.log(status);
  console.log(session);

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard