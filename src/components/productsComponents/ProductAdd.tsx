import React, { useState } from 'react'
import { InputBox } from '../generalComponents/InputBox'

function ProductAdd() {

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const select = () => {
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setSelectedFiles(prev => [...prev, ...filesArray]);


      const newPreviews = filesArray.map(file => URL.createObjectURL(file));
      setPreviews(prev => [...prev, ...newPreviews]);

    }
  }

  return (
    <div>
      <p className='text-2xl font-medium mb-6'>Add New Product</p>

      <div className='p-6 text-slate-200'>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>

          <div className='lg:col-span-2 space-y-6 bg-white/5 p-6 rounded-lg border border-white/10'>
            <div>
              <label className='block text-sm font-medium text-slate-400 mb-2'>Product Name</label>
              <InputBox type='text' />
            </div>
            <div>
              <label className='block text-sm font-medium text-slate-400 mb-2'>Description</label>
              <textarea className='w-full focus:outline-none bg-white/12  h-13 w-full rounded-lg backdrop-blur-md  hover:bg-white/15 focus:bg-white/20  rounded-md p-3 h-32' />
            </div>
            <div>
              <label className='block text-sm font-medium text-slate-400 mb-2'>Images</label>
              <label className="w-24 h-24 flex items-center justify-center border-2 border-dashed border-white/10 rounded-lg cursor-pointer hover:bg-white/5">
                <input type="file" multiple onChange={handleFileSelect} className="hidden" />
                <span className="text-2xl text-slate-500">+</span>
              </label>

            </div>
          </div>


          <div className='space-y-6 bg-white/5 p-6 rounded-lg border border-white/10'>
            <div>
              <label className='block text-sm font-medium  text-slate-400  mb-2'>Price (₺)</label>
              <InputBox type='number' />
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
    </div>
  )
}

export default ProductAdd