import React from 'react'
import type { DtoCategory } from '../../types/requestTypes'
import { GoX, GoPackage } from 'react-icons/go';
import Swal from 'sweetalert2';
import api from '../../config/axios';
import { useNavigate } from 'react-router';

function ProductBox({ data }: { data: any }) {

    const navigate = useNavigate();


    const imageLink = data.images && data.images.length > 0 ? data.images[0].imageUrl : null;

    const deleteProduct = async (e: React.MouseEvent) => {

        e.stopPropagation();

        Swal.fire({
            title: `Delete ${data.name}?`,
            text: "This action cannot be undone.",
            icon: 'warning', 
            showCancelButton: true,
            confirmButtonText: "Delete",
            confirmButtonColor: "#d33", 
            cancelButtonColor: "#3085d6", 
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await api.delete(`/rest/api/product/delete/${data.id}`);

                    if (response.data) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Product has been deleted",
                            showConfirmButton: false,
                            timer: 1500
                        }).then(() => {
                            window.location.reload();
                        });
                    }
                } catch (error) {
                    console.log(error);
                    Swal.fire("Error!", "Could not delete product.", "error");
                }
            }
        });
    }

    return (
        <div 
        
            className='grid grid-cols-6 bg-white/5 backdrop-blur-md border border-white/10 cursor-pointer hover:bg-white/10 h-23 rounded-lg shadow-sm flex items-center justify-center gap-4 p-3 transition-all'
        >
            <div className='col-span-2 w-full h-full items-center flex'>


                <div className='grid grid-cols-3 flex items-center w-full' >
                    <div className='col-span-3 lg:col-span-1 flex w-full h-15 items-center justify-center rounded-md py-2'>

                         <div className={`w-full h-full flex items-center justify-center rounded-md ${!imageLink ? 'bg-indigo-500/20' : ''}`}>
                            {imageLink ? (
                                <img src={imageLink} alt="" className='object-contain h-full rounded-md' />
                            ) : (
                                <GoPackage className='w-6 h-6 text-indigo-400' />
                            )}
                        </div>
                    </div>
                    <div className='hidden ml-10 lg:flex flex lg:col-span-2'>
                        <p className='text-slate-200 font-medium'> {data.name} </p>
                    </div>
                </div>

            </div>

            <div className='col-span-1 w-full h-full items-center flex'>
                <div className='display-center flex items-center' >
                    <span className='font-medium text-slate-200'>{data.stock}</span>
                </div>
            </div>

            <div className='col-span-3 items-center flex w-full h-full justify-between'>
                <div className='display-center overflow-hidden truncate flex items-center max-w-[80%]' >
                    <span className='text-slate-400 text-sm truncate'>
                        {data.categories.map((category: DtoCategory) => category.name).join(', ')}
                    </span>
                </div>
                

                <div>
                    <button 
                        onClick={deleteProduct} 
                        className='p-2 rounded-full transform transition-transform duration-200 ease-in-out cursor-pointer hover:scale-110 hover:bg-white/10 text-slate-400 hover:text-red-400'
                    >
                        <GoX className='w-6 h-6' />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ProductBox