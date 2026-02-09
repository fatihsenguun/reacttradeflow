import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { GoChevronLeft, GoCreditCard, GoLocation, GoPerson } from 'react-icons/go';
// import api from '../../config/axios';

function OrderDetails() {
  const navigate = useNavigate();
  const { id } = useParams(); // URL'den ID'yi alıyoruz
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    getOrderDetails();
  }, [])

  const getOrderDetails = async () => {
    // API İSTEKLERİ SENDE
    // Örnek data:
    setOrder({
        id: id,
        orderNumber: "ORD-2026-001",
        customer: { name: "Fatih Sengun", email: "fatih@kedy.ai", phone: "+90 555 123 4567" },
        address: "Teknopark Istanbul, Pendik, Istanbul, Turkey",
        items: [
            { name: "Wireless Headphones", price: 1000, quantity: 1, image: "https://via.placeholder.com/50" },
            { name: "USB-C Cable", price: 500, quantity: 1, image: "https://via.placeholder.com/50" }
        ],
        total: 1500,
        status: "Completed",
        date: "10.02.2026"
    });
  }

  if (!order) return <div className='text-slate-200 p-6'>Loading details...</div>;

  return (
    <div>
      {/* Header & Back Button */}
      <div className='flex items-center gap-2 mb-6'>
        <button onClick={() => navigate('/orders')} className='p-1 cursor-pointer text-slate-200 hover:text-white transition-colors'>
          <GoChevronLeft className='w-8 h-8' />
        </button>
        <div>
            <p className='text-slate-200 text-2xl font-medium'>Order Details</p>
            <p className='text-slate-400 text-sm'>#{order.orderNumber} - {order.date}</p>
        </div>
      </div>

      <div className='p-6 text-slate-200'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>

          {/* Sol Taraf: Ürün Listesi */}
          <div className='lg:col-span-2 space-y-6'>
            <div className='bg-white/5 p-6 rounded-lg border border-white/10'>
                <h3 className='text-lg font-medium mb-4 border-b border-white/10 pb-2'>Order Items</h3>
                <div className='space-y-4'>
                    {order.items.map((item: any, index: number) => (
                        <div key={index} className='flex items-center justify-between bg-white/5 p-3 rounded-md'>
                            <div className='flex items-center gap-4'>
                                <img src={item.image} alt={item.name} className='w-12 h-12 rounded object-cover bg-white/10' />
                                <div>
                                    <p className='font-medium'>{item.name}</p>
                                    <p className='text-sm text-slate-400'>Qty: {item.quantity}</p>
                                </div>
                            </div>
                            <p className='font-medium'>₺{item.price}</p>
                        </div>
                    ))}
                </div>
                <div className='mt-6 flex justify-end border-t border-white/10 pt-4'>
                    <div className='text-right'>
                        <p className='text-slate-400 text-sm'>Total Amount</p>
                        <p className='text-2xl font-bold text-indigo-400'>₺{order.total}</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Sağ Taraf: Müşteri ve Adres Bilgileri */}
          <div className='space-y-6'>
            
            {/* Customer Info */}
            <div className='bg-white/5 p-6 rounded-lg border border-white/10'>
                <div className='flex items-center gap-2 mb-4 text-indigo-400'>
                    <GoPerson className='w-5 h-5' />
                    <h3 className='text-lg font-medium text-slate-200'>Customer</h3>
                </div>
                <div className='space-y-2 text-sm text-slate-300'>
                    <p><span className='text-slate-500 block text-xs'>Name</span> {order.customer.name}</p>
                    <p><span className='text-slate-500 block text-xs'>Email</span> {order.customer.email}</p>
                    <p><span className='text-slate-500 block text-xs'>Phone</span> {order.customer.phone}</p>
                </div>
            </div>

            {/* Shipping Address */}
            <div className='bg-white/5 p-6 rounded-lg border border-white/10'>
                 <div className='flex items-center gap-2 mb-4 text-indigo-400'>
                    <GoLocation className='w-5 h-5' />
                    <h3 className='text-lg font-medium text-slate-200'>Delivery</h3>
                </div>
                <p className='text-sm text-slate-300 leading-relaxed'>
                    {order.address}
                </p>
            </div>

             {/* Payment / Status Info */}
             <div className='bg-white/5 p-6 rounded-lg border border-white/10'>
                 <div className='flex items-center gap-2 mb-4 text-indigo-400'>
                    <GoCreditCard className='w-5 h-5' />
                    <h3 className='text-lg font-medium text-slate-200'>Payment Status</h3>
                </div>
                <div className='inline-block px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm'>
                    {order.status}
                </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default OrderDetails