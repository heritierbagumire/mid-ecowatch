"use client"
import Image from "next/image";
import SettingsPage from "./SettingsPage";
import Navbar from "@/components/navbar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <main className="flex py-10">



      <div className="flex items-center justify-start lg:py-10 flex-col flex-1 h-screen">
      <div className="relative top-0 w-full ">
      <div className="w-full  sticky top-0 px-5">
         <Navbar title="Settings"/>
        </div>
      </div>
      <SettingsPage/>
      </div>
      
      
    </main>
  );
}
