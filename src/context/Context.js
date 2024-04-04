import { useState, createContext, useEffect } from "react";
//api

const Context = createContext();

const ContextProvider = ({ children }) => {

    const [idUser,setIdUser]=useState('s');

    const value={
        idUser,setIdUser
    };
    return(
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export {Context,ContextProvider}