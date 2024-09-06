import React from 'react'
import style from './Protectrouter.module.css'
import { Navigate } from 'react-router-dom'

export default function Protectrouter(props) {


    if (localStorage.getItem('usertoken')) {
        
        return props.children
        
    }else{
        return <Navigate to={'/Login'}/>
    }

}
