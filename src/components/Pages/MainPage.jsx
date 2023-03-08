import React from "react";
import Logo from '../assets/img/Feelchordsimg1.jpg';
import './css/MainPage.scss';
import {Link} from "react-router-dom";

class MainPage extends React.Component{
    render() {
        return(
            <section id="main">
                    <div className="nav-item">
                        <a className="navbar-brand" href="/">FeelChord  </a>
                    </div>
                    <div className="main-row">
                        <div className="main-row-img">
                            <img className="head-phone-img" src={Logo} alt=""/>
                        </div>
                        <div className="main-row-text">
                            <h1>Greater than music</h1>
                            <p style={{marginBottom:"20px"}}>lets's go</p>
                            <br ></br>
                            <div>
                            <Link to={"/SignUp"} className="btn" >
                                SignUp
                            </Link>
                            
                            <Link to={"/Login"} className="btn" style={{marginLeft:"60px"}}>
                                Login 
                            </Link>
                            </div>
                        </div>
                    </div>
            </section>
        );
    }
}

export default MainPage ;