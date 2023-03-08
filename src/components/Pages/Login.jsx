
import React from "react";


class Login extends React.Component
{
    render()
    {
        return(
            <div className="app">
                <div>
                <div>EmailAdress</div>
                <input type="text" placeholder="Email Address"></input>
                <div>EmailAdress</div>
                <input type="password" placeholder="Password"></input>
                <div>Forgot your password?</div>
                <button>LOG IN </button>
                <div>Don't have an account?</div>
                <button>Sign up here</button>
                </div>
            </div>
        )
    }
}

export default Login;