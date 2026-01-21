import React from 'react'
import { GoBriefcase, GoPackage, GoInbox } from "react-icons/go";

function Home() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 p-6 gap-6 items-stretch text-slate-200'>

      {/* --- SOL TARAF (3 kolon kaplar) --- */}
      <div className='lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* 1. Satır: 3 Küçük Kutu */}
        <div className='grid grid-cols-3 bg-slate-800 h-26 rounded-lg shadow-sm flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-colors  gap-4 p-3 '>


          <div className='col-span-1 w-11 h-11 rounded-full bg-slate-600 flex items-center justify-center shrink-0'>
            <span className='text-sm font-bold text-white'><GoBriefcase className='text-2xl font-2xl' /></span>
          </div>

          <div className='col-span-2 flex flex-col overflow-hidden'>
            <span className='text-sm text-slate-300 font-medium  truncate'>Total Sales</span>
            <span className='text-lg text-teal-300 font-bold'>$ 12.400</span>
          </div>



        </div>
        <div className='grid grid-cols-3 bg-slate-800 h-26 rounded-lg shadow-sm flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-colors  gap-4 p-3 '>


          <div className='col-span-1 w-11 h-11 rounded-full bg-slate-600 flex items-center justify-center shrink-0'>
            <span className='text-sm font-bold text-white'><GoInbox className='text-2xl font-2xl' /></span>
          </div>

          <div className='col-span-2 flex flex-col overflow-hidden'>
            <span className='text-sm font-medium text-white truncate'>Orders</span>
            <span className='text-lg text-sky-300 font-bold'>210</span>
          </div>



        </div>
        <div className='grid grid-cols-3 bg-slate-800 h-26 rounded-lg shadow-sm flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-colors  gap-4 p-3 '>


          <div className='col-span-1 w-11 h-11 rounded-full bg-slate-600 flex items-center justify-center shrink-0'>
            <span className='text-sm font-bold text-white'><GoPackage className='text-2xl font-2xl' /></span>
          </div>

          <div className='col-span-2 flex flex-col overflow-hidden'>
            <span className='text-sm font-medium text-white truncate'>Total Items</span>
            <span className='text-lg text-yellow-300 font-bold'>342</span>
          </div>



        </div>

        {/* 2. Satır: Büyük Geniş Kutu (3 kolonu da kaplar) */}
        <div className='lg:col-span-3 bg-slate-800 h-120 rounded-lg shadow-sm'></div>
      </div>

      {/* --- SAĞ TARAF (1 kolon kaplar) --- */}
      {/* Gereksiz iç gridleri ve col-spanleri temizledik */}
      <div className='lg:col-span-1'>
        <div className='bg-slate-800 rounded-lg shadow-sm h-64 lg:h-full'>
          {/* h-64 mobilde görünmesini sağlar, lg:h-full masaüstünde boyunu sola eşitler */}
          <p></p>
        </div>
      </div>

    </div>
  )
}

export default Home