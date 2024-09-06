import React, { useContext, useEffect } from 'react'
import style from './Home.module.css'
import FeatherdProducts from '../FeatherdProducts/FeatherdProducts'
import MainSlider from '../MainSlider/MainSlider'
import CategorySlider from '../CategorySlider/CategorySlider'


export default function Home() {
    

    return (
        <>
        <MainSlider/>
        <CategorySlider/>
        <FeatherdProducts/>
        </>
    )
}
