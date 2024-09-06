import axios from "axios";
import { createContext } from "react";


export let WishlistContext = createContext()


export default function WishListProvider(props){

    let headers ={
        token:localStorage.getItem('usertoken')
    }

    function addtowishlist(productId){
        return axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
            productId
        },{
            headers

        })
        .then((response)=>response)
        .catch((error)=>error)
    }


    function getinwislist(){

        return axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
            headers
        }).then((response)=>response)
        .catch((error)=>error)
    }


    function removecart(productId){
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,{
            headers
        }).then((res)=>res)
        .catch((err)=>err)
    }
    










    return<WishlistContext.Provider value={{addtowishlist,getinwislist,removecart}}>
        {props.children}
    </WishlistContext.Provider>
}