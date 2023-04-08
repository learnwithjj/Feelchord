import React, {useEffect} from "react";
import './App.scss';
import Home from "../components/Pages/Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from "../components/Pages/MainPage";
import {ThemeContext, themes} from "../api/Theme";
import musicDB from "../db/music";
import {useDispatch, useSelector} from "react-redux";
import {setPlaylist} from "../actions/actions";
import Login from "../components/Pages/Login";
import SignUp from "../components/Pages/SignUp";
import Profile from "../components/Pages/Profile";
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
                    <Routes>
                        <Route path='/' element={<MainPage/>}></Route>
                        <Route path='/login' element={<Login/>}></Route>
                        <Route path='/signup' element={<SignUp/>}></Route>
                        <Route path='/home' element={<Home/>}/>
                        <Route path='/profile' element={<Profile/>}/>
                    </Routes>   
                </Router>
            </>
        </ThemeContext.Provider>
    );
}

export default App;