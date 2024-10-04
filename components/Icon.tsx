import React from 'react'

interface IconProps{
    icon:JSX.Element;
    onclick?:()=>void
}

const Icon = ({icon,onclick}:IconProps) => {
  return (
    <div className='p-2 rounded-full flex items-center justify-center' onClick={onclick}>
        <div className="w-4 h-4 flex items-center justify-center text-[#C9CACC]">
            {icon}
        </div>
    </div>
  )
}

export default Icon