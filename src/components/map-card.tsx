import Image from "next/image";
import Link from "next/link";
import React from "react";

const MapCard = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="rounded-2xl p-5 dark:muted/40 w-full">
        <h2 className="font-bold flex justify-between">
          Map
          <span className="font-normal text-gray-30">
            <Link
              className="flex items-center gap-4 hover:scale-105 hover:text-blue-400"
              href="/"
            >
              details
              <Image src="go.svg" alt="continue" width={10} height={20} />
            </Link>
          </span>
        </h2>
        <p className="text-gray-30 text-[14px]">
          See the level of water in different waters
        </p>
        <div className="flex flex-col">
          <div className=" flex items-center p-4 justify-center">
            <div className="w-full flex justify-center items-center">
              <iframe
                width="100%"
                height="200"
                className="rounded-md"
                frameBorder="0"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Lake%20Kivu,%20Blarirwa+(EcoWatch%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/">gps systems</a>
              </iframe>
            </div>
          </div>

          <div className="flex flex-col gap-4 justify-center dark:text-white  ">
            <div className="flex items-center gap-2 ">
              <div className="w-4 h-4 bg-blue-dark border border-green"></div>
              plastics
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-30 border border-green"></div>
              Sewage Releases
            </div>
            <div className="flex items-center gap-2 ">
              <div className="w-4 h-4 bg-gray-30 border border-green"></div>
              Gas/Oil leakage
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapCard;
