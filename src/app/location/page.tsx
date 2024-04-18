import Map from "@/components/map";
import React from "react";
import Image from "next/image";
import { Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ["latin"] });
const Locationpage = () => {
  return (
    <div className={raleway.className}>
      <h1 className="font-bold text-2xl">Location</h1>
      <div className="w-[95%] mx-[2.5%]">
        <iframe
          width="100%"
          height="510"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Lake%20Kivu,%20Blarirwa+(EcoWatch%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps systems</a>
        </iframe>
      </div>
      {/* footer */}
      <div className="flex flex-row border hover:border-gray-400 my-2 py-2 w-auto text-lg mx-[3%]">
        <nav className="flex mx-[5%]">
          <Image
            src={"Group5.svg"}
            alt="depth"
            className="h-7 w-7 mx-1 -mt-1"
            width={20}
            height={20}
          />
          <span className="text-customBlue font-extrabold">Location :</span>
          <span>Kivu lake</span>
        </nav>
        <nav className="flex mx-[5%]">
          <Image
            src={"Frame6.svg"}
            alt="depth"
            className="h-7 w-7 mx-1 -mt-1"
            width={20}
            height={20}
          />
          <span className="text-customBlue font-extrabold">Depth : </span>
          <span>435.67 meters</span>
        </nav>
        <nav className="flex mx-[5%]">
          <Image
            src={"Frame1.svg"}
            alt="depth"
            className="h-7 w-7 mx-1 -mt-[2px]"
            width={20}
            height={20}
          />
          <span className="text-customBlue font-extrabold">Speed : </span>
          <span>456 meters per second</span>
        </nav>
      </div>
    </div>
  );
};

export default Locationpage;
