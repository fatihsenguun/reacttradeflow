import React, { useEffect, useState } from 'react'
import ProductBox from '../components/productsComponents/ProductBox'
import women from "../assets/women2.png"
import api from '../config/axios';



function Products() {


  const [isLoading, setIsLoading] = useState(false);

useEffect(()=>{
  getProducts();
},[])


const getProducts = async () => {
    try {
      setIsLoading(true)
      const response = await api.get('/rest/api/product/all',{
        params:{
          page:0,
          size:10
        }
      });
      setIsLoading(false)

      if (response && response.data.data) {
        console.log(response.data.data);
      


      }
    } catch (error) {
      setIsLoading(false)
      console.log(error);

    }
  }






  return (
    <div>
      <p className='text-slate-200 text-2xl font-medium'>Products</p>
      <div className='p-6'>

        <div className='grid grid-cols-6 bg-white/15 backdrop-blur-md border border-white/10   h-15 rounded-lg shadow-sm flex items-center justify-center   gap-4 p-3 '>
          <div className='col-span-2 w-full h-full items-center flex display-center '>

            {/**pic and name */}
            <div className=' col-span-3 grid grid-cols-4 lg:col-span-6 flex display-center   items-center' >


              <p className='font-medium' > Products </p>

            </div>

          </div>

          <div className='col-span-1 w-full h-full items-center flex'>

            <div className='display-center flex  items-center' >
              <span className='font-medium'>Stock</span>

            </div>

          </div>

          <div className='col-span-3 items-center flex w-full h-full'>
            <div className='display-center flex  items-center' >
              <span className='font-medium'>Tags</span>

            </div>
          </div>


        </div>

        <ProductBox />

      </div>


    </div>
  )
}

export default Products