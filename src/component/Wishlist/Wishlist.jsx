import React, { useContext, useEffect, useState } from 'react'
import style from './Wishlist.module.css'
import { WishlistContext } from '../../Context/WishlistContext'
import { FidgetSpinner } from 'react-loader-spinner'

export default function Wishlist() {

    let {getinwislist,removecart} = useContext(WishlistContext)

    const [Loading, setLoading] = useState(true)
    const [List, setList] = useState(null)


    async function Addin() {
      let {data} = await getinwislist()
      setList(data.data);
      setLoading(false)
      
        
    }


    async function deleteprodect(id){
        setLoading(true)
       let {data} = await removecart(id)
       setList(data.data)
      setLoading(false)

      console.log(data);
      
       

    }

    useEffect(()=>{
        Addin()
    },[])






    return (
        <>
        {Loading?<div className="row hei">
                <FidgetSpinner visible={true}
                    height="300"
                    width="300"
                    ariaLabel="fidget-spinner-loading"
                    wrapperStyle={{}}
                    wrapperClass="fidget-spinner-wrapper" />

            </div>:<div className="x bg-light p-5 mt-5">
                <h2 className=' fw-bold text-main'>My wish List: </h2>
                {List.map((lists,index)=><div key={index} className="row align-items-center  gy-4 my-3">
                    <hr />
                    <div  className="col-md-1">
                        <div className="imgs border-2 card p-1 ">
                            <img src={lists.imageCover} className='w-100' alt="" />
                        </div>

                    </div>
                    <div className="col-md-10">
                        <div className="detiles">
                            <h4>{lists.title}</h4>
                            <p className='text-main fw-bold'>Price:{lists.price} EGP</p>
                            <button className='btn'><i className=' fas fa-trash text-danger me-2'></i>Remove</button>
                        </div>
                    </div>
                </div>)} 
            </div>}  
        
        </>
    )
}
