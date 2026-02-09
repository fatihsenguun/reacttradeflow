import React from 'react'
import women from "../../assets/women2.png"
import type { DtoCategory } from '../../types/requestTypes'
import { GoX } from 'react-icons/go';
import Swal from 'sweetalert2';
import api from '../../config/axios';
import { useNavigate } from 'react-router';





function ProductBox({ data }: { data: any }) {



    const deleteApi = async () => {
        try {
            const addResponse = await api.delete(`/rest/api/product/delete/${data.id}`);

            if (addResponse.data) {
                return true;
            }
            return false;

        } catch (error) {
            console.log(error);

        }

    }

    const deleteProduct = async () => {
        Swal.fire({
            title: `Do you want to delete ${data.name} ?`,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Delete",
            denyButtonText: `Don't Delete`
        }).then(async (result) => {
            if (result.isConfirmed) {
                const isDeleted = await deleteApi();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Product has been deleted",
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    window.location.reload();
                })


            } else if (result.isDenied) {
                Swal.fire("Product is not deleted", "", "info");
            }
        });
    }


    const imageLink = data.images[0].imageUrl

    return (
        <div className='grid grid-cols-6 bg-white/5 backdrop-blur-md border border-white/10 cursor-pointer  hover:bg-white/10    h-23 rounded-lg shadow-sm flex items-center justify-center   gap-4 p-3 '>
            <div className='col-span-2 w-full h-full items-center flex '>

                {/**pic and name */}
                <div className=' grid grid-cols-3  flex  items-center' >
                    <div className='col-span-3 lg:col-span-1 flex w-full h-15 flex items-center justify-center rouneded-md py-2 '>
                        <img src={imageLink} alt="" className='object-contain  h-full rounded-md' />
                    </div>
                    <div className='hidden ml-10 lg:flex flex lg:col-span-2'>
                        <p className=''> {data.name} </p>
                    </div>
                </div>

            </div>

            <div className='col-span-1 w-full h-full items-center flex'>

                <div className='display-center flex  items-center' >
                    <span>{data.stock}</span>

                </div>

            </div>

            <div className='col-span-3 items-center flex w-full h-full justify-between'>
                <div className='display-center overflow-hidden truncate  flex  items-center' >
                    <span>{data.categories.map((category: DtoCategory) => category.name).join(', ')}
                    </span>

                </div>
                <div>
                    <button onClick={deleteProduct}  className='transform transition-transform duration-200 ease-in-out  cursor-pointer hover:scale-125 '>
                        <GoX className='w-6 h-6 ' />
                    </button>
                </div>
            </div>


        </div>
    )
}

export default ProductBox