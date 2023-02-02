import React, { useContext } from "react";
import Form from "./From";


import { userContext } from "./UserContext";

export default function Home() {

    const userNameCtx=useContext(userContext)
    return (<>
        <h1>home</h1>
        <p>hello {userNameCtx.userName}</p>
        <Form/> 
        
    </>)
}