/* eslint-disable @next/next/no-img-element */
/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */

import React from "react";

export type WasteCardProps = {
  icon: string;
  title: string;
  description: string; 
};

export default function WastesCard(props: WasteCardProps) {
  return (
    <div className="  flex flex-wrap justify-between gap-3 ">
      <section className="flex justify-between gap-3 ">
        <div className='flex items-center p-4 bg-gray-10 rounded-2xl border dark:bg-muted bg-gray-200'>
        <div className=" h-16 w-16 flex items-center justify-center rounded-full m-2 p-1">
  
        <h1 className='text-3xl text-blue-70 px-4 text-blue-500 font-bold'>{props.title}</h1>
        </div>
        <p className='text-primary '>{props.description}</p>
      </div>
  
      </section>

    </div>
  );
}
