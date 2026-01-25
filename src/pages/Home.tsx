import React, { useEffect, useState } from 'react'
import type { DtoDashboardSummary } from '../types/requestTypes';
import { GoBriefcase, GoPackage, GoInbox } from "react-icons/go";
import LineGraph from '../components/homeComponents/LineGraph';
import ItemBox from '../components/homeComponents/ItemBox';
import TopSellingItemBox from '../components/homeComponents/TopSellingItemBox';
import PieChart from '../components/homeComponents/PieChart';
import { useNavigate } from 'react-router';
import api from "../config/axios"


function Home() {
const navigate = useNavigate();

const [dashboardSummary, setDashboardSummary]= useState<DtoDashboardSummary | null>(null);
const [isLoading, setIsLoading ]=useState(false);

useEffect(()=>{
  getSummary();
},[])

const getSummary = async ()=>{
  try {
    setIsLoading(true)
    const response = await api.get('/rest/api/dashboard/summary');
    setIsLoading(false)

if ( response && response.data.data){
  setDashboardSummary(response.data.data);
  console.log(response.data.data);

}
  } catch (error) {
    setIsLoading(false)
    console.log(error);
    
  }
}










  return (
    <>
      <p className='text-slate-200 text-2xl font-medium'>Dashboard</p>
      <div className='grid grid-cols-1 lg:grid-cols-4 p-6 gap-6 items-stretch text-slate-200'>

        {/* --- SOL TARAF (3 kolon kaplar) --- */}
        <div className='lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-6'>

          {/**en üst satır */}

          <div className='grid grid-cols-3 bg-white/5 backdrop-blur-md border border-white/10   h-26 rounded-lg shadow-sm flex items-center justify-center hover:bg-white/10 cursor-pointer  gap-4 p-3 '>


            <div className='col-span-1 w-11 h-11 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0'>
              <span className='text-sm font-bold text-white '><GoBriefcase className='text-2xl font-2xl' /></span>
            </div>

            <div className='col-span-2 flex flex-col overflow-hidden'>
              <span className='text-sm text-slate-400 font-medium  truncate'>Total Sales</span>
              <span className='text-lg text-emerald-200 font-bold tracking-light'>$ 12.400</span>
            </div>

          </div>
          <div className='grid grid-cols-3 h-26 rounded-lg shadow-sm flex items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 cursor-pointer transition-colors  gap-4 p-3 '>


            <div className='col-span-1 w-11 h-11 rounded-full bg-slate-600 flex items-center justify-center shrink-0'>
              <span className='text-sm font-bold text-white'><GoInbox className='text-2xl font-2xl' /></span>
            </div>

            <div className='col-span-2 flex flex-col overflow-hidden'>
              <span className='text-sm font-medium text-slate-400 truncate'>Orders</span>
              <span className='text-lg text-indigo-200 font-bold'>210</span>
            </div>



          </div>
          <div className='grid grid-cols-3 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 h-26 rounded-lg shadow-sm flex items-center justify-center  cursor-pointer gap-4 p-3 '>


            <div className='col-span-1 w-11 h-11 rounded-full bg-slate-600 flex items-center justify-center shrink-0'>
              <span className='text-sm font-bold text-white'><GoPackage className='text-2xl font-2xl' /></span>
            </div>

            <div className='col-span-2 flex flex-col overflow-hidden'>
              <span className='text-sm font-medium  text-slate-400 truncate'>Total Items</span>
              <span className='text-lg text-sky-200 font-bold'>342</span>
            </div>
          </div>

          {/* 2. Satır: Büyük Geniş Kutu (3 kolonu da kaplar) */}
          <div className='p-5 lg:col-span-3 bg-white/5 backdrop-blur-md border border-white/10 min-h-60 xl:h-120 rounded-lg shadow-sm'>
            <LineGraph />

          </div>
          {/**3. satır */}
          <div className='overflow-y-auto scrollbar-thin px-5 lg:col-span-3 bg-white/5 backdrop-blur-md border border-white/10  h-60 xl:h-80 rounded-lg shadow-sm '>
            <div className='h-15  items-center flex  '> Top Selling Products</div>


            <div className='px-1  w-full h-10 grid grid-cols-12 text-center '  >
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
          <div className='flex-1 overflow-hidden bg-white/5 backdrop-blur-md border border-white/10  rounded-lg shadow-sm min-h-60 xl:h-152 p-4  '>
            <div className='h-15 items-center flex  '> Order Recently</div>

            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
          </div>
          {/**2.satır */}
          <div className=' bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 rounded-lg shadow-sm min-h-60 xl:h-80 p-4'>
            <div className='h-15  sticky top-0 z-10 items-center flex  '> Monthly Profits</div>
            <PieChart />
          </div>
        </div>



      </div>
    </>

  )
}

export default Home