import { Input } from "@/components/ui/input"
import Image from "next/image"

export function Search() {
  return (
      <div className="flex  items-center justify-center gap-4 focus:border p-2">
           <Image
        src="search.svg"
        alt='search'
        width={20}
        height={20}
        />  
      <Input
        type="search"
        placeholder="Search..."
        className="w-full text-xs md:text-auto border-0 active:border-transparent md:w-[100px] lg:w-[300px]"
      />
    </div>
  )
}

<div className='flex  items-center justify-center gap-4'>
        <Image
        src="search.svg"
        alt='search'
        width={20}
        height={20}
        />
        <input type="text" placeholder='Search...' className='outline-none border-0 p-4 rounded-md bg-gray-15 focus:border-transparent'/>
      </div>