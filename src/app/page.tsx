/** @format */
'use client'
import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import Card, { CardContent, CardProps, WastesProps } from "@/components/Card";
import BarChart from "@/components/BarChart";
import SalesCard, {  WasteCardProps } from "@/components/WastesCard";
import { Search } from "@/components/ui/search"
import { ThemeToggle } from "@/components/theme-toggle";
import { UserNav } from "@/components/ui/user-nav";
import FrameOne from "../../public/Frame1.png"
import FrameTwo from "../../public/frame2.png"
import FrameThree from "../../public/Frame3.png"
import FrameFour from "../../public/Frame4.png"
import Navbar from "@/components/navbar";
import { url } from "inspector";
import WastesCard from "@/components/WastesCard";
import StatMap from "@/components/start-up";


 const WASTES: WastesProps[] = [
   {
       title: 'Plastic Wastes',
       icon: '/plastic.svg',
       variant: 'green',
       backgroundFrame: FrameTwo,
       data:'190',
       search:"Latest search",
       date:"12/05/2023"
     },
   {
     title: 'Gas Wastes',
     icon: '/gas.svg',
     variant: 'red',
     backgroundFrame: FrameOne,
     data:'56',
     search:"Latest search",
     date:"12/05/2023"
   },
    {
        title: 'Chemical Wastes ',
        icon: '/chemical.svg',
        variant: 'gray',
        backgroundFrame: FrameThree,
        data:'345',
         search:"Latest search",
         date:"12/05/2023"
      },
      {
        title: 'Organisms',
        icon: '/organisms.svg',
        variant: 'orange',
        backgroundFrame: FrameFour,
        data:'56',
         search:"Latest search",
         date:"12/05/2023"
      },
];
const cardData: CardProps[] = [
  {
    label: "Plastic Wastes",
    amount: "190",
    discription: "+20.1% from last month",
    icon: DollarSign
  },
  {
    label: "Subscriptions",
    amount: "+2350",
    discription: "+180.1% from last month",
    icon: Users
  },
  {
    label: "Sales",
    amount: "+12,234",
    discription: "+19% from last month",
    icon: CreditCard
  },
  {
    label: "Active Now",
    amount: "+573",
    discription: "+201 since last hour",
    icon: Activity
  }
];


