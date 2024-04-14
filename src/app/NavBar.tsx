import React from 'react'
import Image from 'next/image'
import { NAV_LINKS } from '../../constants/index'
import Link from 'next/link'
function NavBar() {
  return (
    <section>
  <nav className=' bg-gray-500 flex items-center p-4 sticky h-screen top-0 left-0 overflow-y-auto'>
    <div className=' bg-orange-50 flex flex-col justify-between items-center rounded-2xl w-16 h-96 py-7'>
      <div className='flex flex-col  items-center gap-8'>
      <ul className="hidden h-full gap-6 lg:flex lg:flex-col">
        {NAV_LINKS.map((link)=>(
            <Link href={link.href} key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-green-500">
           
               <Image
src={link.icon}
alt={link.key}
width={24}
height={24}
/>
            </Link>
        ))}



    </ul>
      </div>
     <Link href='/settings'>
     <Image
src='settings.svg'
alt='settings'
width={24}
height={24}
/>
     </Link> 

    </div>

  </nav>
  </section>
  )
}

export default NavBar