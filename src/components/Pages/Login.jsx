
import React from "react";
import {Link, useNavigate} from "react-router-dom";
import './css/Login.scss';
import {TbWritingSign} from "react-icons/tb";
import Logo from '../assets/img/Feelc.png';
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai";
import { signInWithEmailAndPassword,sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";



    function Login() {
      
        
        const [emailLogin,setEmailLogin]=React.useState('');
        const [passwordLogin,setPasswordLogin]=React.useState('');
        
        const Resetpass=async()=>
        {
            await sendPasswordResetEmail(auth,emailLogin);
            
            return(<div>{alert("Password reset sent!")}</div>)
        }
       
        const [passvisible,setPassVisible]=React.useState(false);
        const togglePass=()=>
        {
            setPassVisible(!passvisible);
        };
        const navigate=useNavigate();
        const onSubmit=async(e)=>
        {
            e.preventDefault();
            await signInWithEmailAndPassword(auth,emailLogin,passwordLogin)
            .then((result)=>
            {
                localStorage.setItem("user",emailLogin.split('@')[0]);
                navigate("/home");

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setEmailLogin('');
                setPasswordLogin('');
                console.log(errorCode, errorMessage);
                alert(errorMessage);
                // ..
            });
        }
        const [updateLogin,setUpdateLogin]=React.useState('');
        const handleChange=(event)=>
        {
            setEmailLogin()
        }
        const handleKeyDown=(event)=>
        {
            if(event.key==="Enter")
            {
                signInWithEmailAndPassword(auth,emailLogin,passwordLogin)
                .then((result)=>
                {
                    localStorage.setItem("user",emailLogin.split('@')[0]);
                    navigate("/home");
    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setEmailLogin('');
                    setPasswordLogin('');
                    console.log(errorCode, errorMessage);
                    alert(errorMessage);
                    // ..
                });
            }
        }
        return(
            <div className="app" style={{height:"100vh"}}>
          
                    
            <div style={{maxWidth:"500px",maxHeight:'100px'}}>
            <div id="loginbtnanime" style={{fontWeight:"bold",fontSize:"35px",display:"flex",alignItems:"center",marginTop:"200px",marginLeft:"50px"}}>To continue, log in to Feelchords<TbWritingSign/></div>
            <div><img className="logo" src={Logo} alt=""/></div>
            <div style={{position:"absolute",right:"100px",top:"100px"}}> 
                <div id="displayquestions" >EmailAddress</div>
                <input
                                id="formbox"
                                type="email"
                                label="Email address"
                                value={emailLogin}
                                onChange={(e) => setEmailLogin(e.target.value)}  
                                required                                    
                                placeholder="Email address"                                
                            />
                <div id="displayquestions">Password</div>
                
                <div style={{display:"flex",marginLeft:"30px"}}> 
                <input type={passvisible ? "text" : "password"}
                 required  id="formbox" 
                 style={{left:"0px",width:"250px",border:"0.5px solid lightgray",borderRight:"none"}}  
                 placeholder="Enter your Password"    
                value={passwordLogin}
                onChange={(e) => setPasswordLogin(e.target.value)}
                onKeyDown={handleKeyDown} /> 
                

                <div style={{marginTop:"20px",cursor:"pointer"}}   onClick={togglePass}>{passvisible ? <AiFillEye/> : <AiFillEyeInvisible/>}</div>  </div>
                
                <div id="displayquestions" style={{cursor:"pointer"}} onClick={Resetpass}>Forgot your password?</div>
                <button id="btn" onClick={onSubmit} style={{cursor:"pointer"}}>LOG IN</button>
                <div style={{marginTop:"10px"}}>Don't have an account?</div>
                <div style={{marginTop:"10px"}}><Link to={"/SignUp"}  >
                        Sign Up
                    </Link> 
                </div>
                </div>
                </div>
            </div>
            
            
        )
    }


export default Login;