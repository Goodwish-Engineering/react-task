import React, { Children, createContext, useState } from 'react'


export const Context = createContext(null)

export const Provider = ({children}) => {
    const [blog, setBlog] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(
        () => Boolean(localStorage.getItem("token"))
    )
    return(
        <Context.Provider value={{blog, setBlog, isLoggedIn, setIsLoggedIn}}>
            {children}
        </Context.Provider>
    )
}
