
import React from 'react'
import { GoFileDirectory, GoX } from "react-icons/go";
import Swal from 'sweetalert2';
import api from '../../config/axios';
import { useNavigate } from 'react-router';


function CategoryBox({ data }: { data: any }) {

    const navigate = useNavigate();

    const deleteApi = async () => {
        try {
            const addResponse = await api.delete("/rest/api/category/delete", {
                params: {
                    id: data.id
                }
            });

            if (addResponse.data) {
                return true;
            }
            return false;

        } catch (error) {
            console.log(error);

        }

    }

    const deleteCategory = async () => {
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
                    title: "Category has been deleted",
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    window.location.reload();
                })


            } else if (result.isDenied) {
                Swal.fire("Category is not deleted", "", "info");
            }
        });
    }

    console.log(data);
    return (
        <div>
            <div className='bg-white/5 backdrop-blur-md border border-white/10 cursor-pointer  hover:bg-white/10    h-23 rounded-lg shadow-sm flex items-center justify-center   gap-4 p-3 '>
                <div className=' w-full h-full items-center flex justify-between '>

                    {/**pic and name */}
                    <div className=' grid grid-cols-3  flex  items-center' >
                        <div className='lg:col-span-1 flex w-full h-15 flex items-center justify-center rouneded-md py-2 '>
                            <div className=' object-contain w-full h-full rounded-md'>
                                <GoFileDirectory className='ml-5 md:flex w-6 object-contain  h-full rounded-md' />
                            </div>
                        </div>
                        <div className=' ml-10 lg:flex flex lg:col-span-2'>
                            <p className=''> {data.name} </p>
                        </div>
                    </div>
                    <div>
                        <button onClick={deleteCategory} className='transform transition-transform duration-200 ease-in-out  cursor-pointer hover:scale-125 '>
                            <GoX className='w-6 h-6 ' />
                        </button>
                    </div>

                </div>


            </div>
        </div>

    )
}

export default CategoryBox