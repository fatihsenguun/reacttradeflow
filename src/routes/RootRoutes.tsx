import React from 'react'
import { Routes, Route } from 'react-router'
import Login from "../pages/Login"
import Home from '../pages/Home'
import PrivateRoutes from './PrivateRoutes'
import Orders from '../pages/Orders'
import Products from '../pages/Products'
import Settings from '../pages/Settings'
import Customers from '../pages/Customers'
import Profile from '../pages/Profile'
import ProductAdd from '../components/productsComponents/ProductAdd'
import Category from '../pages/Category'
import CategoryAdd from '../components/categoryComponents/CategoryAdd'

function RootRoutes() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />

            <Route element={<PrivateRoutes />}>
                <Route path='/' element={<Home />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products/add' element={<ProductAdd />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/customers' element={<Customers />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/category' element={<Category />} />
                <Route path='/category/add' element={<CategoryAdd />} />
            </Route>




        </Routes>
    )
}

export default RootRoutes