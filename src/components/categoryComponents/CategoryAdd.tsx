import React from 'react'
import { GoChevronLeft } from "react-icons/go";
import { useNavigate } from 'react-router';

function CategoryAdd() {
    const navigate = useNavigate();
    return (
        <div>
            <div className='flex '>
                <button onClick={()=>navigate('/category') } className='w-10 h-8 cursor-pointer text-slate-200 hover:text-slate-white/10'>
                    <GoChevronLeft className='w-10 h-8 ' />
                </button>
                <p className=' text-slate-200 text-2xl font-medium'>Add Category</p>

            </div>
        </div>
    )
}

export default CategoryAdd