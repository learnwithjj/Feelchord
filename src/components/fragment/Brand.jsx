import React from "react";
import {Link} from "react-router-dom";
import "../assets/scss/Brand.scss";
import Logo from '../assets/img/Feelc.png';

class Brand extends React.Component {
    render() {
        return (
            <div  className={"brand"}>
                <Link to={"/home"}>
                        <img src={Logo} width={"100px"} alt=""/>
                </Link>
            </div>
        );
    }
}

export default Brand;