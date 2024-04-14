import React from 'react'
 interface Props{
  width:string
 }
function Licence({width}:Props) {
  return (
  <section className={`p-6 rounded-2xl w-${width} bg-white flex flex-col gap-6 mt-2`}>
    <div className='flex flex-col gap-8'>
        <h1 className='font-bold text-blue-dark text-2xl'>Licence Agreement</h1>
        <p>This License Agreement a legal agreement between you (either an individual or
             a single entity) and EcoWatch Licensor for the use of the water drone system interface System. By accessing or using the
             System, you agree to be bound by the terms of this Agreement.</p>
    </div>
    <div className='flex flex-col gap-5'>
        <h2 className='font-bold'>1.Licence Grant</h2>
        <div><p> Carefully unpack and assemble the water drone according to the provided instructions.</p>
        <ul className='list-disc ml-5'>
        <li>Ensure that all components, including the propulsion system, sensors, and communication modules, are securely connected and functional.</li>
        <li>Charge the drone's batteries fully before the initial use to ensure uninterrupted operation.</li>
        </ul>
        </div>
    </div>

    <div className='flex flex-col gap-4'>
        <h2 className='font-bold'>2. License Fees</h2>
        <p> In consideration for the use of the System, you agree to pay the applicable
             license fees as determined by Licensor. Failure to pay the license fees may
              result in the suspension or termination of your license to use the System.</p>
    </div>

    <div className='flex flex-col gap-4'>
        <h2 className='font-bold'>3. Restrictions</h2>
        <div><p> You may not: </p>
        <ul className='list-disc ml-5'>
     
<li>Reverse engineer, decompile, or disassemble the System.</li>
<li>Modify, adapt, or create derivative works based on the System.</li>
<li>Rent, lease, lend, or sublicense the System to any third party.</li>
<li>Remove or alter any copyright, trademark, or other proprietary notices contained in the System.</li>
        </ul>
        </div>
    </div>
    <div className='flex flex-col gap-4'>
        <h2 className='font-bold'>4. Ownership</h2>
        <p> You acknowledge that Licensor retains all rights, title, and interest 
            in and to the System, including all intellectual property rights. This Agreement does 
            not grant you any ownership rights to the System.</p>
    </div>



  </section>
  )
}

export default Licence