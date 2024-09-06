import React from 'react'
import style from './MainSlider.module.css'
import c1 from '../../assets/images/c1.png'
import c2 from '../../assets/images/c2.jpg'
import c3 from '../../assets/images/c3.webp'
import a1 from '../../assets/images/4ac901111a5cc334f38e264abd5fb290.jpg'
import a2 from '../../assets/images/pd2.jpg'
import Slider from 'react-slick'


export default function MainSlider() {

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

    return (
        <>
        <div className="row my-3 gx-0" >
            <div className=" col-lg-9 col-md-12 col-sm-12">
            <Slider {...settings}>
            <img src={c1} height={400} className='w-100' alt="" />
            <img src={c2} height={400} className='w-100' alt="" />
            <img src={c3} height={400} className='w-100' alt="" />
        
            </Slider>
            </div>
            <div className= {`col-lg-3  ${style.xy}`}>
                
                <img src={a1} height={200} className='w-100' alt="" />
                <img src={a2} height={200} className='w-100' alt="" />
            </div>
        </div>
        </>
    )
}
