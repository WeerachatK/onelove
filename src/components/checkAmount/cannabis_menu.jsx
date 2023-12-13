import React from 'react'

function Cannabis_menu({ name }) {
  return (
    <div className='h-[120px] w-[300px] border-2 border-[#355A20] rounded-lg mx-3 my-3 p-[10px] flex flex-shrink-0'>
        <div className='bg-[#355A20] w-[120px] h-full mr-[10px]'>
        </div>
        {name}
    </div>
  )
}

export default Cannabis_menu