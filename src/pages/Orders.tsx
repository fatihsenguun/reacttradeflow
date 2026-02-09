import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import OrderBox from '../components/ordersComponents/OrderBox'; 


function Orders() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState<any[]>([]); 

  useEffect(() => {
    getOrders();
  }, [])

  const getOrders = async () => {

    setIsLoading(true);
    setTimeout(() => {
        setOrders([
            { id: 1, orderNumber: "ORD-2026-001", customerName: "Fatih Sengun", totalPrice: 1500, orderDate: "10.02.2026", status: "Completed" },
            { id: 2, orderNumber: "ORD-2026-002", customerName: "John Doe", totalPrice: 450, orderDate: "09.02.2026", status: "Pending" },
            { id: 3, orderNumber: "ORD-2026-003", customerName: "Jane Smith", totalPrice: 3200, orderDate: "08.02.2026", status: "Cancelled" },
        ]);
        setIsLoading(false);
    }, 500);
  }

  return (
    <div>
     <div className='flex justify-between mb-6'>
       <p className='text-slate-200 text-2xl font-medium'>Orders</p>

       <button className='bg-white/15 backdrop-blur-md border border-white/10 cursor-pointer hover:bg-white/10 w-30 h-10 text-sm rounded-lg text-slate-200 transition-colors' onClick={()=>navigate("/orders/create")}>
         + Create Order 
       </button>
     </div>

      <div className='p-6'>


        <div className='grid grid-cols-6 bg-white/15 backdrop-blur-md border border-white/10 h-15 rounded-lg shadow-sm flex items-center justify-center gap-4 p-3 mb-4 text-slate-300'>
          <div className='col-span-2 w-full h-full items-center flex'>
              <span className='font-medium pl-1'>Order Info</span>
          </div>

          <div className='col-span-1 w-full h-full items-center flex'>
              <span className='font-medium'>Total</span>
          </div>

          <div className='col-span-1 w-full h-full items-center flex'>
              <span className='font-medium'>Date</span>
          </div>

          <div className='col-span-2 items-center flex w-full h-full'>
              <span className='font-medium'>Status</span>
          </div>
        </div>


        {isLoading ? (
            <p className="text-slate-400 text-center">Loading orders...</p>
        ) : (
            orders.map((order) => (
                <OrderBox key={order.id} data={order} />
            ))
        )}

      </div>
    </div>
  )
}

export default Orders