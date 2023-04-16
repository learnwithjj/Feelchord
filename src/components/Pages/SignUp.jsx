
import React from "react";
import './css/SignUp.scss';
import {Link} from "react-router-dom";
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai";
import Logo from '../assets/img/Feelc.png';
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

    function SignUp()
    {
        const navigate=useNavigate();
        const [emailSignup,setEmailSignup]=React.useState('');
        const [passwordSignup,setPasswordSignup]=React.useState('');
        const onSubmit=async(e)=>
        {
            e.preventDefault();
            await createUserWithEmailAndPassword(auth,emailSignup,passwordSignup)
            .then((result)=>
            {
                const user = result.user;
                console.log(user);
                navigate("/home");

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setEmailSignup('');
                setPasswordSignup('');
                console.log(errorCode, errorMessage);
                alert(errorMessage);
                // ..
            });
        }
    

        
        const [passvisible,setPassVisible]=React.useState(false);
        const togglePass=()=>
        {
            setPassVisible(!passvisible);
        };

        return(
            <div className="app" style={{maxHeight:"120vh"}}>
               
            
            <div style={{maxWidth:"1000px",maxHeight:'100px'}}>
                <div id="btn-shine" style={{fontWeight:"bold",fontSize:"35px",display:"flex",alignItems:"center",marginTop:"150px",marginLeft:"50px"}}>Sign up for free to <br/><p style={{marginTop:"70px"}}>start listening.</p></div>
                <div><img className="logo" src={Logo} alt=""/></div>
              <div style={{position:"absolute",right:"30px",top:"20px"}}> 
              <div id="displayquestions">Enter your email</div>
                <input
                                id="formbox"
                                type="email"
                                label="Email address"
                                value={emailSignup}
                                onChange={(e) => setEmailSignup(e.target.value)}  
                                required                                    
                                placeholder="Email address"                                
                            />
                <div id="displayquestions">Enter your password</div>
 <div style={{display:"flex",marginLeft:"100px"}}>
     <input type={passvisible ? "text" : "password"} required  id="formbox" style={{left:"0px",width:"300px",border:"0.5px solid lightgray",borderRight:"none"}}  placeholder="Enter your Password"    
 value={passwordSignup}
 onChange={(e) => setPasswordSignup(e.target.value)} /> 
 
    <div style={{marginTop:"20px",paddingLeft:"-40px",cursor:"pointer"}}   onClick={togglePass}>{passvisible ? <AiFillEye/> : <AiFillEyeInvisible/>}</div>  
    </div>
                <div id="displayquestions">Confirm your password</div>
                <div style={{display:"flex",marginLeft:"100px"}}> 
                <input type={passvisible ? "text" : "password"} required  id="formbox" style={{left:"0px",width:"300px",border:"0.5px solid lightgray",borderRight:"none"}}  placeholder="Confirm your Password"    
                value={passwordSignup}
                onChange={(e) => setPasswordSignup(e.target.value)} /> 
    <div style={{marginTop:"20px",paddingLeft:"-40px",cursor:"pointer"}}   onClick={togglePass}>{passvisible ? <AiFillEye/> : <AiFillEyeInvisible/>}</div>  
    </div>
                <div id="displayquestions">Enter your Feelchords ID</div>
                <input type="text" placeholder="Enter a profile name." id="formbox"></input>
                <div id="displayquestions">What's your date of birth?</div>
                <div id="">
                    <input type="date" style={{width:"30%",borderRadius:"10px",padding:"8px"}}></input> 
                </div>

                <div id="displayquestions" style={{marginBottom:"10px"}}>What's your gender?</div>
               <div> <input type="radio" id="radiobutton"/>Male
                <input type="radio" id="radiobutton"/>Female
                <input type="radio" id="radiobutton"/>Other
                <input type="radio" id="radiobutton"/>Prefer not to say
                </div>
                <div >
            
                    <button id="btn" onClick={onSubmit} style={{cursor:"pointer"}}>Sign up</button>

                <div>
            <h5>or</h5>
            <br />
                {/* <GoogleLogin 
                buttonText="Sign In with Google"/> */}
            </div>

                <div>Have an account?</div>
                <div id="login">
                    <Link to={"/Login"} className="btn" style={{marginLeft:"30px"}}>
                        Log in
                    </Link> 
                </div>

                </div> 
            </div>
                </div>
             </div>
        );
    }
    

    


export default SignUp;