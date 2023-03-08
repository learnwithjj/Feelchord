
import React from "react";
import './css/SignUp.css';

class SignUp extends React.Component
{
    render()
    {
        return(
            <div className="app">

            <div style={{maxWidth:"500px",maxHeight:'100px'}}>
            <div style={{paddingTop:"30px"}}>logo</div>
                <div style={{fontWeight:"bold",fontSize:"35px",paddingTop:"30px",paddingBottom:"40px"}}>Sign up for free to start listening.</div>
                <div id="displayquestions">What's your email?</div>
                <input type="text" placeholder="Enter your email"></input>
                <div id="displayquestions">Confirm your email</div>
                <input type="text" placeholder="Enter your email again"></input>
                <div id="displayquestions">Create a password</div>
                <input type="text" placeholder="Create a password"></input>
                <div id="displayquestions">What should we call you?</div>
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

                <button>Sign up</button>
                <div><div>Have an account?</div><p>Login in</p></div>
            </div>

            </div>
        );
    }
    

    

}
export default SignUp;