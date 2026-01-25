import React from 'react'
import { useNavigate } from 'react-router'

function Profile() {

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    navigate("/login");
  }





  return (
    <>
      <p className='text-slate-200 text-2xl font-medium'>Dashboard</p>
      <div className='text-white'>
        <button onClick={logout} className='w-20 h-20 bg-white'>

        </button>
      </div>
    </>
  )
}

export default Profile