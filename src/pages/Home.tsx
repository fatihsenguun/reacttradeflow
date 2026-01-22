import React from 'react'
import { GoBriefcase, GoPackage, GoInbox } from "react-icons/go";
import LineGraph from '../components/homeComponents/LineGraph';
import ItemBox from '../components/homeComponents/ItemBox';

function Home() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 p-6 gap-6 items-stretch text-slate-200'>

      {/* --- SOL TARAF (3 kolon kaplar) --- */}
      <div className='lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-6'>

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
        <div className='p-5 lg:col-span-3 bg-slate-800 min-h-60 xl:h-120 rounded-lg shadow-sm'>
          <LineGraph />

        </div>
        {/**3. satır */}
        <div className='p-5  lg:col-span-3 bg-slate-800 min-h-60 xl:h-120 rounded-lg shadow-sm '>
          <div className='h-10  '>Top Selling Products</div>


          <div className='bg-slate-800 border border-slate-700 hover:bg-slate-700 w-full h-10 grid grid-cols-6 text-center rounded-lg'  >
            <div className='col-span-3  flex justify-center items-center' >Products </div>
            <div className='col-span-1  flex justify-center items-center'>Status</div>
            <div className='col-span-1 flex justify-center items-center'>Sales</div>
            <div className='col-span-1  flex justify-center items-center'>Earning</div>

          </div>

        </div>

      </div>

      {/* --- SAĞ TARAF (1 kolon kaplar) --- */}

      <div className='lg:col-span-1 flex flex-col gap-6'>
        <div className='flex-1 overflow-hidden bg-slate-800 rounded-lg shadow-smmin-h-60 xl:h-152 p-4'>
          <ItemBox />
          <ItemBox />
          <ItemBox />
          <ItemBox />
        </div>
         <div className=' bg-slate-800 rounded-lg shadow-smmin-h-60 xl:h-120 p-4'>
         </div>
      </div>
      
    

    </div>
  )
}

export default Home