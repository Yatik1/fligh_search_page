import React from 'react'

interface IconProps{
    icon:JSX.Element;
    onclick?:()=>void;
    iconStyle?:string;
    bgStyle?:string;
}

const Icon = ({icon,onclick,iconStyle,bgStyle}:IconProps) => {
  return (
    <div className={bgStyle} onClick={onclick}>
        <div className={iconStyle}>
            {icon}
        </div>
    </div>
  )
}

export default Icon
