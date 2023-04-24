import React from "react";
import {Link} from "react-router-dom";
import "../assets/scss/Brand.scss";
import Logo from '../assets/img/Feelc.png';

class Brand extends React.Component {
    render() {
        return (
            <div  className={"brand"}>
                <Link to={"/home"}>
                <img style={{width:"120px"}} src={Logo}  alt=""/>
                </Link>
            </div>
        );
    }
}

export default Brand;