import React from "react";
import { useLocation } from "react-router-dom";

function Welcome(){
    const location = useLocation();

    const {username} = location.state;
    return(
        <div>
            <h1 style={{textAlign : "center"}}>Welcome to the Sample Website {username}</h1>
        </div>
    )
}

export default Welcome;