import React from 'react'

const Btn = ({label , iconURL}) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-purple-600  border-purple-600  rounded-full text-white'>
    {label}
    <img src={iconURL} alt="arrow right icon" className='ml-2 rounded-full w-5 h-5' />
</button>
  )
}

export default Btn
