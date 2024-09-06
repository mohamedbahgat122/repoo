import React, { useContext, useEffect, useState } from 'react'
import style from './Navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { Countercontext } from '../../Context/CounterContext'
import { Usercontext } from '../../Context/UserContext'
import axios from 'axios'
import im from '../../assets/images/xx.png'
import { date } from 'yup'
import { CartContext } from '../../Context/CartContext'
import { WishlistContext } from '../../Context/WishlistContext'









export default function Navbar() {

   let {showincart}= useContext(CartContext)

   let {getinwislist} = useContext(WishlistContext)


        const [Data, setData] = useState([])
        const [cii, setcii] = useState([])

    
    
    let nav = useNavigate()

    let {Count} = useContext(Countercontext)

    let {Usertoken,setUsertoken} = useContext(Usercontext)


    function logout(){
        localStorage.removeItem('usertoken');
        setUsertoken(null);
        nav('/Login')
        
        

    }

    async function getincart() {

        let { data } = await showincart()
        setData(data)
        

    }
    

    async function wishlist() {

      let {data} = await getinwislist()
      setcii(data);
      
        
    }

    
    useEffect(() => {
        getincart()
        
    }, [])


    useEffect(()=>{
        wishlist()
    },[])

  
   

   




    return (
        <>
        <nav className="navbar ps-5 navbar-expand-lg navbar-light bg-light position-sticky top-0 inde ">
             <div className="container-fluid">
                <Link className="navbar-brand fs-4 fw-bolder text-main ms-5" to={'/'}>
                <img src={im} className='logo-img' alt="" />
                TrendCart</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav fw-bold me-auto mb-2 mb-lg-0 xr log ">
                    {Usertoken !=null?<>
                        <li className="nav-item">
                    <Link className="nav-link ms-3 " aria-current="page" to={'/'}>Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to={'/Prodect'}>Products</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to={'/Categiors'}>Categiors</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to={'/Brands'}>Brands</Link>
                    </li>
                   
                   
                    
                    </>:''}
                    
                </ul>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 position-relative me-5 ">

                    {Usertoken !=null?<>
                        <li className="nav-item position-relative">
                    <Link className="nav-link fs-6 border-start" to={'/Wishlist'}><i className='fas fa-heart ms-2 fs-4 p-1'></i>
                    <span className='moo bg-main px-1 rounded-1 small fw-bold text-white position-absolute top-0 start-50'>{cii.count}</span></Link>
                    </li>
                    <li className="nav-item position-relative">
                    <Link className="nav-link fs-6 border-start" to={'/Cart'} ><i className={`fa-solid p-1 fa-cart-arrow-down ms-2 fs-4` }></i><span className='moo bg-main px-1 rounded-1 small fw-bold text-white position-absolute top-0 start-50'>{Data.numOfCartItems}</span></Link>
                    </li>
                    <li className="nav-item">
                    <span className="nav-link cursor-pointer border-start" onClick={()=>logout()} to={''}>Logout <i className='fas fa-user fs-4'></i></span>
                    </li>

                    
                    </>:<>
                    <li className="nav-item">
                    <Link className="nav-link" to={'/Register'}>Register</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to={'/Login'}>Login</Link>
                    </li>
                    
                    </>}
                    
                    
                </ul>
                
                </div>
            </div>
        </nav>
        </>
    )
}
