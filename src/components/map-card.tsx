import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MapCard = () => {
  return (
      <div className='flex flex-col items-center justify-center'>
          <div className='rounded-2xl p-5 bg-white  w-full'>
  <h2 className='font-bold flex justify-between'>Map<span className='font-normal text-gray-30'><Link className='flex items-center gap-4 hover:scale-105 hover:text-blue-400' href="/">details<Image src="go.svg" alt='continue' width={10} height={20}/></Link></span></h2>
  <p className='text-gray-30 text-[14px]'>See the level of water in different waters</p>
<div className='flex'>
  <div className='w-[450px] h-[300px]  flex p-4'>
    


  </div>

<div className='flex flex-col gap-4 justify-center '>
  <div className='flex items-center gap-2'><div className='w-4 h-4 bg-blue-dark border border-green'></div>plastics</div>
  <div className='flex items-center gap-2'><div className='w-4 h-4 bg-orange-30 border border-green'></div>Sewage Releases</div>
  <div className='flex items-center gap-2 '><div className='w-4 h-4 bg-gray-30 border border-green'></div>Gas/Oil leakage</div>
</div>
</div>
</div>
    </div>
  )
}

export default MapCard