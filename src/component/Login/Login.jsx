import React, { useContext, useState } from 'react'
import style from './Login.module.css'
import { useFormik } from 'formik';
import *as yup from 'yup'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FallingLines } from 'react-loader-spinner';
import { Usercontext } from '../../Context/UserContext';
import { Checkbox, Menu, MenuItem } from '@mui/material';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };




export default function Login() {
    const [Loading, setLoading] = useState(false)
    const [Apierror, setApierror] = useState('')
    let {setUsertoken}=useContext(Usercontext)
    let navi = useNavigate()


    async function showdata(values) {
        setLoading(true)
       let{data}= await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,values)
       .catch((arr)=>{setApierror(arr.response.data.message)
        setLoading(false)
        
       },)

       if (data.message == 'success') {
        setLoading(false)
        localStorage.setItem('usertoken' , data.token)
        setUsertoken(data.token)
        navi("/")
        
       }
    }

    let validationSchema=yup.object({
        email:yup.string().required("email is required").email(),
        password:yup.string().required("password is required").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"password isvalid ex(A1234578@)"),
    })


    
    let formik = useFormik({
        initialValues:{
            email:'',
            password:'',
        },validationSchema,onSubmit:showdata
    })

    




    return (
        <>
       <div className="w-75">
            <h2>Login</h2>
            {Apierror?<div className="alert alert-danger py-2">{Apierror}</div>:''}
            <form onSubmit={formik.handleSubmit}> 
    
                <label htmlFor="email">email:</label>
                <input type="email" name='email' id='email' onChange={formik.handleChange} onBlur={formik.handleBlur} className=' form-control my-2' />

                {formik.errors.email && formik.touched.email?<div className="alert alert-danger py-2">{formik.errors.email}</div>:''}


                <label htmlFor="password">password:</label>
                <input type="password" name='password' id='password' onChange={formik.handleChange} onBlur={formik.handleBlur} className=' form-control my-2' />

                {formik.errors.password && formik.touched.password?<div className="alert alert-danger py-2">{formik.errors.password}</div>:''}

                {Loading? <button type='button' disabled={!(formik.isValid&&formik.dirty)} className='btn bg-main text-white'><FallingLines
                    color="#4fa94d"
                    width="25"
                    visible={true}
                    ariaLabel="falling-circles-loading"
                 /></button>:<button type='submit' disabled={!(formik.isValid&&formik.dirty)} className='btn bg-main text-white'>Login</button>}

                 <span className=' ms-3'>Don't have an account?<Link className='text-main' to={'/Register'}>Register</Link></span>
                 <span className='ms-5'>ForgetPassword <Checkbox {...label} defaultChecked /> </span>

                 



                
               
                

            </form>
        </div>

        </>
    )
}
