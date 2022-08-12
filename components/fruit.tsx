import React from 'react'

type Props = {
    value?: string,
    clickHandle: (val:string) => void
}

const fruit = ({ value, clickHandle }:Props) => {
  return (
    <div 
      className='h-[100px] flex-[1_0_21%] px-5 flex justify-center items-center cursor-pointer border'
      onClick={() => clickHandle(value ? value : 'no-value')}
    >    
      {value}
    </div>
  )
}

export default fruit