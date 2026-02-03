import React, { useEffect, useState } from 'react'
import ProductBox from '../components/productsComponents/ProductBox'
import women from "../assets/women2.png"
import api from '../config/axios';
import type { DtoProduct } from '../types/requestTypes';
import { useNavigate } from 'react-router';



function Products() {

const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, [])


  const getProducts = async () => {
    try {
      setIsLoading(true)
      const response = await api.get('/rest/api/product/all', {
        params: {
          page: 0,
          size: 10
        }
      });
      setIsLoading(false)

      if (response && response.data.data) {
        setProducts(response.data.data.content);
   

      }
    } catch (error) {
      setIsLoading(false)
      console.log(error);

    }
  }






  return (
    <div>
     <div className=' flex justify-between'>
       <p className='text-slate-200 text-2xl font-medium'>Products</p>
       <button className=' bg-white/15 backdrop-blur-md border border-white/10 cursor-pointer hover:bg-white/10   w-30 h-10 text-sm rounded-lg' onClick={()=>navigate("/products/add")}>+ Add Product </button>
     </div>

      <div className='p-6'>

        <div className='grid grid-cols-6 bg-white/15 backdrop-blur-md border border-white/10   h-15 rounded-lg shadow-sm flex items-center justify-center   gap-4 p-3 '>
          <div className='col-span-2 w-full h-full items-center flex display-center '>


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
        {products.map((product:DtoProduct)=>(
             <ProductBox key={product.id} data={product} />
        ))}

     

      </div>


    </div>
  )
}

export default Products