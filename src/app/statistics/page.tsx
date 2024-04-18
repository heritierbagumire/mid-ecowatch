import Image from "next/image";
import Statistics from "./Statistics";
import Navbar from "@/components/navbar";
import SideNavbar from "@/components/SideNavbar";

export default function Home() {
  return (
    <main className="flex p-8">

      
    <SideNavbar/>

    <div className="flex flex-col gap-5 w-full overflow-hidden">
    <div className="relative top-0 w-full ">
    <div className="w-full  sticky top-0 px-5">
       <Navbar title="Statistics"/>
      </div>
    </div>
    <Statistics/>
    </div>
  
  </main>
  );
}
