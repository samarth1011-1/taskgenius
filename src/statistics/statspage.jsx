import React from 'react'
import Pie from './piechart'
const statspage = () => {
  return (
    <>
    <div className='bg-[#e0be60] h-screen w-screen flex flex-col text-center'>
    <div className='text-white text-5xl my-5'>
      Statistics

    </div>

      <Pie/>
    </div>
    </>
  )
  
}

export default statspage
