import React from 'react'
 
function Licence() {
  return (
  <section className={`p-6 dark:bg-muted rounded-2xl w-3/5 lg:w-3/4 bg-white flex flex-col gap-6 mt-2 overflow-hidden`}>
      <div className='flex flex-col gap-8 flex-wrap'>
        <h1 className='font-bold dark:text-muted-foreground text-wrap w-lg text-blue-dark text-2xl'>Licence Agreement</h1>
        <div className='max-w-4xl'>
          This License Agreement is a legal agreement between you (either an individual or a single entity) and EcoWatch Licensor for the use of the water drone system interface System. By accessing or using the System, you agree to be bound by the terms of this Agreement.
        </div>
      </div>
      <div className='flex flex-col gap-5 w-4/5'>
        <h2 className='font-bold'>1. Licence Grant</h2>
        <div className='max-w-4xl'>
          <p>Carefully unpack and assemble the water drone according to the provided instructions.</p>
          <div className='list-disc ml-5 '>
            <li>Ensure that all components, including the propulsion system, sensors, and communication modules, are securely connected and functional.</li>
            <li>Charge the drones batteries fully before the initial use to ensure uninterrupted operation.</li>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-4 w-4/5'>
        <h2 className='font-bold'>2. License Fees</h2>
        <div className='max-w-4xl'>
          In consideration for the use of the System, you agree to pay the applicable license fees as determined by Licensor. Failure to pay the license fees may result in the suspension or termination of your license to use the System.
        </div>
      </div>

      <div className='flex flex-col gap-4 w-4/5'>
        <h2 className='font-bold'>3. Restrictions</h2>
        <div>
          <p>You may not:</p>
          <ul className='list-disc ml-5'>
            <li>Reverse engineer, decompile, or disassemble the System.</li>
            <li>Modify, adapt, or create derivative works based on the System.</li>
            <li>Rent, lease, lend, or sublicense the System to any third party.</li>
            <li>Remove or alter any copyright, trademark, or other proprietary notices contained in the System.</li>
          </ul>
        </div>
      </div>

      <div className='flex flex-col gap-4 w-4/5'>
        <h2 className='font-bold'>4. Ownership</h2>
        <p>
          You acknowledge that Licensor retains all rights, title, and interest in and to the System, including all intellectual property rights. This Agreement does not grant you any ownership rights to the System.
        </p>
      </div>
    </section>
  )
}

export default Licence