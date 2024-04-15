import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function StatMap() {
  return (
<section className='flex gap-6 border px-2 '>
<div className=' rounded-2xl p-5 bg-white w-2/5 flex flex-col gap-9 justify-center'>
  <div>
  <h2 className='font-bold flex justify-between'> Water Wastes<span className='font-normal text-gray-30 '><Link className='flex items-center gap-4' href="/">details<Image src="go.svg" alt='continue' width={10} height={20}/></Link></span></h2>
  <p className='text-gray-30 text-[14px]'>Amount of wastes present in water</p>
  </div>
  <div className='graph flex flex-col items-center'>
  
  <Image
    src="/waterWastesChat.png"
  
    alt='chat'
    width={250}
    height={100}
    />

<div className='flex gap-6 justify-center relative -top-16'>
  <div className='flex justify-center items-center gap-2'><div className='w-4 h-4 bg-[#172554] border border-green'></div>Collected waste</div>
  <div className='flex justify-center items-center gap-2'><div className='w-4 h-4 bg-[#1e40af] border border-green'></div>Uncollected waste</div>
</div>
</div>
</div>

<div className='rounded-2xl p-5 bg-white  w-3/5'>
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

</section>
  )
}

export default StatMap