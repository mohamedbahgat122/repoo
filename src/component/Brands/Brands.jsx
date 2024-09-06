import React, { useState } from 'react'
import style from './Brands.module.css'
import axios from 'axios'
import { useEffect } from 'react'
import { FidgetSpinner } from 'react-loader-spinner'

export default function Brands() {

    const [Loading, setLoading] = useState(true)
    const [Brand, setBrand] = useState([])


    async function showprand() {
       let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
       setBrand(data.data)
       setLoading(false)
       
        
    }

    useEffect(() => {
       showprand()
    }, [])


    return (
        <>
        <h2>Brands</h2>
        {Loading?<div className="row hei">
                <FidgetSpinner visible={true}
                    height="300"
                    width="300"
                    ariaLabel="fidget-spinner-loading"
                    wrapperStyle={{}}
                    wrapperClass="fidget-spinner-wrapper" />

            </div>:<div className="row gy-3">
                {Brand.map((brand)=><div key={brand._id} className="col-lg-3 col-md-6">
                    <div className="x prodect p-3">
                        <img src={brand.image} className='w-100' alt="" />
                        <p className=' text-center text-main fw-bold'>{brand.name}</p>
                    </div>
                    
                    </div>)}
                
            </div>}  
        </>
    )
}
