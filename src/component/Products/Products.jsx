import React, { useContext, useEffect, useState } from 'react'
import style from './Products.module.css'
import axios from 'axios'
import { FidgetSpinner } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast'

export default function Products() {

    const [Prod, setProd] = useState([])
    const [Loading, setLoading] = useState(true)
    let {addtocart}= useContext(CartContext)

    async function showproducts(){
      let {data} =  await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
      setProd(data.data)
      setLoading(false)
      
    }


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
  

    useEffect(()=>{
        showproducts()
    },[])

  



    return (
        <>
        <h2>Products</h2>
        {Loading?<div className="row hei">
                <FidgetSpinner visible={true}
                    height="300"
                    width="300"
                    ariaLabel="fidget-spinner-loading"
                    wrapperStyle={{}}
                    wrapperClass="fidget-spinner-wrapper" />

            </div>:<div className="row gy-4">
                {Prod.map((produ)=><div key={produ._id} className="col-lg-2">
                    <div className="prodect p-3">
                    <Link to={`/productdetiles/${produ.id}`}>
                        <img src={produ.imageCover} className='w-100' alt={produ.title} />
                        <span className='text-main font-sm'>{produ.category.name}</span>
                        <h3 className='h5'>{produ.title.split(' ').splice(0,2).join(' ')}</h3>
                        <div className="p1r d-flex align-items-center justify-content-between">
                            <span>{produ.price} EGP</span>
                            <span>{produ.ratingsAverage} <i className='fas fa-star rating-color'></i></span>
                        </div>
                        </Link>
                        <button onClick={()=>add(produ.id)} className='btn bg-main w-100 text-white'>Add To Cart</button>
                    </div>
                </div>)} 
                
            </div>}  

        </>
    )
}
