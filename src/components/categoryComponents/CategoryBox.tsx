
import React from 'react'
import { GoFileDirectory } from "react-icons/go";

function CategoryBox({ data }: { data: any }) {
    console.log(data);
    return (
        <div>
            <div className='grid grid-cols-6 bg-white/5 backdrop-blur-md border border-white/10 cursor-pointer  hover:bg-white/10    h-23 rounded-lg shadow-sm flex items-center justify-center   gap-4 p-3 '>
                <div className='col-span-2 w-full h-full items-center flex '>

                    {/**pic and name */}
                    <div className=' grid grid-cols-3  flex  items-center' >
                        <div className='lg:col-span-1 flex w-full h-15 flex items-center justify-center rouneded-md py-2 '>
                            <div  className=' object-contain w-full h-full rounded-md'>
                                <GoFileDirectory  className= 'ml-5 md:flex w-6 object-contain  h-full rounded-md' />
                            </div>
                        </div>
                        <div className=' ml-10 lg:flex flex lg:col-span-2'>
                            <p className=''> {data.name} </p>
                        </div>
                    </div>

                </div>


            </div>
        </div>

    )
}

export default CategoryBox