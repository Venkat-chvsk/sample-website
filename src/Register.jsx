import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import './style.css'

function Register(){

    const navigate = useNavigate();
    const [creds,setCreds] = useState({uname : '',pwd : '',cpwd : ''});
    const [iserror,setError] = useState(false);

    function handleChange(e){
        const name = e.target.name;
        console.log("name is " + name);
        const value = e.target.value;
        console.log("value is " + value);

       setCreds({...creds,[name]:value});
    }
    function handleClick(e){
        e.preventDefault();

        if(creds.pwd === creds.cpwd){
            navigate('/login');
        }
        else{
            setError(true);
            //return <p className="error">The password fields should match.</p>
            setCreds({...creds,pwd : '',cpwd : ''});
        }
    }
    return(
        <div className="container">
            <h1>Register Here</h1>
            <form className="form">
                <label>Username :
                <input type="text" name="uname" value={creds.uname} onChange={handleChange}></input>
                </label>
                <label>Password :
                <input type="password" name="pwd" value={creds.pwd} onChange={handleChange}></input>
                </label>
                <label>Confirm Password :
                <input type="text" name="cpwd" value={creds.cpwd} onChange={handleChange}></input>
                </label>
                
                <button type="submit" onClick={handleClick}>Submit</button>
            </form>
            {iserror && <p className="error">The password fields should match.</p>}
        </div>
    )
};

export default Register;