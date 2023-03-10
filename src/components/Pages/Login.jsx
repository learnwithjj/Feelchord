
import React from "react";
import {Link} from "react-router-dom";
import './css/Login.scss';
import {TbWritingSign} from "react-icons/tb";

import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai";
// import {TextInput} from 'react-native';


    function Login() {
      
       
        
       
        const [passvisible,setPassVisible]=React.useState(false);
        const togglePass=()=>
        {
            setPassVisible(!passvisible);
        };

        return(
            <div className="app" style={{height:"100vh"}}>
                
                    
            <div style={{maxWidth:"500px",maxHeight:'100px'}}>
            <div id="loginbtnanime" style={{fontWeight:"bold",fontSize:"35px",display:"flex",alignItems:"center",marginTop:"200px",marginLeft:"50px"}}>To continue, log in to Feelchords<TbWritingSign/></div>
            <div style={{position:"absolute",right:"100px",top:"100px"}}> 
                <div id="displayquestions" >EmailAddress</div>
                <input id="formbox" type="text" placeholder="Email Address" style={{width:"300px"}}></input>
                <div id="displayquestions">Password</div>
                
                <div style={{display:"flex",marginLeft:"30px"}}> <input type={passvisible ? "text" : "password"} required  id="formbox" style={{left:"0px",width:"250px",border:"0.5px solid lightgray",borderRight:"none"}}  placeholder="Enter your Password"    /> 
    <div style={{marginTop:"20px",cursor:"pointer"}}   onClick={togglePass}>{passvisible ? <AiFillEye/> : <AiFillEyeInvisible/>}</div>  </div>
                
                <div id="displayquestions">Forgot your password?</div>
                <button id="btn" style={{marginTop:"30px"}}><Link to={"/Home"} style={{color:"black"}}>
                        LOG IN </Link></button>
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