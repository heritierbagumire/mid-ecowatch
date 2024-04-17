import { MODES } from '../../../constants/index'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { useState } from 'react'
import LoadingBar from './LoadingBar'
import Button from '../Button'

function Mode() {
    const [selectedTheme,setSelectedTheme] = useState<string>("Dark Mode")
  
    const handleThemeSelection =(theme :string) =>{
      setSelectedTheme(theme);
    };

    return (

        <section className={`p-6 rounded-2xl w-3/5 lg:w-4/5 dark:bg-muted bg-white flex flex-col gap-6 mt-2`}>
            <div className='flex flex-col gap-8'>
                <h1 className='font-bold dark:text-muted-foreground text-blue-dark text-2xl'>Change The System Color Mode</h1>
                <p>Congratulations on acquiring your water drone integrated with a system interface!
                    This manual will guide you through the proper usage of your water drone and its interface system for optimal performance and functionality.</p>
            </div>

            <div>
                <h1 className='font-bold text-[20px]'>Theme</h1>
                <p>Choose a light or dark theme for your system that is the best one for you.</p>
            </div>
            <div className='flex gap-3'>
                {MODES.map((theme, idx ) => (
                    <div key={idx} className='flex flex-col gap-4 w-2/5'>
                        {selectedTheme === "Licence"}
                    
                    <div key={theme.title} className={`bg-${theme.mainColor} bg-gray-10 flex flex-col gap-5 p-3 rounded-2xl ${theme.title === selectedTheme ?' border-2 border-dashed border-black shadow-lg shadow-gray-300' : 'border-none'} `}>
                        <div className={`flex flex-col  justify-center gap-5 rounded-2xl p-3 pt-6 bg-${theme.secondColor}  `}>
                            <Image
                                src='\theme.svg'
                                width={90}
                                height={40}
                                alt={theme.title}
                            />
                            <div className={` w-full bg-${theme.thirdColor} h-10 rounded-md`}></div>
                            <div className='bg-blue-10 w-3/4 bg-pink-20  bg-blue-20 bg-blue-30 bg-blue-40 bg-gray-60'></div>
                            <div className='flex  gap-2 w-full'>
                                <div className={`w-1/4 h-10  bg-${theme.forthColor} rounded-md`}></div>
                                <div className={`w-1/4 h-10  bg-${theme.forthColor} rounded-md`}></div>
                                <div className={`w-1/4 h-10  bg-${theme.forthColor} rounded-md`}></div>
                                <div className={`w-1/4 h-10  bg-${theme.forthColor} rounded-md`}></div>

                            </div>

                        </div>


                        <h1 className='font-bold flex  text-[20px] justify-between'>{theme.title}<Link href="/" className='text-[12px]  font-bold flex justify-center items-center gap-mode'>Rate us<Image src="arrow.svg" alt='continue' width={20} height={20} /></Link></h1>
                        <p>{theme.description}</p>
                        <div>
                            <h2>{theme.rating} Ratings</h2>
                            <div className="flex items-center">
                                {[...Array(Math.floor(theme.rating))].map((_, index) => (
                                    <Image
                                        src='/star.svg'
                                        key={index}
                                        alt='star'
                                        width={24}
                                        height={24}
                                    />))}
                                {Math.floor(theme.rating) !== theme.rating &&
                                    (
                                        <Image
                                            src="/half-star.svg"
                                            width={24}
                                            height={24}
                                            alt='half-star'
                                        />
                                    )
                                }
                            </div>
                        </div>

                    </div>
                    <Button
                    selectedTheme={selectedTheme} onSelectTheme={handleThemeSelection}
                    type='button'
                    name={theme.title}
                    title='Choose Theme'
                    variant={`${theme.title===selectedTheme ? 'pink-20' : 'blue-dark'}`}
                    full


                    />
                    </div>

                ))}
            </div>


            <div className='flex flex-col gap-4'>
                <h1 className='font-bold text-[20px]'>Brightness</h1>
                <p>Regulate the Brightness of your system</p>
                <LoadingBar/>
            </div>






        </section>
    )
}


export default Mode