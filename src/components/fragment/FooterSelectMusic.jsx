import React, {useContext} from 'react';
import '../assets/scss/FooterSelectMusic.scss';
import {ThemeContext} from "../../api/Theme";
import {Link} from "react-router-dom";

function FooterSelectMusic() {
    const useStyle = useContext(ThemeContext);

    return (
        <div className={"Footer_Select_Music"}>
            <Link >
                Select a music to continue
            </Link>
        </div>
    );
}

export default FooterSelectMusic;