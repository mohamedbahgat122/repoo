import { createContext, useState } from "react";


export let Countercontext = createContext()

export default function Countercontextprovider(props){

    const [Count, setCount] = useState(0)


    function changecount(){
        setCount(Math.random())
    }




    return<Countercontext.Provider value={{Count ,changecount}}>
        {props.children}
    </Countercontext.Provider>
}