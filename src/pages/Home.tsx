import React from 'react'
import { GoBriefcase, GoPackage, GoInbox } from "react-icons/go";
import LineGraph from '../components/homeComponents/LineGraph';
import ItemBox from '../components/homeComponents/ItemBox';
import TopSellingItemBox from '../components/homeComponents/TopSellingItemBox';
import PieChart from '../components/homeComponents/PieChart';

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
        <div className='overflow-y-auto scrollbar-thin px-5 lg:col-span-3 bg-slate-800 h-60 xl:h-80 rounded-lg shadow-sm '>
          <div className='h-15  sticky top-0 z-10 bg-slate-800 items-center flex  '> Top Selling Products</div>


          <div className='px-1 border-b  border-slate-700   bg-slate-800  w-full h-10 grid grid-cols-12 text-center '  >
            <div className=' col-span-3  lg:col-span-6  flex justify-center lg:justify-start items-center  lg:px-8' >Products </div>
            <div className='col-span-3  lg:col-span-2   flex justify-center items-center'>Status</div>
            <div className='col-span-3  lg:col-span-2   flex justify-center items-center'>Sales</div>
            <div className='col-span-3  lg:col-span-2   flex justify-center items-center'>Earning</div>

          </div>
          <TopSellingItemBox />
          <TopSellingItemBox />
          <TopSellingItemBox />
          <TopSellingItemBox />
          <TopSellingItemBox />

        </div>

      </div>

      {/* --- SAĞ TARAF (1 kolon kaplar) --- */}

      <div className='lg:col-span-1 flex flex-col gap-6'>
        <div className='flex-1 overflow-hidden bg-slate-800 rounded-lg shadow-smmin-h-60 xl:h-152 p-4'>
          <div className='h-15  sticky top-0 z-10 bg-slate-800 items-center flex  '> Order Recently</div>

          <ItemBox />
          <ItemBox />
          <ItemBox />
          <ItemBox />
        </div>
        {/**2.satır */}
        <div className=' bg-slate-800 rounded-lg shadow-sm min-h-60 xl:h-80 p-4'>
          <div className='h-15  sticky top-0 z-10 bg-slate-800 items-center flex  '> Monthly Profits</div>
          <PieChart />
        </div>
      </div>



    </div>
  )
}

export default Home