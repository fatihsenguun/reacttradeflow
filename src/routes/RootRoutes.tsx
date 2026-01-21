import React from 'react'
import { Routes, Route } from 'react-router'
import Login from "../pages/Login"
import Home from '../pages/Home'
import PrivateRoutes from './PrivateRoutes'
import Orders from '../pages/Orders'
import Products from '../pages/Products'
import Settings from '../pages/Settings'
import Customers from '../pages/Customers'

function RootRoutes() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />

            <Route element={<PrivateRoutes />}>
                <Route path='/' element={<Home />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/products' element={<Products />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/customers' element={<Customers />} />
            </Route>




        </Routes>
    )
}

export default RootRoutes