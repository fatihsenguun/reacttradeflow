import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import OrderBox from '../components/ordersComponents/OrderBox'; 
import api from '../config/axios';

function Orders() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState<any[]>([]); 

  useEffect(() => {
    getOrders();
  }, [])

  const getOrders = async () => {
    try {
        setIsLoading(true);
        const response = await api.get('/rest/api/order/admin/all', {
            params: {
                page: 0,
                size: 10
            }
        });
        setIsLoading(false);

        if (response && response.data && response.data.data) {
            console.log("Orders Data:", response.data.data.content);
            setOrders(response.data.data.content);
        }

    } catch (error) {
        setIsLoading(false);
        console.log("Siparişler çekilemedi:", error);
    }
  }

  return (
    <div>
     <div className='flex justify-between items-center mb-6'>
       <p className='text-slate-200 text-2xl font-medium'>Orders</p>

       <button className='bg-white/5 backdrop-blur-md border border-white/10 cursor-pointer hover:bg-white/10 w-30 h-10 text-sm rounded-lg text-slate-200 transition-colors' onClick={()=>navigate("/orders/create")}>
         + Create Order 
       </button>
     </div>


      <div className='p-6 text-slate-200 flex flex-col gap-4'>


        <div className='grid grid-cols-6 bg-white/15 backdrop-blur-md border border-white/10 h-15 rounded-lg shadow-sm flex items-center justify-center gap-4 p-3'>
          
          <div className='col-span-2 w-full h-full items-center flex'>

              <span className='font-medium pl-2'>Order Info</span>
          </div>

          <div className='col-span-1 w-full h-full items-center flex'>
              <div className='display-center flex items-center'>
                <span className='font-medium'>Total Amount</span>
              </div>
          </div>

          <div className='col-span-1 w-full h-full items-center flex'>
              <div className='display-center flex items-center'>
                <span className='font-medium'>Date</span>
              </div>
          </div>

          <div className='col-span-2 items-center flex w-full h-full'>
              <div className='display-center flex items-center'>
                <span className='font-medium'>Status</span>
              </div>
          </div>
        </div>

        {isLoading ? (
            <p className="text-slate-400 text-center">Loading orders...</p>
        ) : (
            orders.length > 0 ? (
                orders.map((order) => (
                    <OrderBox key={order.id} data={order} />
                ))
            ) : (
                <div className="text-slate-500 text-center py-10">No orders found.</div>
            )
        )}

      </div>
    </div>
  )
}

export default Orders