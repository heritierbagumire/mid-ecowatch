import React from 'react'
import Image from 'next/image'
type header ={
    title:string
}

function Header({title}:header) {
  return (
<div className='flex justify-between items-center bg-gray-15 px-4 w-full sticky top-0 z-50 '>
    <h1 className='font-bold text-3xl'>{title}</h1>
      <div className='flex  items-center justify-center gap-4'>
        <Image
        src="search.svg"
        alt='search'
        width={20}
        height={20}
        />
        <input type="text" placeholder='Search...' className='outline-none border-0 p-4 rounded-md bg-gray-15 focus:border-transparent'/>
      </div>

      <div className='h-10 w-20 border gap-2 border-gray-10 p-4 rounded-[6px] flex item-center justify-center'>
        
      <Image
        src="notification.svg"
        alt='person'
        className=' h-10 relative bottom-4  '
        width={100}
        height={100}
        />
             <div className='h-7 bg-gray-30 text-gray-30 relative -top-2.5 -left-3'>
            .
             </div>

        <Image
        src="person.svg"
        alt='person'
        className='  h-5 relative bottom-2 right-2'
        width={100}
        height={100}
        />
        

      </div>


</div>
  )
}

export default Header