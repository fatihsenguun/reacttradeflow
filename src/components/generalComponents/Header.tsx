import React, { useState } from 'react'
import logo from "../../assets/logo.png"

function Header() {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}
                className='md:hidden fixed top-4 left-4  p-2 rounded-md bg-slate-800 text-white' >
                <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
            </button>
            {isOpen && (
                <div className='fixed inset-0 bg-black/50 z-40 md:hidden'
                    onClick={() => setIsOpen(false)}>

                </div>
            )}
            <aside className={`fixed top-0 left-o z-40 h-screen w-64 bg-slate-950 border-r border-slate-800 transition-transform duration-300 ease-in-out${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`} >
                <div className='h-20 flex items-center px-6 border-6 border-slate-900'>
                    <img src={logo} className='h-15 w-auto' />

                </div>

            </aside>

        </div>
    )
}

export default Header