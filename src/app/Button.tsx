import React from 'react'
import Image from 'next/image'

type ButtonProps ={
    type:'button'|'submit';
    title:string;
    name:string;
    icon?:string;
    variant:string;
    full?:boolean;
    selectedTheme: string;
  onSelectTheme: (theme: string) => void;
}
function Button({type,title,icon,variant,full,name,selectedTheme,onSelectTheme}:ButtonProps ) {
  return (
    
    <button
    className={`flexCenter gap-3hover:transform hover:scale-105 hover:opacity-80 transition-all duration-700 text-${name===selectedTheme?'black':'white'} rounded-2xl h-12 border bg-${variant} ${full&&"w-full"}`}
    onClick={()=>onSelectTheme(name)}
    
    type={type}>
     {icon && <Image src={icon} alt={title} width={24} height={24}/>}
     <label className="whitespace-nowrap bold-16 cursor-pointer
     ">{name===selectedTheme?'Current theme':`${title}`} </label>
        </button>
  )
}

export default Button