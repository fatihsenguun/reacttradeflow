import React from 'react'

function ItemBox() {
    return (
        <div className='flex items-center gap-3 p-3 rounded-lg bg-slate-800 hover:bg-slate-700 cursor-pointer transition-colors'>


            <div className='w-10 h-10 rounded-lg bg-slate-600 flex items-center justify-center shrink-0'>
                <span className='text-sm font-bold text-white'>asd</span>
            </div>

            <div className='flex flex-col overflow-hidden'>
                <span className='text-sm font-medium text-white truncate'>asd</span>
                <span className='text-xs text-slate-400'>asd</span>
            </div>
        </div>
    )
}

export default ItemBox