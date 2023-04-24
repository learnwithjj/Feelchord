import React, {useContext, useState} from "react";
import '../assets/scss/Navigation.scss';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import DropDownLanguageList from "./DropDownLanguageList";
import SearchBar from "./SearchBar";
import Brand from "./Brand";
import DropDownProfile from "./DropDownProfile";
import {Button} from "@material-ui/core";
import {ThemeContext} from "../../api/Theme";
import {BiUser,BiMusic} from "react-icons/bi";
import { IconContext } from "react-icons";

function Navigation() {

    const [isLanguageListOpen, setLangList] = useState(false);
    const [isOpenProfile, setOpenProfile] = useState(false);


    function handleOpenLanguageList() {
        if (isOpenProfile === true)
            setOpenProfile(!isOpenProfile);
            setLangList(!isLanguageListOpen);
    }

    function handleOpenProfile() {
        if (isLanguageListOpen === true)
            setLangList(!isLanguageListOpen);
            setOpenProfile(!isOpenProfile);
    }
    const useStyle = useContext(ThemeContext);
    return (
       

        <nav style={useStyle.component}>
            <Brand/>
            <SearchBar/>
            <div className={"language"} onClick={handleOpenLanguageList}>
                <Button className={"Dropdown-btn"}
                        endIcon={isLanguageListOpen ? <ExpandMoreIcon/> : <ExpandLessIcon/>}>
                    <div className="wrapper">
                   
                        <p> <IconContext.Provider value={{ color:"rgb(2, 58, 2)",style:{width:"35px",height:"20px"}}}><BiMusic/></IconContext.Provider> Languages</p>
                    </div>
                </Button>
                {
                    isLanguageListOpen
                    &&
                    <DropDownLanguageList/>
                }
            </div>
            <div className="profile" onClick={handleOpenProfile}>
            {localStorage.getItem("user")}
                <Button className={"Dropdown-btn"}
                        
                        startIcon={<IconContext.Provider value={{ color:"rgb(2, 58, 2)",style:{width:"38px",height:"28px"}}}><BiUser/></IconContext.Provider>}
                        endIcon={isOpenProfile ? <ExpandMoreIcon/> : <ExpandLessIcon/>}>

                </Button>
                {
                    isOpenProfile &&
                    <DropDownProfile/>
                }
            </div>
            
        </nav>
    );
}

export default Navigation;