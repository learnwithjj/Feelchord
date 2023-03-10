import React, {useEffect} from "react";
import './App.scss';
import Home from "../components/Pages/Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from "../components/Pages/MainPage";
import {ThemeContext, themes} from "../api/Theme";
import musicDB from "../db/music";
import {useDispatch, useSelector} from "react-redux";
import {setPlaylist} from "../actions/actions";
import Login from "../components/Pages/Login";
import SignUp from "../components/Pages/SignUp";
const App = () => {

    const {language} =  (state => state.musicReducer);

    const dispatch = useDispatch();
    // useEffect(()=>{
    //     if (language === null || language.includes("any")){
    //         dispatch(setPlaylist(musicDB))
    //     }
    //     else if (language.includes('hindi')){
    //         alert("No hindi tracks available")
    //     } else {
    //         let x = musicDB.filter((item)=>(
    //             item.lang && language.includes(item.lang.toLowerCase())
    //         ))
    //         dispatch(setPlaylist(x))
    //     }
    // },[dispatch, language]);

    return (
        <ThemeContext.Provider value={themes.light}>
            <>
                <Router>
                    <Switch>
                        <Route path="/" exact component={MainPage}/>
                        <Route path="/Login" component={Login}/>
                        <Route path="/SignUp" component={SignUp}/>
                        <Route path="/home" component={Home}/>
                    </Switch>
                </Router>
            </>
        </ThemeContext.Provider>
    );
}

export default App;