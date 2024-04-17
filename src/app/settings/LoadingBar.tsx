import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Image from 'next/image';



const LoadingBar = () => {
  const barStyle = `w-full bg-gray-300 h-4 rounded-full p-1 flex items-center  justify-right`;
  const [brightness,setBrightness] = useState<number>(50)
   const width =`w-[40%] w-[39%] w-[38%] w-[37%] w-[36%] w-[35%] w-[34%] w-[33%] w-[32%] w-[31%] w-[30%] w-[29%] w-[28%] w-[27%] w-[26%] w-[25%] w-[24%] w-[23%] w-[22%] w-[21%] w-[20%] w-[19%] w-[18%] w-[17%] w-[16%] w-[15%] w-[14%] w-[13%] w-[12%] w-[11%] w-[10%] w-[9%] w-[8%] w-[7%] w-[6%] w-[5%] w-[4%] w-[3%] w-[2%] w-[1%]\
   w-[100%] w-[99%] w-[98%] w-[97%] w-[96%] w-[95%] w-[94%] w-[93%] w-[92%] w-[91%] w-[90%] w-[89%] w-[88%] w-[87%] w-[86%] w-[85%] w-[84%] w-[83%] w-[82%] w-[81%] w-[80%] w-[79%] w-[78%] w-[77%] w-[76%] w-[75%] w-[74%] w-[73%] w-[72%] w-[71%] 
   w-[70%] w-[69%] w-[68%] w-[67%] w-[66%] w-[65%] w-[64%] w-[63%] w-[62%] w-[61%] w-[60%] w-[59%]  w-[58%] w-[57%] w-[56%] w-[55%] w-[54%] w-[53%] w-[52%] w-[51%] w-[50%] w-[49%] w-[48%] w-[47%] w-[46%] w-[45%] w-[44%] w-[43%] w-[42%] w-[41%]
   `
  const fillStyle = `w-[${brightness}%] bg-[#FFA500] h-2 relative  rounded-full `;
  const handleIncrement =()=>{
    if(brightness < 100){
        setBrightness(brightness + 1)
    }

  }
  const handleDecrement= ()=>{
    if(brightness > 0){
        setBrightness(brightness-1)
    }
  }

  return (
    <div className="flex flex-col items-end justify-center gap-2">
        <div className='flex justify-between  w-full'>
        <FontAwesomeIcon icon={faMinus} onClick={handleDecrement} className='cursor-pointer'/>
        <FontAwesomeIcon icon={faPlus} onClick={handleIncrement} className='cursor-pointer' />
        </div>
      <div className={barStyle}>
        <div className={fillStyle}></div>
        <Image
        className='bg-white rounded-full p-1 -ml-5 hover:shadow-2xl hover:shadow-black'
        src='./modelight.svg'
        width={45}
        height={45}
        alt='lighter'
        />
      </div>
      <span className="ml-2 text-sm  flex font-medium bg-gray-200 w-1/6 items-center justify-center p-2 rounded-md  ">{brightness}%</span>
    </div>
  );
};

export default LoadingBar;
