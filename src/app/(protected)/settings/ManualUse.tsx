import React from 'react'


function ManualUse() {
  return (
    <section className={`p-6 dark:bg-muted rounded-2xl w-3/5 lg:w-3/6 bg-white flex flex-col gap-6 mt-2 overflow-hidden`}>
    <div className='flex flex-col gap-8 flex-wrap '>
        <h1 className='font-bold dark:text-muted-foreground text-blue-dark text-2xl'>Water Drone User Manual</h1>
        <p>Congratulations on acquiring your water drone integrated with a system interface! 
            This manual will guide you through the proper usage of your water drone and its interface system for optimal performance and functionality.</p>
    </div>
    <div className='flex flex-col gap-5'>
        <h2 className='font-bold'>1.Drone Assembly and Setup:</h2>
        <div><p>Carefully unpack and assemble the water drone according to the provided instructions.</p>
        <ul className='list-disc ml-5'>
        <li>Ensure that all components, including the propulsion system, sensors, and communication modules, are securely connected and functional.</li>
        <li>Charge the drones batteries fully before the initial use to ensure uninterrupted operation.</li>
        </ul>
        </div>
    </div>

    <div className='flex flex-col gap-4'>
        <h2 className='font-bold'>2. System Interface Installation</h2>
        <div><p>Install the system interface software on your designated device (e.g., smartphone, tablet, or laptop) by following the provided instructions.</p>
        <ul className='list-disc ml-5'>
     
<li>Pair the water drone with the system interface via the designated communication protocol (e.g., Bluetooth, Wi-Fi, or USB).</li>
    </ul>
        </div>
    </div>

    <div className='flex flex-col gap-4'>
        <h2 className='font-bold'>3. Pre-dive Chechlist:</h2>
        <div><p>Before each dive, perform a thorough inspection of the water drone to ensure that all components are in working order and securely fastened.</p>
        <ul className='list-disc ml-5'>
     
<li>Check the battery levels and confirm that they are sufficient for the intended operation duration.</li>
<li>Verify the calibration of onboard sensors and adjust settings as needed for accurate data collection.</li>

        </ul>
        </div>
    </div>
    <div className='flex flex-col gap-4'>
        <h2 className='font-bold'>4. Operating the Water Drone:</h2>
        <p> You acknowledge that Licensor retains all rights, title, and interest 
            in and to the System, including all intellectual property rights. This Agreement does 
            not grant you any ownership rights to the System.</p>
    </div>



  </section>
  )
}

export default ManualUse