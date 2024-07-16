import React, { Children } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import NoPage from './pages/nopage/NoPage';
import Dashboard from './pages/admin/Dashboard/Dashboard';
import MyState from './context/data/myState';
import Signup from './pages/registration/Signup';
import Login from './pages/registration/Login';
import ProductInfo from './pages/productInfo/ProductInfo';
import DashboardTab from './pages/admin/Dashboard/DashboardTab';
import AddProduct from './pages/admin/pages/AddProduct';
import UpdateProduct from './pages/admin/pages/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/allproducts/Allproducts';




function App() {
  return (
    <MyState>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/order" element={
          <ProtectedRoute>
            <Order/>
          </ProtectedRoute>
        } />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/dashboard" element={
          <ProtectedRouteForAdmin>
            <Dashboard/>
          </ProtectedRouteForAdmin>
        } />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/productinfo/:id" element={<ProductInfo/>} />
        <Route path="/dashboardtab" element={<DashboardTab/>} />
        <Route path="/allproducts" element={<Allproducts/>} />
        <Route path="/addproduct" element={
          <ProtectedRouteForAdmin>
            <AddProduct/>
          </ProtectedRouteForAdmin>
        } />
        <Route path="/updateproduct" element={
          <ProtectedRouteForAdmin>
            <UpdateProduct/>
          </ProtectedRouteForAdmin>
        } />
        <Route path="/*" element={<NoPage/>} />
      </Routes>
      <ToastContainer/>
    </Router>
    </MyState>
  )
}

export default App

//user 
export const ProtectedRoute = ({children}) =>{
  const user = localStorage.getItem('user')
  if(user){
    return children
  }else{
    return <Navigate to={'/login'}/>
  }
}

//admin
const ProtectedRouteForAdmin = ({children}) =>{
  const admin = JSON.parse(localStorage.getItem('user'))

  if(admin.user.email === 'saurabhmishra2523@gmail.com'){
    return children
  }else{
    return <Navigate to={'/login'}/>
  }
}