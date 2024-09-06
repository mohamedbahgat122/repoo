import React, { useEffect, useState } from 'react'
import style from './CategorySlider.module.css'
import axios from 'axios'
import { date } from 'yup'
import Slider from 'react-slick'


export default function CategorySlider() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 100,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrow:false,
        autoplay:true,
        autoplaySpeed:2000,

      };

    const [oxx, setoxx] = useState([])


    async function showslider(){
      let {data} = await  axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    setoxx(data.data)
        
    }

    useEffect(()=>{
        showslider()
    },[])




    return (
        <>
        <h2 className={` ${style.xy} fw-bold text-main my-2`}>CategorySlider</h2>

        <div className="row">
            <Slider  {...settings}>
                {oxx.map((img)=><div key={img._id} className='col-lg-2 '>
                    <div className={`im prodect ${style.xy}`}>
                    <img src={img.image} height={200} className='w-100' alt="" />
                    <p className=' text-center mt-2'>{img.name}</p>
                    </div>
                </div>)}  

            </Slider>

        </div>
        </>
    )
}
