import React from 'react'
import women from "../../assets/women2.png"

function ProductBox() {
    return (
        <div className='grid grid-cols-6 bg-white/5 backdrop-blur-md border border-white/10 cursor-pointer  hover:bg-white/10    h-26 rounded-lg shadow-sm flex items-center justify-center   gap-4 p-3 '>
            <div className='col-span-2 w-full h-full items-center flex '>

                {/**pic and name */}
                <div className=' col-span-3 grid grid-cols-4 lg:col-span-6 flex  items-center' >
                    <div className='col-span-3 lg:col-span-1 flex w-full h-15 flex items-center justify-center rouneded-md py-2 '>
                        <img src={women} alt="" className='object-contain  h-full rounded-md' />
                    </div>
                    <div className='hidden lg:flex lg:col-span-2'>
                        <p className='overflow-hidden truncate'> Women Shirts </p>
                    </div>
                </div>

            </div>

            <div className='col-span-1 w-full h-full items-center flex'>

                <div className='display-center flex  items-center' >
                    <span>25</span>

                </div>

            </div>

            <div className='col-span-3 items-center flex w-full h-full'>
                <div className='display-center flex  items-center' >
                    <span>Women,Shirts</span>

                </div>
            </div>


        </div>
    )
}

export default ProductBox