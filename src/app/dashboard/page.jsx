"use client"
import { useSession } from 'next-auth/react'
import React from 'react'

const Dashboard = () => {
  // const session = useSession();
  const { data: session, status } = useSession();
  if(status == "loading") return(<p>Loading</p>)
  console.log(status);
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard