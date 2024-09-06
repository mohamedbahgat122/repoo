import axios from "axios";
import { createContext } from "react";


export let CartContext = createContext()

export default function Cartcontextprovider(props){

    
let headers = {token:
    localStorage.getItem('usertoken')}



    function addtocart(productId){

      return  axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{
        productId
      },{
        headers
      })
      .then((res)=>res)
      .catch((err)=>err)
    }



    function showincart(){
      return  axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
            headers
        })
        .then((res)=>res)
        .catch((err)=>err)
    }

    function removecart(productId){
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
            headers
        }).then((res)=>res)
        .catch((err)=>err)
    }


    function updatetocart(productId,count){
      return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
        count
      },{
        headers
      }).then((res)=>res)
      .catch((err)=>err)
    }

    function clearalldata(){
      axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,{
        headers
      }).then((res)=>res)
      .catch((err)=>err)
    }




    return <CartContext.Provider value={{addtocart,showincart,removecart,updatetocart,clearalldata}}> 

        {props.children}
    </CartContext.Provider>
}