import React, { useState } from 'react'
import { InputBox } from '../components/generalComponents/InputBox'
import LogoT from '../assets/logoTradeFlow.png'
import type { DtoLoginIU } from '../types/authTypes';
import axios from 'axios';
import { useNavigate } from 'react-router';


function Login() {

  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
      const navigate = useNavigate();

    const handleLogin = async () => {
        const payload: DtoLoginIU = {
            email: email,
            password: password
        }

        try {
            setIsLoading(true)
            const response = await axios.post("http://localhost:8080/authenticate", payload);
            setIsLoading(false)

            if (response.data.data) {
                console.log(response);
                localStorage.setItem('accessToken', response.data.data.accessToken)
                localStorage.setItem('refreshToken', response.data.data.refreshToken)
                localStorage.setItem('role', response.data.data.role)
                localStorage.setItem('firstName', response.data.data.firstName)
                localStorage.setItem('lastName', response.data.data.lastName)
                navigate('/');

            }
        } catch (error) {
            setIsLoading(false)
            console.log(error);

        }

    }


    return (
        <div className=" bg-slate-950 items-center justify-center flex h-screen ">

            <div className='grid grid-rows-3  flex-col  items-center  h-150  max-w-md w-full bg-slate-900 border border-slate-800 px-6 py-4 rounded-2xl'>

                <div  >
                    <img className='w-60 justify-center ' src={LogoT} alt="" />
                </div>
                <div className=' gap-5 flex flex-col'>
                    <div>
                        <h2 className='mb-1 text-slate-200'>Email</h2>
                        <InputBox
                            type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <h2 className='mb-1 text-slate-200'>Password</h2>
                        <InputBox
                            type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className='h-30'>
                    <button onClick={handleLogin} type="button" className=" rounded-2xl text-white bg-sky-700 hover:bg-sky-800   font-mediumtext-sm px-4 py-2.5 text-center duration-200 w-full ">
                        {isLoading ? "Loading..." : " Sign in"} </button>
                    <div className='mt-10 flex grid-2'>
                        <h3 className=' text-slate-200'>Is there a problem?  </h3>
                        <h3 className='ml-2 text-sky-400'> Get in touch</h3>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Login