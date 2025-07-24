import React, { Children, createContext, useState } from 'react'


export const Context = createContext(null)

export const Provider = ({children}) => {
    const [blog, setBlog] = useState(null)
    return(
        <Context.Provider value={{blog, setBlog}}>
            {children}
        </Context.Provider>
    )
}
