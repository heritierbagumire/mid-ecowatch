"use client"
import React, { useEffect } from 'react'
import Page from './login/page'
import { useRouter } from 'next/navigation';
const Homepage = () => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      router.push("/");
    }else {
      router.push('/dashboard');
    }
  });
  return (
    <div>
      
      <Page/>
    </div>
  )
}

export default Homepage;