export const STATES: WasteCardProps[] = [

    {
        icon:"image",
        title:"PH",
        description:"Detected pH as 8.6 in Lake Kivu from the recent test. "
    },
    {
        icon:"image",
        title:"C/F",
        description:"Detected temperature as 24⁰C (75⁰F) in Lake Kivu from the recent test.. "
    },

    {
        icon:"image",
        title:"Gas",
        description:"Detected methane gas as 65 cubic kilometres (16 cu mi) in Lake Kivu from the recent test. "
    },


];

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="relative top-0">

      <div className="sticky top-0">
         <Navbar />
        </div>
      </div>
      <div className="dark:bg-inherit bg-gray-100 p-4 rounded-md">

      <section className="grid w-full grid-cols-1 my-4 dark:bg-muted/40 shadow-lg bg-white p-4 rounded-md gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">

         {WASTES.map((waste, index) => (
    <div
      key={index}
      className={`dark:bg-muted bg-${waste.variant}-200 dark:border dark:bg${waste.backgroundFrame} w-auto p-4 flex flex-col text-white BackgroundFrame${waste.backgroundFrame} gap-4 rounded-2xl`}
             style={{ backgroundImage: `url(${waste.backgroundFrame.src})`, backgroundSize: `60%`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top left' }}
    >
      <div className='bg-inherit'></div>
      <div className='flex justify-between items-center'>
        <h2 className={`dark:text-white text-white font-bold`}>{waste.title}</h2>
       <div className='dark:bg-white  bg-gray-transparent  p-2 rounded-full w-9 h-9 flex justify-center items-center'>
       <Image
       src={waste.icon}

       width={24}
       height={24}
       alt='icon'
       />
        </div> 
  
      </div>
      <h1 className='text-center dark:text-white text-white font-bold'>{waste.data} Littles </h1>
      <div className='flex flex-col items-end text-[12px]'>
        <p>{waste.search}</p>
        <p className='text-gray-300'>{waste.date}</p>
      </div>

    </div>

         )) || (
            <section className="grid w-full grid-cols-1 my-4 dark:bg-muted/40 shadow-lg bg-white p-4 rounded-md gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
         
    <div
     
      className={`dark:bg-red-900 bg-green-800 dark:border  w-auto p-4 flex flex-col text-white gap-4 rounded-2xl`}
      style={{ backgroundImage: `url(${FrameOne})` }}
    >
      <div className='bg-inherit'></div>
      <div className='flex justify-between items-center'>
        <h2 className={`dark:text-white text-white font-bold`}>Plastic Wastes</h2>
       <div className='dark:bg-white  bg-gray-transparent  p-2 rounded-full w-9 h-9 flex justify-center items-center'>
       <Image
       src='./plastic.svg'

       width={24}
       height={24}
       alt='icon'
       />
        </div> 
  
      </div>
      <h1 className='text-center dark:text-white text-white font-bold'>190 Littles </h1>
      <div className='flex flex-col items-end text-[12px]'>
        <p className="dark:text-white text-white">Latest Search</p>
        <p className='dark:text-white text-gray-500'>12/4/2012</p>
      </div>

    </div>
    
     <div
     
      className={`dark:orange-200 bg-orange-400/65 dark:border  w-auto p-4 flex flex-col text-white gap-4 rounded-2xl`}
      style={{ backgroundImage: `url(${FrameTwo})` }}
    >
      <div className='bg-inherit'></div>
      <div className='flex justify-between items-center'>
        <h2 className={`dark:text-white text-white font-bold`}>Gas Wastes</h2>
       <div className='dark:bg-white  bg-gray-transparent  p-2 rounded-full w-9 h-9 flex justify-center items-center'>
       <Image
       src='./gas.svg'

       width={24}
       height={24}
       alt='icon'
       />
        </div> 
  
      </div>
      <h1 className='text-center dark:text-white text-white font-bold'>56 Littles </h1>
      <div className='flex flex-col items-end text-[12px]'>
        <p className="dark:text-white text-white">Latest Search</p>
        <p className='dark:text-white text-gray-500'>12/4/2012</p>
      </div>

          </div>
          
           <div
     
      className={`dark:bg-muted bg-gray-400 dark:border  w-auto p-4 flex flex-col text-white gap-4 rounded-2xl`}
      style={{ backgroundImage: `url(${FrameThree})` }}
    >
      <div className='bg-inherit'></div>
      <div className='flex justify-between items-center'>
        <h2 className={`dark:text-white text-white font-bold`}>Plastic Wastes</h2>
       <div className='dark:bg-white  bg-gray-transparent  p-2 rounded-full w-9 h-9 flex justify-center items-center'>
       <Image
       src='./camera.svg'

       width={24}
       height={24}
       alt='icon'
       />
        </div> 
  
      </div>
      <h1 className='text-center dark:text-white text-black font-bold'>120 Littles </h1>
      <div className='flex flex-col items-end text-[12px]'>
        <p className="dark:text-white text-gray-500">Latest Search</p>
        <p className='dark:text-white text-gray-500'>12/4/2012</p>
      </div>

          </div>
          
           <div
     
      className={`dark:bg-muted bg-orange-200/90 dark:border  w-auto p-4 flex flex-col text-white gap-4 rounded-2xl`}
      style={{ backgroundImage: FrameFour.src }}
    >
      <div className='bg-inherit'></div>
      <div className='flex justify-between items-center'>
        <h2 className={`dark:text-white text-whie font-bold`}>Plastic Wastes</h2>
       <div className='dark:bg-white  bg-gray-transparent  p-2 rounded-full w-9 h-9 flex justify-center items-center'>
       <Image
       src='./camera.svg'

       width={24}
       height={24}
       alt='icon'
       />
        </div> 
  
      </div>
      <h1 className='text-center dark:text-white text-white font-bold'>120 Littles </h1>
      <div className='flex flex-col items-end text-[12px]'>
        <p className="dark:text-white text-white">Latest Search</p>
        <p className='dark:text-white text-gray-500'>12/4/2019</p>
      </div>

          </div>
          



      </section>
         )
            
          } 
        </section>
        
      <section className="grid grid-cols-1 dark:bg-inherit  rounded-md gap-4 transition-all lg:grid-cols-2">
        <CardContent className="dark:bg-muted/40 bg-white">
          <p className="p-4 font-semibold">Overview</p>

          <BarChart />
        </CardContent>
        <CardContent className="flex dark:bg-muted/40 bg-white  justify-between gap-4">
          <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">
              You made 265 sales this month.
            </p>
          </section>
          {STATES.map((d, i) => (
            <WastesCard
              key={i}
              title={d.title}
              icon="image"
              description={d.description}
            />
          ))}
        </CardContent>

          {/*  */}
        </section>
        <CardContent className="flex dark:bg-muted/40 mt-6 bg-white  justify-between gap-4">
          <StatMap />
        </CardContent>


    </div>
    </div>
  );
}
