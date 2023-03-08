
import React from "react";
import {Link} from "react-router-dom";
import './css/Login.scss';



class Login extends React.Component
{
    render()
    {
        return(
            <div className="app">
                <div>
                <div>EmailAddress</div>
                <input type="text" placeholder="Email Address"></input>
                <div>Password</div>
                <input type="password" placeholder="Password"></input>
                <div>Forgot your password?</div>
                <button><Link to={"/Home"}>
                        LOG IN </Link></button>
                <div>Don't have an account?</div>
                <div><Link to={"/SignUp"} className="btn" style={{marginLeft:"60px"}}>
                        Sign Up
                    </Link> 
                </div>
                </div>
            </div>
        )
    }
}

export default Login;