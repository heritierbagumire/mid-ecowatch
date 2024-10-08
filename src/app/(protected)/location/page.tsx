"use client"
import Map from '@/components/map'
import React, { useEffect, useState } from 'react'
import SideNavbar from '@/components/Sidebar';
import Navbar from "@/components/navbar";
import { useRouter } from 'next/navigation';
import Loading from '@/components/Loading.logo.component';
import ChatPage from '@/components/ai/ChatAi';
const Locationpage = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setIsAuthenticated(true);
    } else {
      router.push('/login');
    }
    setLoading(false);
  }, [router]);

  if (loading) {
    return <Loading /> // You can show a loading spinner or any other UI component here
  }

  if (!isAuthenticated) {
    return null; // Return nothing if the user is not authenticated to avoid the dashboard flash
  }
  return (
    <div className="flex p-6">
    <div className='flex flex-col gap-5 w-full overflow-hidden'>
    <div className="relative top-0">
      <div className="sticky top-0">
         <Navbar title="Location"/>
        </div>
      </div>

      <div className="w-100"><iframe width="100%" height="600"  scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Lake%20Kivu,%20Blarirwa+(EcoWatch%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe></div>

       <Map />
       <ChatPage />
    </div>
    </div>
  )
}

export default Locationpage