"use client";
import Image from "next/image";
import Statistics from "./Statistics";
import Navbar from "@/components/navbar";
import SideNavbar from "@/components/Sidebar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading.logo.component";
export default function Home() {
  return (
    <main className="flex px-0 relative py-8">
      <div className="flex flex-col gap-5 py-4 w-full overflow-hidden">
        <div className="relative top-0">
          <div className="sticky top-0">
            <Navbar title="Dashboard" />
          </div>
        </div>
        <Statistics />
      </div>
    </main>
  );
}
