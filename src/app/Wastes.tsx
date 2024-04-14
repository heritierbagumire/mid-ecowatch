import React from 'react'
import { WASTES } from '../../constants/index';
import Image from 'next/image'
function Wastes() {

  return (
  <section className='flex bg-white m-2 p-4 gap-3 w-auto rounded-2xl justify-between'>
  
   {WASTES.map((waste: any,index: any)=>(
    <div key={index} className={`bg-${waste.variant}-50 w-64 px-4 pb-4 flex flex-col text-white BackgroundFrame${index}  gap-4 rounded-2xl`}>
      <div className=' bg-gray-50'></div> {/* this is for enabling retrieval of those colors from waste.variant it doesn't show anything else*/}
      <div className='flex justify-between items-center'>
        <h2 className={`text-white font-bold`}>{waste.title}</h2>
       <div className='bg-gray-transparent  p-2 rounded-full w-9 h-9 flex justify-center items-center'>
       <Image
       src={waste.icon}

       width={24}
       height={24}
       alt='icon'
       />
        </div> 
  
      </div>
      <h1 className='text-center font-bold'>{waste.data} Littles </h1>
      <div className='flex flex-col items-end text-[12px]'>
        <p>{waste.search}</p>
        <p className='text-gray-30'>{waste.date}</p>
      </div>

    </div>

   ))}


  </section>

    
  )
}

export default Wastes