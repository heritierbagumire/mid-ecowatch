import React from 'react'

function TermsPrivacy() {
  return (
    <section className={`p-6 rounded-2xl w-3/5 lg:w-3/4 dark:bg-muted bg-white flex flex-col gap-6 mt-2`}>
    <div className='flex flex-col gap-8'>
        <h1 className='font-bold dark:text-muted-foreground text-blue-dark text-2xl'>Terms Of Use And Privacy Policy</h1>
    </div>
    <div className='flex flex-col gap-5'>
        <h2 className='font-bold'>1. Introduction</h2>
        <p> Welcome to our water drone system interface! Before accessing or using our
             platform, please carefully read and understand the following terms of use and privacy policy. By using our system interface, you agree to comply with these terms and acknowledge our privacy practices.</p>
    </div>



    <div className='flex flex-col gap-4 max-w-4xl'>
        <h2 className='font-bold'>2. Terms of use</h2>
  
        <ul className='list-disc ml-5 flex flex-col gap-4'>
     
<li>Usage Restrictions: The system interface is intended for lawful purposes only. You agree not to use the interface for any illegal or unauthorized activities.</li>
<li>Intellectual Property: All content, trademarks, and intellectual property associated with the system interface are owned by us or our licensors. You may not reproduce, distribute, or modify any part of the interface without prior written consent.</li>
<li>Data Accuracy: While we strive to provide accurate and up-to-date information through the system interface, we make no guarantees regarding the completeness or accuracy of the data. Users are responsible for verifying the information obtained
    </li>
<li>Liability Limitation: We shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of the system interface, including but not limited to loss of data, revenue, or profits.</li>
        </ul>
       
    </div>
    <div className='flex flex-col gap-4'>
        <h2 className='font-bold'>3. Privacy Policy</h2>
        <p> You acknowledge that Licensor retains all rights, title, and interest 
            in and to the System, including all intellectual property rights. This Agreement does 
            not grant you any ownership rights to the System.</p>
    </div>



  </section>
  )
}

export default TermsPrivacy