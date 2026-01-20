import React from 'react'
import { Routes, Route } from 'react-router'
import Login from "../pages/Login"
import Home from '../pages/Home'
import PrivateRoutes from './PrivateRoutes'

function RootRoutes() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />

            <Route element={<PrivateRoutes />}>
                <Route path='/' element={<Home />} />
            </Route>




        </Routes>
    )
}

export default RootRoutes