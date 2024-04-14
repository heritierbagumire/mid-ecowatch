"use client"
import React,{useState} from 'react'
import Header from '../Header'
import NavBar from '../NavBar'
import SideBar from './SideBar'
import ManualUse from './ManualUse'
import Licence from './Licence'
import Structure from './Structure'
import TermsPrivacy from './TermsPrivacy'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Mode from './Mode'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleDown'

function SettingsPage() {
  const [selectedPage,setSelectedPage] = useState<string>("System Mode")
  
  const handlePageSelection =(page :string) =>{
    setSelectedPage(page);
  };
  const [hidden, setHidden] = useState(false);
  const handleHidden =()=> 
  {
   setHidden(!hidden);
  }

  return (
    <div className='flex bg-gray-15' >
    <NavBar />
    <div className='flex flex-col gap-'>
    <Header
    title='Settings'
    />

    <div className='flex gap-6'>

      <div className={`${hidden?'hidden':''} w-1/4 `}>
        <SideBar selectedPage={selectedPage} onSelectPage={handlePageSelection}/>
        </div>
            {selectedPage === "Licence" && <Licence width={hidden?'full':'3/4'} />}
            {selectedPage === "Components" && <Structure  width={hidden?'full':'3/4'} />}
            {selectedPage === "Terms & Privacy" && <TermsPrivacy   width={hidden?'full':'3/4'}/>}
            {selectedPage === "Usage Manual" &&  <ManualUse  width={hidden?'full':'3/4'}/>}
            {selectedPage === "System Mode" && <Mode  width={hidden?'full':'3/4'}/>}
            <FontAwesomeIcon icon={faBars} className={`fixed bg-orange-50 active:bg-gray-20 rounded-md w-8 h-8 p-2 left-6 ${hidden?'left-[31px] ':''}`} onClick={handleHidden}/>

      
    </div>

    </div>
       
</div>
  )
}

export default SettingsPage