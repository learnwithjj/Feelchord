import React from "react";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";


function Logout()
{
    

    

    const navigate=useNavigate();
   
    signOut(auth).then(()=>
    {
        

        navigate("/login");
        
    })
    .catch((err)=>
    {
        console.log(err.message);
    })
    
    
      
    return(<div>{alert("Signed out")}
    </div>)
}


export default Logout;