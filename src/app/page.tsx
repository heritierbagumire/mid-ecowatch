/** @format */
'use client'
import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import Card, { CardContent, CardProps, WastesProps } from "@/components/Card";
import BarChart from "@/components/BarChart";
import SalesCard, { SalesProps } from "@/components/SalesCard";
import { Search } from "@/components/ui/search"
import { ThemeToggle } from "@/components/theme-toggle";
import { UserNav } from "@/components/ui/user-nav";
import FrameOne from "../../public/Frame1.png"
import FrameTwo from "../../public/frame2.png"
import FrameThree from "../../public/Frame3.png"
import FrameFour from "../../public/Frame4.png"
import Navbar from "@/components/navbar";
import { url } from "inspector";


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

const uesrSalesData: SalesProps[] = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    saleAmount: "+$1,999.00"
  },
  {
    name: "Jackson Lee",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$1,999.00"
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$39.00"
  },
  {
    name: "William Kim",
    email: "will@email.com",
    saleAmount: "+$299.00"
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    saleAmount: "+$39.00"
  }
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
      className={`dark:bg-muted  bg-${waste.variant}-200 dark:border dark:bg${waste.backgroundFrame} w-auto p-4 flex flex-col text-white BackgroundFrame${waste.backgroundFrame} gap-4 rounded-2xl`}
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

   ))}
        </section>
        
      <section className="grid grid-cols-1 dark:bg-inherit bg-white rounded-md gap-4 transition-all lg:grid-cols-2">
        <CardContent className="dark:bg-muted/40">
          <p className="p-4 font-semibold">Overview</p>

          <BarChart />
        </CardContent>
        <CardContent className="flex dark:bg-muted/40  justify-between gap-4">
          <section>
            <p>Water Wastes</p>
            <p className="text-sm text-gray-400">
              You made 265 sales this month.
            </p>
          </section>
          {uesrSalesData.map((d, i) => (
            <SalesCard
              key={i}
              email={d.email}
              name={d.name}
              saleAmount={d.saleAmount}
            />
          ))}
        </CardContent>

        {/*  */}
      </section>
    </div>
    </div>
  );
}
