import React from 'react'

type Props = {
  placeHolder:string,
  type:string,
  inputValueFunction: (params:string) => void
}

const textInput = ({placeHolder, type, inputValueFunction}:Props) => {
  return (
    <div className='border mb-2'>
      <input 
        className='p-1'
        type={type}
        name="name"
        placeholder={placeHolder} 
        onChange={(e) => inputValueFunction(e.target.value)}
      />
      </div>
  )
}

export default textInput