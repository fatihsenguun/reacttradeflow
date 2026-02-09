import React, { useEffect, useState } from 'react'
import CategoryBox from '../components/categoryComponents/CategoryBox'
import { useNavigate } from 'react-router'
import api from '../config/axios';
interface data {
    id: string,
    name: string,

}

function Category() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);




    useEffect(() => {

        getProducts();
    }, [])

    const getProducts = async () => {
        try {
            setIsLoading(true)
            const response = await api.get('/rest/api/category/all', {

            });
            setIsLoading(false)


            if (response && response.data.data) {
                console.log(response.data.data);
                setCategories(response.data.data);


            }
        } catch (error) {
            setIsLoading(false)
            console.log(error);

        }
    }



    return (
        <div>
            <div className='flex justify-between'>
                <p className=' text-slate-200 text-2xl font-medium'>Category</p>
                <button className=' bg-white/15 backdrop-blur-md border border-white/10 cursor-pointer hover:bg-white/10   w-30 h-10 text-sm rounded-lg' onClick={() => navigate("/category/add")}>+ Add Category </button>
            </div>

            <div className='p-6'>
                <div className=' bg-white/15 backdrop-blur-md border border-white/10   h-15 rounded-lg shadow-sm flex items-left justify-left   gap-4 p-3 '>
        

                    <div className=' pl-20 w-full h-full items-left flex'>

                        <div className='display-center flex  items-left' >
                            <span className='mt-1 text-left font-medium'>Category Name</span>

                        </div>

                    </div>

    

                </div>
                {categories.map((data:data) => (
                    <CategoryBox key={data.id} data={data} />
                ))}
            </div>
        </div>
    )
}

export default Category