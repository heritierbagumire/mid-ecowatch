import React from 'react'
interface Props{
    width:string;
}

function Structure({width}:Props) {
  return (
    <section className={`p-6 rounded-2xl w-${width} bg-white flex flex-col gap-6 mt-2`}>
    <div className='flex flex-col gap-8'>
        <h1 className='font-bold text-blue-dark text-2xl'>Welcome To Pedros Structure </h1>
    </div>
    <div className='flex flex-col gap-5'>
        <h2 className='font-bold'>Sensors</h2>
        <p> Pedro is an AI-based water drone model which constitutes of different types of sensors to help in testing the water properties but as well as help in motion.</p>
    </div>

    <div className='flex flex-col gap-4  pr-6'>
        <h2 className='font-bold'>Testing Sensors</h2>
        <div className='flex  items-center'>
            <p className='w-2/5'>Catalytic Bead Sensor</p>
            < div className='w-1/5 h-50 bg-green-50'></div>
            <p> Used to measure methaneleakage in water</p>
        </div>
        <div className='flex  items-center'>
            <p className='w-2/5'>Catalytic Bead Sensor</p>
            < div className='w-1/5 h-50 bg-green-50'></div>
            <p> Used to measure methaneleakage in water</p>
        </div>
        <div className='flex items-center'>
            <p className='w-2/5'>Catalytic Bead Sensor</p>
            < div className='w-1/5 h-50 bg-green-50'></div>
            <p> Used to measure methaneleakage in water</p>
        </div>
        <div className='flex items-center'>
            <p className='w-2/5'>Catalytic Bead Sensor</p>
            < div className='w-1/5 h-50 bg-green-50'></div>
            <p> Used to measure methaneleakage in water</p>
        </div>
        <div className='flex  items-center'>
            <p className='w-2/5'>Catalytic Bead Sensor</p>
           < div className='w-1/5 h-50 bg-green-50'></div>
            <p> Used to measure methaneleakage in water</p>
        </div>
    </div>

    <div className='flex flex-col gap-4 pr-6'>
        <h2 className='font-bold'>Mtion Sensors</h2>
        <div className='flex  items-center'>
            <p className='w-2/5'>IMU(Inertial Measurements Unit)</p>
            <div className='w-1/5 h-50 bg-green-50'></div>
            <p className='w-2/5'> Measure acceleration, angular velocity, 
                and orientation changes. Making Pedro stable in water.</p>
        </div>
        <div className='flex  items-center'>
            <p className='w-2/5'>GPS(Global Positioning System)</p>
            <div className='w-1/5 h-50 bg-green-50'></div>
            <p > Used to track the location of the PEDRO</p>
        </div>
        <div className='flex items-center'>
            <p className='w-2/5'>Ultra-Ssonic sensorr</p>
            <div className='w-1/5 h-50 bg-green-50'></div>
            <p> Used to identify the depth of PEDRO</p>
        </div>
    </div>
    <div className='flex flex-col gap-4'>
        <h2 className='font-bold'>Camera</h2>
        <p> Pedro uses an ULTIMATE 4K HD Camera. 
With manual enhanced visibility from an LED Lighting.</p>
    </div>



  </section>
  )
}

export default Structure