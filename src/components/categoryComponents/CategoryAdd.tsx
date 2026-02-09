import React, { useState } from 'react'
import { GoChevronLeft } from "react-icons/go";
import { useNavigate } from 'react-router';
import { InputBox } from '../generalComponents/InputBox';
import Swal from 'sweetalert2';
import api from '../../config/axios';

function CategoryAdd() {

    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("")

    const handleSave = async () => {

        const payload = {
            name: name
        }
        try {
            const addResponse = await api.post("/rest/api/category/add", payload)

            if (addResponse.data) {

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Category has been added",
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    navigate("/category");
                })


            }


        } catch (error) {
            console.log(error);
        }

    }

    const navigate = useNavigate();
    return (
        <div>
            <div className='flex '>
                <button onClick={() => navigate('/category')} className='w-10 h-8 cursor-pointer text-slate-200 hover:text-slate-white/10'>
                    <GoChevronLeft className='w-10 h-8 ' />
                </button>
                <p className=' text-slate-200 text-2xl font-medium'>Add Category</p>

            </div>
            <div className='p-6 text-slate-200'>

                <div className='max-w-2xl mx-auto space-y-6 bg-white/5 p-8 rounded-lg border border-white/10'>

                    <div>
                        <label className='block text-sm font-medium text-slate-400 mb-3'>Category Name</label>
                        <InputBox
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type='text'

                        />
                    </div>

                    <div className='pt-4'>
                        <button
                            onClick={handleSave}
                            disabled={isLoading}
                            className='w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-900/50 text-white font-bold py-3 rounded-md transition-all'
                        >
                            {isLoading ? "Creating..." : "Create Category"}
                        </button>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default CategoryAdd