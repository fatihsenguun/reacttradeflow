import React from 'react'
import { GoX, GoPackage } from 'react-icons/go'; 
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';


function OrderBox({ data }: { data: any }) {
    const navigate = useNavigate();


    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Completed': return 'text-green-400 bg-green-400/10 border-green-400/20';
            case 'Pending': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
            case 'Cancelled': return 'text-red-400 bg-red-400/10 border-red-400/20';
            default: return 'text-slate-200 bg-white/5';
        }
    };

    const deleteOrder = async (e: React.MouseEvent) => {
        e.stopPropagation(); 
        
        Swal.fire({
            title: `Delete Order #${data.orderNumber}?`,
            text: "This action cannot be undone.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: "Delete",
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
        }).then((result) => {
            if (result.isConfirmed) {

                console.log("Deleted:", data.id);
                Swal.fire("Deleted!", "Order has been deleted.", "success");
            }
        });
    }

    return (
        <div 
            onClick={() => navigate(`/orders/${data.id}`)} 
            className='grid grid-cols-6 bg-white/5 backdrop-blur-md border border-white/10 cursor-pointer hover:bg-white/10 h-23 rounded-lg shadow-sm flex items-center justify-center gap-4 p-3 mb-3 transition-all'
        >

            <div className='col-span-2 w-full h-full items-center flex'>
                <div className='grid grid-cols-3 flex items-center w-full'>
                    <div className='col-span-1 flex w-full h-15 items-center justify-center rounded-md py-2'>
                        <div className='bg-indigo-500/20 p-3 rounded-lg text-indigo-400'>
                             <GoPackage className='w-6 h-6' />
                        </div>
                    </div>
                    <div className='ml-4 col-span-2 flex flex-col justify-center'>
                        <p className='text-slate-200 font-medium truncate'>#{data.orderNumber}</p>
                        <p className='text-slate-400 text-sm truncate'>{data.customerName}</p>
                    </div>
                </div>
            </div>

            {/* 2. Kolon: Toplam Tutar */}
            <div className='col-span-1 w-full h-full items-center flex'>
                <span className='font-medium text-slate-200'>₺{data.totalPrice}</span>
            </div>

             {/* 3. Kolon: Tarih */}
             <div className='col-span-1 w-full h-full items-center flex'>
                <span className='text-slate-400 text-sm'>{data.orderDate}</span>
            </div>

            {/* 4. Kolon: Durum ve Silme Butonu */}
            <div className='col-span-2 items-center flex w-full h-full justify-between'>
                <div className={`px-3 py-1 rounded-full border text-xs font-medium ${getStatusColor(data.status)}`}>
                    {data.status}
                </div>
                <div>
                    <button 
                        onClick={deleteOrder} 
                        className='p-2 rounded-full transform transition-transform duration-200 ease-in-out cursor-pointer hover:scale-110 hover:bg-white/10 text-slate-400 hover:text-red-400'
                    >
                        <GoX className='w-6 h-6' />
                    </button>
                </div>
            </div>
            
        </div>
        
    )
}

export default OrderBox