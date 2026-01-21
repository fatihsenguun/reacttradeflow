import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router';


interface HeaderButtonProps {

    name: string;
    icon: React.ReactNode
    path: string

}




function HeaderButton({ name, icon, path }: HeaderButtonProps) {
    const location = useLocation();
    const isActive = location.pathname === path;



    const navigate = useNavigate();
    return (
        <button onClick={() => navigate(path)} className={` ${isActive ? "text-slate-200 bg-slate-800" : " text-slate-400"} gap-1 cursor-pointer transition-all duration-200 font-medium hover:text-slate-200 hover:bg-slate-800 w-full h-11 text-left  bg-slate row-span-1 rounded-md `}>

            <h2 className='ml-3 flex text-center flex items-center diplay-center flex-row ' ><span className='text-2xl flex  mr-2'> {icon}</span><span>{name}</span></h2>
        </button>
    )
}

export default HeaderButton