import React, { useState } from 'react'
import logo from "../../assets/logoTradeFlow.png"
import HeaderButton from './HeaderButton';
import { GoHome, GoInbox, GoTag, GoPeople, GoGear, GoFileDirectory, GoX, GoListUnordered } from "react-icons/go";
import { useNavigate } from 'react-router';

function Header() {

    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    const role = localStorage.getItem("role");

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden fixed top-4 left-4 z-[60] p-2 rounded-lg bg-slate-800/90 text-white backdrop-blur-sm border border-white/10 shadow-lg hover:bg-slate-700 transition-all"
            >
                {isOpen ? <GoX className="w-6 h-6" /> : <GoListUnordered className="w-6 h-6" />}
            </button>

            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 z-50 h-screen w-72 bg-[#0b1120] border-r border-white/5 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 flex flex-col`}>

                {/* Logo Section */}
                <div className="flex items-center gap-3 px-6 h-24 border-b border-white/5 bg-slate-900/50">
                    <img src={logo} alt="TradeFlow Logo" className="h-15 w-auto object-contain" />
                   
                </div>

                {/* Navigation Links */}
                <div className="flex-1 overflow-y-auto py-6 px-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                    <div className="mb-2 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Main Menu
                    </div>

                    <div className="flex flex-col gap-2">
                        <HeaderButton name="Dashboard" path='/' icon={<GoHome />} />
                        <HeaderButton name="Orders" path='/orders' icon={<GoInbox />} />
                        <HeaderButton name="Products" path='/products' icon={<GoTag />} />
                        <HeaderButton name="Category" path='/category' icon={<GoFileDirectory />} />
                        <HeaderButton name="Customers" path='/customers' icon={<GoPeople />} />
                    </div>

                    <div className="mt-8 mb-2 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        System
                    </div>

                    <div className="flex flex-col gap-2">
                        <HeaderButton name="Settings" path='/settings' icon={<GoGear />} />
                    </div>
                </div>

                {/* Profile Section */}
                <div className="p-4  border-t border-white/5 bg-slate-900/30">
                    <button
                        onClick={() => navigate("/profile")}
                        className="w-full cursor-pointer group flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5"
                    >
                        <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 border border-indigo-500/30 group-hover:border-indigo-400/50 transition-colors">
                            <span className="text-sm font-bold text-indigo-400 group-hover:text-indigo-300">
                                {(firstName?.charAt(0) || "").toUpperCase()}{(lastName?.charAt(0) || "").toUpperCase()}
                            </span>
                        </div>

                        <div className="flex flex-col items-start overflow-hidden">
                            <span className="text-sm font-medium text-slate-200 group-hover:text-white truncate transition-colors">
                                {firstName} {lastName}
                            </span>
                            <span className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                                {role}
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Header