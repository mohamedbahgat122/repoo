import React, { useContext, useEffect } from 'react'
import Home from './component/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './component/Layout/Layout'
import Cart from './component/Cart/Cart'
import Products from './component/Products/Products'
import Wishlist from './component/Wishlist/Wishlist'
import Categiors from './component/Categiors/Categiors'
import Brands from './component/Brands/Brands'
import Login from './component/Login/Login'
import Register from './component/Register/Register'
import Notfound from './component/Notfound/Notfound'
import Countercontextprovider from './Context/CounterContext'
import { Usercontext } from './Context/UserContext'
import Protectrouter from './component/Protectrouter/Protectrouter'
import ProductDetiles from './component/ProductDetiles/ProductDetiles'
import { Toaster } from 'react-hot-toast'




let rout = createBrowserRouter([{
  path:'',element:<Layout/>,children:[
    {index:true,element:<Protectrouter><Home/></Protectrouter>},
    {path:'Cart',element:<Protectrouter><Cart/></Protectrouter>},
    {path:'Prodect',element:<Protectrouter><Products/></Protectrouter>},
    {path:'Wishlist',element:<Protectrouter><Wishlist/></Protectrouter>},
    {path:'Categiors',element:<Protectrouter><Categiors/></Protectrouter>},
    {path:'Brands',element:<Protectrouter><Brands/></Protectrouter>},
    {path:'productdetiles/:id',element:<Protectrouter><ProductDetiles/></Protectrouter>},
    {path:'Login',element:<Login/>},
    {path:'Register',element:<Register/>},
    {path:'*',element:<Notfound/>},

  ]
}])






export default function App() {

 let {setUsertoken}=  useContext(Usercontext)

 

useEffect(() => {
  if (localStorage.getItem('usertoken')) {

    setUsertoken(localStorage.getItem('usertoken'))
    
   }
 
}, [])




  return (
    <div>
      <Countercontextprovider>
      <RouterProvider router={rout}></RouterProvider>
      <Toaster/>
      </Countercontextprovider>
    </div>
  )
}
