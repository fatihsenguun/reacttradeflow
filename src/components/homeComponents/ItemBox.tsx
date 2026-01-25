import React from 'react'
import women2 from "../../assets/women2.png"

function ItemBox({ data }: { data: any }) {
    console.log(data);
    return (
        <div className='mb-1 flex items-center gap-3 p-3 rounded-lg backdrop-blur-md  hover:bg-white/10  cursor-pointer transition-colors'>


            <div className='w-10 h-10 rounded-lg bg-slate-600 flex items-center justify-center shrink-0'>
                <span className='text-sm font-bold text-white'>
                    <img className='rounded-md' src={data.product.images[0].imageUrl} alt="" />
                </span>
            </div>

            <div className='flex flex-col overflow-hidden w-full'>
                <div>
                    <span className='text-sm font-medium text-white truncate'>{data.product.name}</span>
                </div>
                <div className='flex justify-between w-full'>
                    <span className='text-xs text-slate-400'>Price: {data.priceAtPurchase} </span>
                    <span className='text-xs text-slate-400'>Qty: {data.quantity} </span>
                </div>
            </div>
        </div>
    )
}

export default ItemBox