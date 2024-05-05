"use client"
import Image from "next/image";
import SettingsPage from "./SettingsPage";
import SideNavbar from "@/components/SideNavbar";
import Navbar from "@/components/navbar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, []);
  return (
    <main className="flex p-8">

      
      <SideNavbar/>

      <div className="flex flex-col gap-5 w-full overflow-hidden">
      <div className="relative top-0 w-full ">
      <div className="w-full  sticky top-0 px-5">
         <Navbar title="Settings"/>
        </div>
      </div>
      <SettingsPage/>
      </div>
      
      
    {/* <Dashboard/> */}
    </main>
  );
}
