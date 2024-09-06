import React, { useContext, useEffect, useState } from 'react'
import style from './Cart.module.css'
import { CartContext } from '../../Context/CartContext'
import { FidgetSpinner } from 'react-loader-spinner'
import { date } from 'yup'

export default function Cart() {


    const [Loading, setLoading] = useState(true)
    const [Show, setShow] = useState([])

    let { showincart, removecart,updatetocart ,clearalldata} = useContext(CartContext)


    async function getincart() {

        let { data } = await showincart()
        setShow(data)
        setLoading(false)

    }

    async function remove(id) {
        setLoading(true)
        let { data } = await removecart(id)
        setShow(data)
        setLoading(false) 
        


    }


    async function updates(id,count) {
        setLoading(true)
      let {data} =  await updatetocart(id,count)
      setShow(data)
      setLoading(false)

        
    }


    // async function remove() {
    //     setLoading(true)
    //     let{data}= await clearalldata()
    //     setShow(data)
    //     setLoading(false)
        
    // }




    useEffect(() => {
        getincart()
        
    }, [])










    return (
        <>
            {Loading ? <div className="row hei">
                <FidgetSpinner visible={true}
                    height="300"
                    width="300"
                    ariaLabel="fidget-spinner-loading"
                    wrapperStyle={{}}
                    wrapperClass="fidget-spinner-wrapper" />

            </div> : <div className="x bg-light p-5 mt-5">
                <h2>cart:</h2>
                <div className="xx d-flex justify-content-between align-items-center">
                <div className="ll">
                <p className='my-2 text-main fs-4'>Number of cart item :{Show.numOfCartItems}</p>
                <p className='my-2 text-main fs-4'>totalCartPrice :{Show.data.totalCartPrice}</p>
                </div>
                <div className="vv">
                <button  className='btn border border-danger'>clear all data </button>
                </div>
                </div>


                {Show.data.products.map((product) => <div key={product.product.id} className="row align-items-center  gy-4 my-3">
                    <hr />
                    <div className="col-md-1">
                        <div className="img border-2 card p-1 ">
                            <img src={product.product.imageCover} className='w-100' alt="" />
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="ditels">
                            <h3 className='h5 fw-bold'>{product.product.title.split(' ').splice(0, 4).join('')}</h3>
                            <h4 className='h6 text-main fw-bold'>Price:{product.price}</h4>
                            <button onClick={()=>remove(product.product.id)} className='btn'><i className='fas fa-trash-can text-danger me-2'></i>Remove</button>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="count">
                            <button onClick={()=>updates(product.product.id,product.count+1)} className='btn border me-3 bg-main text-white'>+</button>

                            <span> {product.count}</span>

                            <button  onClick={()=>updates(product.product.id,product.count-1)} className='btn border text-danger ms-3 bg-danger text-white'>-</button>
                        </div>
                    </div>
                </div>)}
            </div>}



        </>
    )
}
