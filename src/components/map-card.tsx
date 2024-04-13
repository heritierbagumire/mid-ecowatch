import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MapCard = () => {
  return (
      <div className='flex flex-col items-center justify-center'>
          <div>
              <h2 className='font-bold flex justify-between'>Map<span className='font-normal text-gray-30'>
                  <Link className='flex items-center gap-4 hover:scale-105 hover:text-blue-400' href="/">details
                      <Image src="go.svg" alt='continue' width={10} height={20} /></Link></span></h2>
                        <p className='text-gray-30 text-[14px]'>See the level of water in different waters</p>
          </div>
    </div>
  )
}

export default MapCard