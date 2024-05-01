import React from 'react'
import Tests from './Tests'
import Image from 'next/image'
import Link from 'next/link'
import { SENSORS } from '../../../constants/index'


function Statistics() {
  return (

    <div className='flex border  bg-gray-10'>
      <div className='flex flex-col w-full gap-4'>
  

        <Tests />

        <section className='h-auto  flex bg-white flex-col  m-2 p-5 gap-3 rounded-2xl justify-center '>
        <h2 className='font-bold'>Waste level</h2>
        <p className='text-gray-30 text-[14px]'> View and update the amounts of wastes collected and brought to the shore.</p>
       
        <Image src="/statGraph.png"  alt='graph' width={1200} height={1000} />
        <div className='flex gap-6 justify-center'>
  <div className='flex justify-center items-center gap-2'><div className='w-4 h-4 bg-orange-50 border border-green'></div>collected waste</div>
  <div className='flex justify-center items-center gap-2'><div className='w-4 h-4 bg-blue-70 border border-green'></div>uncollected waste</div>
</div>
        </section >

        <section className='flex gap-3 px-2   pb-8 '>
        <div className='r rounded-2xl p-5 bg-white  w-4/6'>
            <h2 className='font-bold'>Results from sensors</h2>
            <p className='text-gray-30 text-[14px]'>View the result obtained by the different sensors</p>
            <div className='flex flex-col mt-5 gap-9'>
              {SENSORS.map((sensor: any, i: any)=>(
                <div key={i} className=' flex  items-center  gap-6 '>
                 <Image src={sensor.icon} width={30} height={30} alt={sensor.title}/>
                
                  <h1 className='font-bold w-1/4'>{sensor.title} </h1>
                  <p className='w-2/4'>{sensor.description}</p>
                 <Link className='flex items-center gap-4 text-gray-30' href="/">details<Image src="arrow.svg" alt='continue' width={10} height={20} /></Link>
                </div>

              ))}
              
            </div>
          </div>
          <div className=' rounded-2xl p-5 h-80 overflow-hidden bg-white w-2/6'>
            <h2 className='font-bold flex justify-between'> Pedros Speed</h2>
          
            <div className='graph mt-6'>
               <Image src="/chat.png"  width={400} height={40} alt='chat'/>
            </div>
          </div>

          

        </section>
        {/* <Overview/>
           <StatMap/> */}
      </div>

    </div>

  )
}

export default Statistics