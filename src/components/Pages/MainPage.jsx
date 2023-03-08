import React from "react";
import HeadPhone from '../assets/img/headphones.svg';
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
                            <img className="head-phone-img" src={HeadPhone} alt=""/>
                        </div>
                        <div className="main-row-text">
                            <h1>Music for everyone</h1>
                            <p style={{marginBottom:"20px"}}>Without music, life would be a mistake</p>
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