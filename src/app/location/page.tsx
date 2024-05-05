"use client"
import Map from '@/components/map'
import React, { useEffect } from 'react'
import SideNavbar from '@/components/SideNavbar'
import Navbar from "@/components/navbar";
import { useRouter } from 'next/navigation';
const Locationpage = () => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, []);
  return (
    <section className="flex p-8">
    <SideNavbar />

    <div className='flex flex-col gap-5 w-full overflow-hidden'>
    <div className="relative top-0">
      <div className="sticky top-0">
         <Navbar title="Location"/>
        </div>
      </div>

      <div className="w-100"><iframe width="100%" height="600"  scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Lake%20Kivu,%20Blarirwa+(EcoWatch%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe></div>

       <Map />
    </div>
    </section>
  )
}

export default Locationpage