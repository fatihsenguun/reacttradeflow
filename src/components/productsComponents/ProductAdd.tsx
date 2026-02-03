import React from 'react'
import { InputBox } from '../generalComponents/InputBox'

function ProductAdd() {
  const select = () => {

  }
  return (
 <div className='p-6 text-slate-200'>
  <p className='text-2xl font-medium mb-6'>Add New Product</p>
  
  <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
    {/* Ana Bilgiler */}
    <div className='lg:col-span-2 space-y-6 bg-white/5 p-6 rounded-lg border border-white/10'>
      <div>
        <label className='block text-sm font-medium text-slate-400 mb-2'>Product Name</label>
        <InputBox type='text' />
      </div>
      <div>
        <label className='block text-sm font-medium text-slate-400 mb-2'>Description</label>
        <textarea className='w-full bg-slate-800/50 border border-slate-700 rounded-md p-3 h-32' />
      </div>
    </div>

    {/* Yan Bilgiler & Fiyat */}
    <div className='space-y-6 bg-white/5 p-6 rounded-lg border border-white/10'>
      <div>
        <label className='block text-sm font-medium text-slate-400 mb-2'>Price (₺)</label>
        <InputBox type='number'  />
      </div>
      <div>
        <label className='block text-sm font-medium text-slate-400 mb-2'>Stock Quantity</label>
        <InputBox type='number' />
      </div>
      <button className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-md transition-colors'>
        Save Product
      </button>
    </div>
  </div>
</div>
  )
}

export default ProductAdd