import React, { useEffect, useState } from 'react'
import { InputBox } from '../generalComponents/InputBox'
import { supabase } from "../../config/supabaseClient"
import api from '../../config/axios';
import Swal from 'sweetalert2'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { useNavigate } from 'react-router';


interface productAdd {
  name: string,
  description: string,
  price: number,
  stock: number,
  categoryIds: string[],
  images: object[]

}

function ProductAdd() {
  const navigate = useNavigate();
  const people = [
    { id: 1, name: 'Durward Reynolds' },
    { id: 2, name: 'Kenton Towne' },
    { id: 3, name: 'Therese Wunsch' },
    { id: 4, name: 'Benedict Kessler' },
    { id: 5, name: 'Katelyn Rohan' },
  ]



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
  const [selectedPerson, setSelectedPerson] = useState(people[0])

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
            <div>

              <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                <ListboxButton>{selectedPerson.name}</ListboxButton>
                <ListboxOptions anchor="bottom">
                  {people.map((person) => (
                    <ListboxOption key={person.id} value={person} className="data-focus:bg-blue-100">
                      {person.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
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