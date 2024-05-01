"use client"
import { TESTS } from '../../../constants/index'
import React,{useState} from 'react'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

function Tests() {
  const [hoveredTestIndex, setHoveredTestIndex] = useState<number|null>(null);

  const handleMouseEnter = (index:number) => {
    setHoveredTestIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredTestIndex(null);
  };
  return (
    <section className='flex bg-white flex-col m-2 p-4 gap-3 rounded-2xl justify-between'>
        <h1 className='font-bold text-md'>Latest Tests</h1>
        <p>View and update the result from your most recent tests</p>

        <table className='w-auto ng-green'>
           <thead>
                <tr className='border-b'>
                <th className='text-start p-3'>Components</th>
                <th className='text-start p-3'>Depth</th>
                <th className='text-start p-3'>Value</th>
                <th className='text-start p-3'>Others</th>
                </tr>
            </thead>
            <tbody>
                {TESTS.map((test,index)=>(
                 <tr key={index} className='border-b'>
                        <td className='p-3'>{test.component}</td>
                        <td className='p-3'>{test.Depth}</td>
                        <td className='p-3'>{test.value}</td>
                        <td className='p-3'>
                        <div className={`border rounded-2xl p-5 w-48 absolute right-56 bg-white  ${hoveredTestIndex === index ? '' : 'hidden'}`} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
                          <h1 className='border-b pb-3 hover:bg-gray-60'>Edit</h1>
                          <h1 className='mt-3 hover:bg-gray-60'>Remove</h1> </div>
                          <div className='flex justify-between'>
                          <Image src='./pepicons.svg' alt='edit' width={24} height={24} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}/>
                          </div>
                        </td>
                    </tr>

                ))}
              </tbody>

        </table>
  </section>
  )
}

export default Tests