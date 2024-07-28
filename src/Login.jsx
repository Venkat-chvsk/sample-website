import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import logins from "./logins";
import './style.css';

function Login(){

    const navigate = useNavigate();
    const [creds,setCreds] = useState({uname : '',pwd : ''});
    const [iscorrect,setCorrect] = useState(true);

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;

        setCreds({...creds,[name] : value})
    }

    function handleClick(e){
        e.preventDefault();

        const validate = logins.filter(login => login.name == creds.uname && login.pwd == creds.pwd);
        if(validate.length > 0){
            navigate('/welcome',{state : {username : creds.uname}});
        }
        else{
            setCorrect(false);

            setCreds({...creds,pwd : ''});
        }
    }

    return(
        <div className="container">
             <h1>Login Here</h1>
            <form className="form">
                <label>Username :
                <input type="text" name="uname" value={creds.uname} onChange={handleChange}></input>
                </label>
                <label>Password :
                <input type="password" name="pwd" value={creds.pwd} onChange={handleChange}></input>
                </label>
                
                <button type="submit" onClick={handleClick}>Submit</button>
            </form>
            {!iscorrect && <p className="error">Please Enter Valid Credentials</p>}
        </div>
    )
}

export default Login;