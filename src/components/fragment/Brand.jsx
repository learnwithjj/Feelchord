import React from "react";
import {Link} from "react-router-dom";
import "../assets/scss/Brand.scss";
import Logo from '../assets/img/Feelchordsimg1.jpg';

class Brand extends React.Component {
    render() {
        return (
            <div  className={"brand"}>
                <Link to={"/home"}>
                        <img src={Logo} width={"80px"} alt=""/>
                </Link>
            </div>
        );
    }
}

export default Brand;