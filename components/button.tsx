import React from 'react'

type Props = {
    value:string,
    onClickFunction: () => void
}

const button = ({ value, onClickFunction }:Props) => {
  return (
    <button onClick={() => { onClickFunction(); }} className='border p-2 bg-slate-700 text-white'>{value}</button>
  )
}

export default button