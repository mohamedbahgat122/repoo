import React, { useEffect, useState } from 'react'
import style from './Categiors.module.css'
import axios from 'axios'
import { FidgetSpinner } from 'react-loader-spinner'

export default function Categiors() {

    
    const [Loading, setLoading] = useState(true)
    const [catt, secatt] = useState([])

    async function showproducr() {
        let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
       secatt(data.data)
       setLoading(false)
        
   
    }
     useEffect(() => {
      showproducr()
     }, [])
   

    return (
        <>
        <h2>Categiors</h2>
        {Loading?<div className="row hei">
                <FidgetSpinner visible={true}
                    height="300"
                    width="300"
                    ariaLabel="fidget-spinner-loading"
                    wrapperStyle={{}}
                    wrapperClass="fidget-spinner-wrapper" />

            </div>:<div className="row gy-3">
                {catt.map((Cat)=> <div key={Cat._id} className="col-lg-2 col-md-6 col-sm-12 ">
                    <div className="x prodect p-3">
                        <img src={Cat.image} height={300} className='w-100' alt="" />
                        <p>{Cat.name}</p>
                    </div>
                </div>)} 
                
                </div>} 
        </>
    )
}
