import React, { useState } from 'react'
import logo from "../../assets/logoTradeFlow.png"
import HeaderButton from './HeaderButton';
import { GoHome, GoInbox, GoTag, GoPeople, GoGear, GoFileDirectory, GoListUnordered } from "react-icons/go";

import { useNavigate } from 'react-router';

function Header() {

    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    const role = localStorage.getItem("role");

    const navigate = useNavigate();



    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}
                className={`md:hidden z-[100]   fixed top-4 left-2  p-2 rounded-md bg-slate-800 text-white  ${isOpen ? "translate-x-72  " : ""} `} >
                <svg className={`w-6 h-6 `} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
            </button>
            {isOpen && (
                <div className='fixedinset-0 bg-black/50 z-40 md:hidden'
                    onClick={() => setIsOpen(false)}>


                </div>
            )}

            <div>
                <div>

                </div>
                <div className={` w-72 fixed top-0   left-0 z-40 h-screen bg-slate-800 border-r border-slate-800 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`} >

                    <div className='p-4 h-full flex flex-col bg-slate-950 '>
                        <div className=' h-20 flex items-center bg-slate-950 '>
                            <img src={logo} className=' h-16 w-auto' />
                            <div className='text-white'>

                            </div>

                        </div>

                        <div className='flex flex-col  gap-1'>
                            <HeaderButton name="Dashboard" path='/' icon={<GoHome />} />
                            <HeaderButton name="Orders" path='/orders' icon={<GoInbox />} />
                            <HeaderButton name="Products" path='/products' icon={<GoTag />} />
                            <HeaderButton name="Category" path='/category' icon={<GoFileDirectory />} />
                            <HeaderButton name="Customers" path='/customers' icon={<GoPeople />} />
                            <HeaderButton name="Settings" path='/settings' icon={<GoGear />} />
                        </div>

                        <div className='mt-auto'></div>

                        {/**profile button */}


                        <button onClick={() => navigate("/profile")} className='pt-4'>
                            <div className='flex items-center gap-3 p-3 rounded-xl bg-slate-800 hover:bg-slate-700 cursor-pointer transition-colors'>


                                <div className='w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center shrink-0'>
                                    <span className='text-sm font-bold text-white'>{(firstName?.charAt(0) || "").toUpperCase() + (lastName?.charAt(0) || "").toUpperCase()}</span>
                                </div>

                                <div className='flex flex-col overflow-hidden w-full'>
                                    <span className='text-sm flex font-medium text-white truncate'>{firstName + " " + lastName}</span>
                                    <span className='w-full flex display-start text-xs text-slate-400'>{role}</span>
                                </div>
                            </div>
                        </button>





                    </div>


                </div>
            </div>


        </div>
    )
}

export default Header