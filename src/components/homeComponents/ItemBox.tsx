import React from 'react'
import women2 from "../../assets/women2.png"

function ItemBox() {
    return (
        <div className='mb-1 flex items-center gap-3 p-3 rounded-lg backdrop-blur-md  hover:bg-white/10  cursor-pointer transition-colors'>


            <div className='w-10 h-10 rounded-lg bg-slate-600 flex items-center justify-center shrink-0'>
                <span className='text-sm font-bold text-white'>
                    <img className='rounded-md' src={women2} alt="" />
                </span>
            </div>

            <div className='flex flex-col overflow-hidden'>
                <span className='text-sm font-medium text-white truncate'>Women Wool Sweater

</span>
                <span className='text-xs text-slate-400'>Sweater</span>
            </div>
        </div>
    )
}

export default ItemBox