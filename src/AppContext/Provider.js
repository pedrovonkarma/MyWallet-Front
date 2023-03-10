import AppContext from "./Context";
import React from "react";
import { useState } from "react";
export default function AppProvider({children}){
    const [tok, setTok] = useState('')
    const [name, setName] = useState('')
    const [rV, setRV] = useState(0)
    const config = {
        headers: {
            "Authorization": `Bearer ${tok}`
        }
    }

    
    return (
        <AppContext.Provider value={{config, setTok, tok, name, setName, rV, setRV}}>
            {children}
        </AppContext.Provider>
    )
}