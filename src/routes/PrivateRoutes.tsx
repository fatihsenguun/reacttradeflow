import React from 'react'
import { Navigate, Outlet } from 'react-router';
import Header from '../components/generalComponents/Header';
import Layout from '../pages/Layout';

const PrivateRoutes = () => {

    const token = localStorage.getItem('accessToken')

    if (token) {
        return (
            <div> <Layout>
                <Outlet />
            </Layout></div>
        )
    }


    return (
        <Navigate to="/login" />
    )
}

export default PrivateRoutes