import React from 'react'

function HeaderButton({name}:{name:string}) {
    return (
        <button className='cursor-pointer  transition-all duration-200 hover:text-white hover:bg-slate-800 text-slate-200 w-full text-left  bg-slate h- row-span-1 rounded-lg'>
            <h2 className='ml-6'>{name}</h2>
        </button>
    )
}

export default HeaderButton