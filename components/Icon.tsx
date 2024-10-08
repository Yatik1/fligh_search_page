import React from 'react'

interface IconProps{
    icon:JSX.Element;
    onclick?:()=>void;
    className?:string;
    bg?:boolean;
    border?:boolean;
}

const Icon = ({icon,onclick,bg,className,border}:IconProps) => {
  return (
    <div className={`p-[0.9rem] rounded-full flex items-center justify-center ${bg ? "bg-[#F5F7FA]" : ""} ${border && "border border-[#E6E8EB]"}`} onClick={onclick}>
        <div className={`${bg ? "text-black" : "text-[#C9CACC]"} w-5 h-5 flex items-center justify-center ${className}`}>
            {icon}
        </div>
    </div>
  )
}

export default Icon