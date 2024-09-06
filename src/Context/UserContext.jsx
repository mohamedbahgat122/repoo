import { createContext, useState } from "react";


export let Usercontext = createContext()

export default function Usercontextprovider(props){


    const [Usertoken, setUsertoken] = useState(null)




    return<Usercontext.Provider value={{Usertoken,setUsertoken}}>
        {props.children}
    </Usercontext.Provider>
}