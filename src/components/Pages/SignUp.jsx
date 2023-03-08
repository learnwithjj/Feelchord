
import React from "react";
import './css/SignUp.scss';
import {Link} from "react-router-dom";
import { GoogleLogin, GoogleLogout } from "react-google-login";

class SignUp extends React.Component
{
    render()
    {
        return(
            <div className="app">

            <div style={{maxWidth:"500px",maxHeight:'100px'}}>
                <div style={{fontWeight:"bold",textAlign:"center",fontSize:"35px",paddingTop:"30px",paddingBottom:"40px"}}>Sign up for free to start listening.</div>
                <div id="displayquestions">Enter your email</div>
                <input type="text" placeholder="Enter your E-mail"></input>
                <div id="displayquestions">Enter your password</div>
                <input type="text" placeholder="Create a password"></input>
                <div id="displayquestions">confirm your password</div>
                <input type="text" placeholder="password"></input>
                <div id="displayquestions">Enter your Feelchords ID</div>
                <input type="text" placeholder="Enter a profile name."></input>
                <div id="displayquestions">What's your date of birth?</div>
                <div id="">
                    <input type="date"></input> 
                </div>

                <div id="displayquestions">What's your gender?</div>
               <div> <input type="radio" />Male                
                <input type="radio"/>Female
                <input type="radio"/>Other
                <input type="radio"/>Prefer not to say
                </div>
                <div classname ="bn">
                <button>Sign up</button></div>
                <div>
            <h5>or</h5>
            <br />
            <GoogleLogin 
            buttonText="Sign In with Google"/>
            </div>

                <div>Have an account?</div>
                <div id="login"><Link to={"/Login"} className="btn" style={{marginLeft:"30px"}}>
                        Log in
                    </Link> 
                </div>
            </div>

            </div>
        );
    }
    

    

}
export default SignUp;