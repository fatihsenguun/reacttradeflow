import React from 'react'
import { GoFileDirectory, GoX } from "react-icons/go";
import Swal from 'sweetalert2';
import api from '../../config/axios';
import { useNavigate } from 'react-router';

function CategoryBox({ data }: { data: any }) {

    const navigate = useNavigate();

    const deleteCategory = async (e: React.MouseEvent) => {
        // Tıklama olayının üst elemente (navigate işlemine) geçmesini engeller
        e.stopPropagation();

        Swal.fire({
            title: `Delete ${data.name}?`,
            text: "This action cannot be undone.",
            icon: "warning", // OrderBox'taki gibi Warning ikonu
            showCancelButton: true,
            confirmButtonText: "Delete",
            confirmButtonColor: "#d33", // OrderBox kırmızısı
            cancelButtonColor: "#3085d6", // OrderBox mavisi
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await api.delete("/rest/api/category/delete", {
                        params: { id: data.id }
                    });

                    if (response.data) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Category has been deleted",
                            showConfirmButton: false,
                            timer: 1500
                        }).then(() => {
                            window.location.reload();
                        });
                    }
                } catch (error) {
                    console.log(error);
                    Swal.fire("Error!", "Could not delete category.", "error");
                }
            }
        });
    }

    return (
        // OrderBox ile aynı grid yapısı ve görsel stil
        <div 
            // Kategori detay sayfası varsa burayı açabilirsin:
            // onClick={() => navigate(`/categories/${data.id}`)} 
            className='grid grid-cols-6 bg-white/5 backdrop-blur-md border border-white/10 cursor-pointer hover:bg-white/10 h-23 rounded-lg shadow-sm flex items-center justify-center gap-4 p-3 transition-all'
        >
            
            {/* Kategori Adı ve İkonu (Geniş alan) */}
            <div className='col-span-6 w-full h-full items-center flex justify-between'>
                
                <div className='flex items-center gap-4'>
                    <div className='flex w-15 h-15 items-center justify-center rounded-md py-2'>
                        {/* OrderBox tarzı ikon kutusu */}
                        <div className='p-3 rounded-lg bg-indigo-500/20 flex items-center justify-center w-14 h-14'>
                            <GoFileDirectory className='w-6 h-6 text-indigo-400' />
                        </div>
                    </div>
                    
                    <div className='flex flex-col justify-center'>
                        <p className='text-slate-200 font-medium truncate text-lg'>{data.name}</p>
                        {/* Alt bilgi varsa buraya eklenebilir, yoksa boş kalabilir */}
                    </div>
                </div>

                {/* Silme Butonu - OrderBox Stili */}
                <div>
                    <button 
                        onClick={deleteCategory} 
                        className='p-2 rounded-full transform transition-transform duration-200 ease-in-out cursor-pointer hover:scale-110 hover:bg-white/10 text-slate-400 hover:text-red-400'
                    >
                        <GoX className='w-6 h-6' />
                    </button>
                </div>

            </div>

        </div>
    )
}

export default CategoryBox