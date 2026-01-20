import React from 'react'
import { Navigate, Outlet } from 'react-router';
import Header from '../components/generalComponents/Header';

const PrivateRoutes = () => {

const token = localStorage.getItem('accessToken')

if(token){
    return(
        <div><Header/><Outlet/></div>
    )
}


    return (
       <Navigate to="/login"/>
    )
}

export default PrivateRoutes