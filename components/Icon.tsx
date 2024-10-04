import React from 'react'

interface IconProps{
    icon:JSX.Element;
    onclick?:()=>void;
    bg?:boolean;
}

const Icon = ({icon,onclick,bg}:IconProps) => {
  return (
    <div className={`p-[0.9rem] rounded-full flex items-center justify-center ${bg ? "bg-[#F5F7FA]" : ""}`} onClick={onclick}>
        <div className={`${bg ? "text-black" : "text-[#C9CACC]"} w-4 h-4 flex items-center justify-center`}>
            {icon}
        </div>
    </div>
  )
}

export default Icon