import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { GoPerson, GoShield, GoSignOut, GoMail } from "react-icons/go";

function Profile() {
  const navigate = useNavigate();
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {

    setFirstName(localStorage.getItem('firstName') || "Admin");
    setLastName(localStorage.getItem('lastName') || "User");
    setRole(localStorage.getItem('role') || "ADMIN");
  }, [])

  const logout = () => {

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("role");


    navigate("/login");
  }

  return (
    <div>
      {/* Header */}
      <div className='flex justify-between items-center mb-6'>
        <p className='text-slate-200 text-2xl font-medium'>My Profile</p>
      </div>

      <div className='p-6 text-slate-200 flex flex-col gap-6'>


        <div className='bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-lg shadow-sm flex items-center gap-6'>
          

          <div className='w-24 h-24 bg-indigo-500/20 rounded-full flex items-center justify-center border border-indigo-500/30'>
            <GoPerson className='w-10 h-10 text-indigo-400' />
          </div>


          <div>
            <h2 className='text-3xl font-bold text-slate-100 mb-2'>
              {firstName} {lastName}
            </h2>
            <div className='flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 w-fit'>
              <GoShield className='text-indigo-400' />
              <span className='text-indigo-300 text-sm font-medium tracking-wide'>{role}</span>
            </div>
          </div>
        </div>

        {/* 2. Alt Kısım: Detaylar ve Aksiyonlar (Grid Yapısı) */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          

          <div className='bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg'>
            <h3 className='text-lg font-medium text-slate-200 mb-6 border-b border-white/10 pb-2'>Account Information</h3>
            
            <div className='space-y-4'>
              <div className='flex items-center justify-between p-3 rounded-md hover:bg-white/5 transition-colors'>
                 <div className='flex items-center gap-3 text-slate-400'>
                    <GoPerson />
                    <span>Full Name</span>
                 </div>
                 <span className='text-slate-200 font-medium'>{firstName} {lastName}</span>
              </div>

              <div className='flex items-center justify-between p-3 rounded-md hover:bg-white/5 transition-colors'>
                 <div className='flex items-center gap-3 text-slate-400'>
                    <GoShield />
                    <span>Role Authorization</span>
                 </div>
                 <span className='text-green-400 font-medium'>Active</span>
              </div>

              <div className='flex items-center justify-between p-3 rounded-md hover:bg-white/5 transition-colors'>
                 <div className='flex items-center gap-3 text-slate-400'>
                    <GoMail />
                    <span>System Status</span>
                 </div>
                 <span className='text-blue-400 font-medium'>Online</span>
              </div>
            </div>
          </div>


          <div className='bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg flex flex-col justify-between'>
            <div>
                <h3 className='text-lg font-medium text-slate-200 mb-2'>Session Management</h3>
                <p className='text-slate-400 text-sm mb-6'>
                    Securely sign out of your account. This will clear your session tokens and redirect you to the login page.
                </p>
            </div>

            <button 
                onClick={logout}
                className='w-full flex items-center justify-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 font-bold py-4 rounded-lg transition-all duration-300 group'
            >
                <GoSignOut className='w-5 h-5 group-hover:-translate-x-1 transition-transform' />
                Sign Out
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Profile