import React, { useState } from 'react'
import style from './Register.module.css'
import { useFormik } from 'formik';
import *as yup from 'yup'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FallingLines } from 'react-loader-spinner';
import { Menu, MenuItem } from '@mui/material';






export default function Register() {

    const [Loading, setLoading] = useState(false)
    const [Apierror, setApierror] = useState('')
    let navi = useNavigate()


    async function showdata(values) {
        setLoading(true)
       let{data}= await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,values)
       .catch((arr)=>{setApierror(arr.response.data.message)
        setLoading(false)
       },)

       if (data.message == 'success') {
        setLoading(false)
        navi("/Login")
        
       }
    }
    





    let validationSchema=yup.object({
        name:yup.string().required("name is required").min(8,"Letters are less than 8 characters").max(30,"Letters are more than 30 characters"),
        email:yup.string().required("email is required").email(),
        password:yup.string().required("password is required").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"password isvalid ex(A1234578@)"),
        rePassword:yup.string().required("repassword is required").oneOf([yup.ref("password")],"password don,t match"),
        phone:yup.string().required("phone is required").matches(/^(010|011|012|015)[0-9]{8}$/,"phone isvalid")
    })
    
    

    let formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            password:'',
            rePassword:'',
            phone:'',
        },validationSchema,onSubmit:showdata
    })


        
    
    return (
        <>

        

        <div className="w-75">
            <h2>Register</h2>
            {Apierror?<div className="alert alert-danger py-2">{Apierror}</div>:''}
            <form onSubmit={formik.handleSubmit}> 
                <label htmlFor="name">Name:</label>
                <input type="text" name='name' id='name' onChange={formik.handleChange} onBlur={formik.handleBlur} className=' form-control my-2' />


                    {formik.errors.name && formik.touched.name?<div className="alert alert-danger py-2">{formik.errors.name}</div>:''}


                <label htmlFor="email">email:</label>
                <input type="email" name='email' id='email' onChange={formik.handleChange} onBlur={formik.handleBlur} className=' form-control my-2' />

                {formik.errors.email && formik.touched.email?<div className="alert alert-danger py-2">{formik.errors.email}</div>:''}


                <label htmlFor="password">password:</label>
                <input type="password" name='password' id='password' onChange={formik.handleChange} onBlur={formik.handleBlur} className=' form-control my-2' />

                {formik.errors.password && formik.touched.password?<div className="alert alert-danger py-2">{formik.errors.password}</div>:''}


                <label htmlFor="rePassword">rePassword:</label>
                <input type="password" name='rePassword' id='rePassword' onChange={formik.handleChange} onBlur={formik.handleBlur} className=' form-control my-2' />

                {formik.errors.rePassword && formik.touched.rePassword?<div className="alert alert-danger py-2">{formik.errors.rePassword}</div>:''}



                <label htmlFor="phone">phone:</label>
                <input type="tel" name='phone' id='phone' onChange={formik.handleChange} onBlur={formik.handleBlur} className=' form-control my-2' />
                {formik.errors.phone && formik.touched.phone?<div className="alert alert-danger py-2">{formik.errors.phone}</div>:''}


                {Loading? <button type='button' disabled={!(formik.isValid&&formik.dirty)} className='btn bg-main text-white'><FallingLines
                    color="#4fa94d"
                    width="25"
                    visible={true}
                    ariaLabel="falling-circles-loading"
                 /></button>:<button type='submit' disabled={!(formik.isValid&&formik.dirty)} className='btn bg-main text-white'>Register</button>}

                <span className=' ms-3'>Do you have an account?<Link className='text-main' to={'/Login'}>Login</Link></span>


                
               
                

            </form>
        </div>
        
        
        </>
    )
}
