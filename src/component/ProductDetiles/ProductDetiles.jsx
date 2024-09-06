import React, { useEffect, useState } from 'react'
import style from './ProductDetiles.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Circles, FidgetSpinner } from 'react-loader-spinner'
import Slider from 'react-slick'




export default function ProductDetiles() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow:false,
        autoplay:true,
        autoplaySpeed:2000,

      };

    const [Detiless, setDetiless] = useState([])
    const [Loading, setLoading] = useState(true)

    

    let {id}=useParams()
    


    async function Detiles(id) {

       let {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
       setDetiless(data.data);
       setLoading(false)

       
        
    }

    useEffect(()=>{
        Detiles(id)
    },[])





    return (
        <>
       <h2>ProductDetiles</h2>

       {Loading?<div className="row hei">
                <FidgetSpinner visible={true}
                    height="300"
                    width="300"
                    ariaLabel="fidget-spinner-loading"
                    wrapperStyle={{}}
                    wrapperClass="fidget-spinner-wrapper" />

            </div>:<div className="row align-items-center">
                <div className="col-md-4">
                <Slider {...settings}>
                    {Detiless.images.map((image,index)=><img  key={index} src={image} className='w-100'  alt="" />)}
                </Slider>
                </div>
                <div className="col-md-8">
                    <p>{Detiless.description}</p>
                    <h3 className='h5'>{Detiless.title}</h3>
                    <div className="p1r d-flex align-items-center justify-content-between">
                            <span>{Detiless.price} EGP</span>
                            <span>{Detiless.ratingsAverage} <i className='fas fa-star rating-color'></i></span>
                    </div>

                    <span className='text-main font-sm'>{Detiless.category.name}</span>
                    <button className='btn bg-main w-100 text-white'>Add To Cart</button>


                </div>
            </div>}

            

        </>
    )
}
