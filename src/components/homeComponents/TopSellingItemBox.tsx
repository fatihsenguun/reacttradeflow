import React from 'react'
import women2 from "../../assets/women2.png"

function TopSellingItemBox() {
    return (
        <div className='px-4 my-1  bg-white/5 backdrop-blur-md hover:bg-white/10  w-full h-15 grid grid-cols-12 items-center  text-center rounded-lg'  >
            {/**image and name */}
            <div className=' col-span-3 grid grid-cols-4 lg:col-span-6 flex  items-center' >
                <div className='col-span-3 lg:col-span-1 flex w-full h-15 flex items-center justify-center rouneded-md py-2 '>
                    <img src={women2} alt="" className='object-contain  h-full rounded-md' />
                </div>
                <div className='hidden lg:flex lg:col-span-2'>
                    <p className='overflow-hidden truncate'> Women Wool Sweater </p>
                </div>
            </div>

            {/**live */}
            <div className='col-span-3 lg:col-span-2  flex justify-center items-center  '>
                <div className='bg-sky-200 w-15 h-8 rounded-lg justify-center items-center flex'>
                    <p className='text-sky-500 text-sm'>Live</p>
                </div>
            </div>

            <div className='col-span-3  lg:col-span-2  flex justify-center items-center'>459</div>

            <div className='col-span-3  lg:col-span-2   flex justify-center items-center'>$ 122,900</div>

        </div>
    )
}

export default TopSellingItemBox