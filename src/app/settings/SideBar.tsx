import { SIDEBARLINKS } from '../../../constants/index'
import { useState } from 'react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface SideBarProps{
  selectedPage: string;
  onSelectPage: (page: string) => void;
}

function SideBar({ selectedPage, onSelectPage }: SideBarProps) {

 

  return (
<nav className=' w-full  bg-white p-4 h-[536px] rounded-tl-2xl rounded-tr-2xl   sticky top-20 left-0 overflow-y-auto'>
 
    <ul className='flex flex-col gap-4 '>
        {SIDEBARLINKS.map((link: any, idx: any)=>(
            <li key={idx}>
            <Link key={link.title} href={link.href} onClick={()=>onSelectPage(link.title)} className={`flex gap-4 items-center rounded-md ${link.title === selectedPage ? 'bg-gray-20':''}  p-4`}>
            <Image
            src={link.icon}
            alt='icon'
            className='fill-stone-50'
            width={25}
            height={25}
            />
            <h1 className='font-bold'>{link.title}</h1>
            </Link>
           
            </li>
        ))}
    </ul>
    
</nav>
  )
}

export default SideBar
