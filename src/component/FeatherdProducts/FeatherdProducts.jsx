import React, { useContext, useEffect, useState } from 'react'
import style from './FeatherdProducts.module.css'
import axios from 'axios'
import { FidgetSpinner } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast'
import { WishlistContext } from '../../Context/WishlistContext'



export default function FeatherdProducts() {


   let {addtocart}= useContext(CartContext)

   let {addtowishlist} = useContext(WishlistContext)


    const [Loading, setLoading] = useState(true)
    const [Products, setProducts] = useState([])

  
    




    async function showproduct() {

        let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
        setProducts(data.data);
        setLoading(false)
        
        
        
    }

    async function addbuton(id) {
       let{data}= await addtowishlist(id)
       if (data.status == 'success') {

        toast.success(data.message,{
            className:' bg-main p-4 text-white fs-5 w-25',
            position:'top-center',
            duration:6000,
            iconTheme:{
                primary:'white',
                secondary:'green'
            }
        })
        
      }
        
    }




    useEffect(()=>{
        showproduct()
    },[])



    async function add(id) {

      let {data} =  await addtocart(id)

      if (data.status == 'success') {

        toast.success(data.message,{
            className:' bg-main p-4 text-white fs-5 w-25',
            position:'top-center',
            duration:6000,
            iconTheme:{
                primary:'white',
                secondary:'green'
            }
        })
        
      }
      
        
    }






    return (
        <>
            <h2 className=' fw-bold text-main my-2'>FeatherdProducts</h2>
            {Loading?<div className="row hei">
                <FidgetSpinner visible={true}
                    height="300"
                    width="300"
                    ariaLabel="fidget-spinner-loading"
                    wrapperStyle={{}}
                    wrapperClass="fidget-spinner-wrapper" />

            </div>:<div className="row gy-4">
                {Products.map((prod)=><div key={prod._id} className="col-lg-2 col-md-6 col-sm-12">
                    
                    <div className="prodect p-3 position-relative">
                    <Link to={`/productdetiles/${prod.id}`}>
                        <img src={prod.imageCover} className='w-100' alt={prod.title} />
                        <span className='text-main font-sm'>{prod.category.name}</span>
                        <h3 className='h5'>{prod.title.split(' ').splice(0,2).join(' ')}</h3>
                        <div className="p1r d-flex align-items-center justify-content-between">
                            <span>{prod.price} EGP</span>
                            <span>{prod.ratingsAverage} <i className='fas fa-star rating-color'></i></span>
                        </div>
                        </Link>
                        <button onClick={()=>addbuton(prod.id)} className={`btn fs-2  ${style.pppo}`}> <i className='fas fa-heart text-main'></i></button>
                        <button onClick={()=>add(prod.id)} className='btn bg-main w-100 text-white'>Add To Cart</button>
                    </div>
                    
                    
                    
                </div>)}
            </div>}

            

            
            
        
        </>
    )
}
