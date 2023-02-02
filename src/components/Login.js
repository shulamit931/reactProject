import React, { useContext, useRef, useState } from "react";
import { userContext } from "./UserContext";

export default function Login(props) {

    const userCtx = useContext(userContext);

    const { setIsLogin } = props;
    const [currentUserPass, setCurrentUserPass] = useState("");
    const setUserName = userCtx.setUserName;
    const currentUserName = userCtx.userName;
    const nextPage = () => {
        if (currentUserName && currentUserPass) {
            setUserName(currentUserName);
            setIsLogin(true);
        }
    }
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div className="input-group mb-3" style={{width:"30%",display: "flex", flexWrap: "wrap" }}>
                <span className="input-group-text" id="basic-addon1">name</span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => setUserName(e.target.value)} />
            </div>

            <div className="input-group mb-3" style={{width:"30%",display: "flex", flexWrap: "wrap" }}>
                <span className="input-group-text" id="basic-addon1">password</span>
                <input type="password" className="form-control" placeholder="password" aria-label="Username" aria-describedby="basic-addon1"  onChange={(e) => setCurrentUserPass(e.target.value)}  />
            </div>
            <button type="button" className="btn btn-light" onClick={nextPage}>ok</button>
{/* 

            <input type="text" placeholder="name" onChange={(e) => setUserName(e.target.value)} />
            <input type="password" placeholder="password" onChange={(e) => setCurrentUserPass(e.target.value)} /> 
            <input type="button" value="ok" onClick={nextPage} />*/}

        </div>

    );

}