import React, {useContext} from "react";
import '../assets/scss/DropDownProfile.scss';
import {ThemeContext} from "../../api/Theme";
import HoverButton from "./HoverButton";
import {AccountBox} from "@material-ui/icons";
import {ImExit} from "react-icons/im";
import {CgProfile} from "react-icons/cg";


const DropDownProfile = () => {
    const useStyle = useContext(ThemeContext);
    return (
        <div style={useStyle.component} className="dropdown-profile">
            <HoverButton Icon={CgProfile} variant={"text"} text={"Profile"}/>
            <HoverButton Icon={ImExit} variant={"text"} text={"Logout"}/>
        </div>
    );
}
export default DropDownProfile;