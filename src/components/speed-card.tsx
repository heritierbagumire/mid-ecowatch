import Image from 'next/image';
import Link from 'next/link';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#172554', '#1e40af'];
const SpeedCard = () => {
  return (
      <div className=' p-4 rounded-md m-4'>
          <div>
              <h2 className='font-bold flex justify-between'> Water Wastes<span className='font-normal text-gray-30 '>
                  <Link className='flex items-center gap-4' href="/">details
                      <Image src="go.svg" alt='continue' width={10} height={20} />
                  </Link></span></h2>
               <p className='text-gray-30 text-[14px]'>Amount of wastes present in water</p>
          </div>
          <PieChart width={800} height={400}>
          <h3>SpeedCard</h3>
        <Pie
          data={data}
          cx={160}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={50}
          outerRadius={120}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
          <div className='flex gap-6 justify-center relative -top-16'>
  <div className='flex justify-center items-center gap-2'><div className='w-4 h-4 bg-[#172554] border border-green'></div>Collected waste</div>
  <div className='flex justify-center items-center gap-2'><div className='w-4 h-4 bg-[#1e40af] border border-green'></div>Uncollected waste</div>
</div>
    </div>
  )
}

export default SpeedCard;