import React, { Fragment, useEffect, useState } from 'react'
import { InputBox } from '../generalComponents/InputBox'
import { supabase } from "../../config/supabaseClient"
import api from '../../config/axios';
import Swal from 'sweetalert2'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { useNavigate } from 'react-router';


interface productAdd {
  name: string,
  description: string,
  price: number,
  stock: number,
  categoryIds: string[],
  images: object[]

}
interface categoryInt {
  id: string,
  name: string

}

function ProductAdd() {
  const navigate = useNavigate();



  const [categories, setCategories] = useState<categoryInt[]>([])
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [categoryIds, setCategoryIds] = useState(["069fb15c-6875-4a25-9675-d3720db1c0c9"]);
  const [images, setImages] = useState<string[]>([]);
  const [image, setImage] = useState();
  const [categoryFocus, setCategoryFocus] = useState(false);


  const CATEGORY_OPTIONS = [


  ]

  useEffect(() => {
    getCategories();


  }, [])
  const getCategories = async () => {
    try {
      const addResponse = await api.get("/rest/api/category/all")

      if (addResponse.data) {
        console.log(addResponse);
        setCategories(addResponse.data.data)

      }


    } catch (error) {
      console.log(error);
    }

  }


  const uploadImagesToSupabase = async () => {

    const urls: string[] = [];

    for (const file of selectedFiles) {
      const fileName = `${Date.now()}-${file.name}`;
      await supabase.storage.from('products_images').upload(fileName, file);
      const { data: publicUrlData } = supabase.storage
        .from('products_images')
        .getPublicUrl(fileName);

      if (publicUrlData) {
        urls.push(publicUrlData.publicUrl);
        console.log(urls);
      }
    }

    return urls;
  };


  const handleSave = async () => {

    if (selectedFiles.length === 0) return alert("Lütfen en az bir resim seçin.");
    try {

      setIsLoading(true);

      const uploadedUrls = await uploadImagesToSupabase();
      const mappedImages = uploadedUrls.map((url) => ({
        imageUrl: url
      }));
      const payload: productAdd = {
        name: name,
        description: description,
        price: price,
        stock: stock,
        categoryIds: categoryIds,
        images: mappedImages,

      }

      const addResponse = await api.post("/rest/api/product/add", payload)

      if (addResponse.data) {

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Product has been added",
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          navigate("/products");
        })


      }

    }
    catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }

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
              <InputBox value={name} onChange={(e) => (setName(e.target.value))} type='text' />
            </div>
            <div className='w-full'>
              <label className='block text-sm font-medium text-slate-400 mb-2'>Categories</label>

              <Listbox value={categoryIds} onChange={setCategoryIds} multiple>
                <div className='relative mt-1'>


                  <ListboxButton className="relative w-full min-h-13 bg-white/12 p-3 rounded-lg text-left border border-white/10" >
                    {categoryIds.length > 0 ? categories.filter(c => categoryIds.includes(c.id)).map(c => c.name).join(', ') : "Select Category"}
                  </ListboxButton>
                  <Transition
                    as={Fragment}
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >

                    <ListboxOptions className="absolute z-50 bg-slate-900 py-1 shadow-2xl border border-white max-h-60 rounded-lg w-full overflow-auto">
                      {categories.map((category) => (
                        <ListboxOption key={category.id} value={category.id}
                          className={({ active, selected }) =>
                            `relative cursor-pointer select-none py-3 px-4 transition-colors ${active ? 'bg-white/10 text-white' : 'text-slate-300'}
                          ${selected ? 'bg-indigo-600/20 text-indigo-400' : ''} `}>
                          {({ selected }) => (
                            <div className='flex items-center justify-between'>
                              <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>
                                {category.name}

                              </span>
                              {selected && (
                                <span>
                                  ✓
                                </span>
                              )}
                            </div>
                          )}

                        </ListboxOption>
                      ))}
                    </ListboxOptions>
                  </Transition>



                </div>
              </Listbox>




            </div>
            <div>
              <label className='block text-sm font-medium text-slate-400 mb-2'>Description</label>
              <textarea value={description} onChange={(e) => (setDescription(e.target.value))} className='w-full focus:outline-none bg-white/12  h-13 w-full rounded-lg backdrop-blur-md  hover:bg-white/15 focus:bg-white/20  rounded-md p-3 h-32' />
            </div>
            <div >
              <label className='block text-sm font-medium text-slate-400 mb-2'>Images</label>
              <div className='flex gap-2'>
                <label className="w-24 h-24 flex items-center justify-center border-2 border-dashed border-white/10 rounded-lg cursor-pointer hover:bg-white/5">
                  <input type="file" multiple onChange={handleFileSelect} className="hidden" />
                  <span className="text-2xl text-slate-500">+</span>
                </label>
                {previews.map((image) => (
                  <label className="w-24 h-24 flex items-center justify-center border-2 border-dashed border-white/10 rounded-lg cursor-pointer hover:bg-white/5">
                    <img src={image} alt="" />
                  </label>
                ))}
              </div>

            </div>
          </div>


          <div className='space-y-6 bg-white/5 p-6 rounded-lg border border-white/10'>
            <div>
              <label className='block text-sm font-medium  text-slate-400  mb-2'>Price (₺)</label>
              <InputBox onChange={(e) => setPrice(Number(e.target.value))} type='number' />
            </div>
            <div>
              <label className='block text-sm font-medium text-slate-400 mb-2'>Stock Quantity</label>
              <InputBox onChange={(e) => setStock(Number(e.target.value))} type='number' />
            </div>
            <button onClick={handleSave} className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-md transition-colors'>
              Save Product
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductAdd