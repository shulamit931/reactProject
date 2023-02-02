import React, { createContext, useState } from "react"

export const userContext=createContext();
export default function UserContext(props){
    const [userName,setUserName]=useState();
    return(
        <userContext.Provider value={{userName,setUserName}}>{props.children}</userContext.Provider>
    );
}